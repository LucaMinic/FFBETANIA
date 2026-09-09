import { useState } from 'react'
import { Link } from 'react-router'
import { Copy, Check } from 'lucide-react'
import { useT } from '../context/LanguageContext'
import { bonifici } from '../data/bonifici'

interface DonationFormProps {
  /** Optional campaign/project id, for reuse on future "I nostri progetti" pages. */
  progetto?: string
}

type Frequency = 'once' | 'monthly'
type Metodo = 'carta' | 'paypal' | 'bonifico'

// Fallback used until the backend's settings endpoint is live (see comment in
// loadSuggestedAmounts below). Keep in sync with the "Importi suggeriti" field
// in the admin panel's Impostazioni > Donazioni screen.
const DEFAULT_AMOUNTS = [15, 30, 100]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function DonationForm({ progetto }: DonationFormProps) {
  const t = useT()
  const [amount, setAmount] = useState<number | null>(DEFAULT_AMOUNTS[1])
  const [customAmount, setCustomAmount] = useState('')
  const [frequency, setFrequency] = useState<Frequency>('once')
  const [metodo, setMetodo] = useState<Metodo>('carta')

  const [nome, setNome] = useState('')
  const [cognome, setCognome] = useState('')
  const [email, setEmail] = useState('')
  const [anonimo, setAnonimo] = useState(false)
  const [privacyAccettata, setPrivacyAccettata] = useState(false)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [bonificoInAttesa, setBonificoInAttesa] = useState<{ causale: string } | null>(null)
  const [copiedIban, setCopiedIban] = useState<string | null>(null)

  const selectedAmount = customAmount ? Number(customAmount) : amount

  const handleAmountClick = (value: number) => {
    setAmount(value)
    setCustomAmount('')
  }

  const handleCustomChange = (value: string) => {
    setCustomAmount(value.replace(/[^0-9]/g, ''))
    setAmount(null)
  }

  const handleFrequencyChange = (f: Frequency) => {
    setFrequency(f)
    // Il bonifico è un'operazione manuale una tantum: per un rinnovo mensile
    // serve un addebito automatico, che passa da Stripe (carta/PayPal).
    if (f === 'monthly' && metodo === 'bonifico') setMetodo('carta')
  }

  const copyIban = (iban: string) => {
    navigator.clipboard.writeText(iban)
    setCopiedIban(iban)
    setTimeout(() => setCopiedIban((current) => (current === iban ? null : current)), 2000)
  }

  const validate = () => {
    if (!selectedAmount || selectedAmount <= 0) {
      setError(
        t({
          it: 'Inserisci un importo valido.',
          en: 'Enter a valid amount.',
          de: 'Bitte gib einen gültigen Betrag ein.',
          pt: 'Insira um valor válido.',
        }),
      )
      return false
    }

    if (!nome.trim() || !cognome.trim() || !EMAIL_RE.test(email)) {
      setError(
        t({
          it: 'Inserisci nome, cognome e un indirizzo email valido.',
          en: 'Enter your first name, last name and a valid email address.',
          de: 'Bitte gib Vorname, Nachname und eine gültige E-Mail-Adresse ein.',
          pt: 'Insira nome, sobrenome e um endereço de e-mail válido.',
        }),
      )
      return false
    }

    if (!privacyAccettata) {
      setError(
        t({
          it: "Per proseguire devi accettare l'Informativa Privacy.",
          en: 'You must accept the Privacy Policy to continue.',
          de: 'Um fortzufahren, musst du die Datenschutzerklärung akzeptieren.',
          pt: 'Para continuar, você deve aceitar a Política de Privacidade.',
        }),
      )
      return false
    }

    return true
  }

  const donatorePayload = () => ({
    nome: nome.trim(),
    cognome: cognome.trim(),
    email: email.trim(),
    anonimo,
  })

  const consensoPayload = () => ({
    accettato: true,
    accettatoIl: new Date().toISOString(),
  })

  const handleSubmit = async () => {
    if (!validate()) return

    const apiBase = import.meta.env.VITE_API_BASE_URL

    if (!apiBase) {
      // Backend non ancora collegato: degradiamo con grazia invece di rompere la pagina.
      setError(
        t({
          it: 'Il pagamento online non è ancora attivo. Nel frattempo puoi donare con bonifico qui sotto, oppure scriverci a info@ffbetania.net.',
          en: 'Online payment is not active yet. In the meantime you can donate by bank transfer below, or write to us at info@ffbetania.net.',
          de: 'Die Online-Zahlung ist noch nicht aktiv. In der Zwischenzeit kannst du unten per Überweisung spenden oder uns unter info@ffbetania.net schreiben.',
          pt: 'O pagamento online ainda não está ativo. Enquanto isso, você pode doar por transferência bancária abaixo, ou escrever para info@ffbetania.net.',
        }),
      )
      return
    }

    setLoading(true)
    setError(null)

    try {
      if (metodo === 'bonifico') {
        const causale = `Donazione ${nome.trim()} ${cognome.trim()}`

        const res = await fetch(`${apiBase}/api/donazioni/intenzione-bonifico`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            amount: selectedAmount,
            currency: 'eur',
            progetto: progetto ?? null,
            causale,
            donatore: donatorePayload(),
            consensoPrivacy: consensoPayload(),
          }),
        })

        if (!res.ok) throw new Error('intenzione_bonifico_failed')

        setBonificoInAttesa({ causale })
        setLoading(false)
        return
      }

      const res = await fetch(`${apiBase}/api/donazioni/checkout-session`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          amount: selectedAmount,
          currency: 'eur',
          recurring: frequency === 'monthly',
          metodo,
          progetto: progetto ?? null,
          donatore: donatorePayload(),
          consensoPrivacy: consensoPayload(),
        }),
      })

      if (!res.ok) throw new Error('checkout_session_failed')

      const data = (await res.json()) as { url?: string }
      if (!data.url) throw new Error('missing_checkout_url')

      window.location.href = data.url
    } catch {
      setError(
        t({
          it: 'Non è stato possibile avviare il pagamento. Riprova tra qualche minuto.',
          en: 'Could not start the payment. Please try again in a few minutes.',
          de: 'Die Zahlung konnte nicht gestartet werden. Bitte versuche es in ein paar Minuten erneut.',
          pt: 'Não foi possível iniciar o pagamento. Tente novamente em alguns minutos.',
        }),
      )
      setLoading(false)
    }
  }

  const inputClass =
    'w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--warm-orange)]'

  if (bonificoInAttesa) {
    return (
      <div className="max-w-md mx-auto text-left bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 mb-10">
        <h3 className="text-lg font-bold text-[var(--deep-blue)] mb-2">
          {t({ it: 'Grazie, ' + nome + '!', en: 'Thank you, ' + nome + '!', de: 'Danke, ' + nome + '!', pt: 'Obrigado, ' + nome + '!' })}
        </h3>
        <p className="text-sm text-gray-600 mb-5">
          {t({
            it: `Per completare la tua donazione di ${selectedAmount} € effettua un bonifico a una delle coordinate qui sotto, indicando come causale:`,
            en: `To complete your €${selectedAmount} donation, make a bank transfer to one of the accounts below, using this payment reference:`,
            de: `Um deine Spende von ${selectedAmount} € abzuschließen, überweise auf eines der unten stehenden Konten und gib folgenden Verwendungszweck an:`,
            pt: `Para concluir sua doação de ${selectedAmount} €, faça uma transferência bancária para uma das contas abaixo, usando esta referência:`,
          })}
        </p>
        <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 mb-6">
          <code className="flex-1 text-sm font-mono text-[var(--deep-blue)]">{bonificoInAttesa.causale}</code>
          <button
            type="button"
            onClick={() => copyIban(bonificoInAttesa.causale)}
            className="p-1.5 rounded-md bg-[var(--deep-blue)] text-white hover:brightness-90 transition-all shrink-0"
          >
            {copiedIban === bonificoInAttesa.causale ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>

        <div className="space-y-4">
          {bonifici.map((b) => (
            <div key={b.iban} className="rounded-xl border-l-4 border-[var(--deep-blue)] bg-gray-50 p-4">
              <p className="text-xs text-gray-500 mb-0.5">{b.banca}</p>
              <div className="flex items-center gap-2">
                <code className="flex-1 text-sm font-mono text-[var(--deep-blue)] break-all">{b.iban}</code>
                <button
                  type="button"
                  onClick={() => copyIban(b.iban)}
                  className="p-1.5 rounded-md bg-[var(--deep-blue)] text-white hover:brightness-90 transition-all shrink-0"
                >
                  {copiedIban === b.iban ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-gray-400 mt-5">
          {t({
            it: 'Riceverai una email di conferma non appena confermeremo la ricezione del bonifico.',
            en: "You'll receive a confirmation email as soon as we confirm receipt of the transfer.",
            de: 'Du erhältst eine Bestätigungs-E-Mail, sobald wir den Eingang der Überweisung bestätigt haben.',
            pt: 'Você receberá um e-mail de confirmação assim que confirmarmos o recebimento da transferência.',
          })}
        </p>
      </div>
    )
  }

  const ctaLabel = loading
    ? t({ it: 'Attendere…', en: 'Please wait…', de: 'Bitte warten…', pt: 'Aguarde…' })
    : metodo === 'bonifico'
      ? t({
          it: `Registra donazione di ${selectedAmount ?? ''} €`,
          en: `Register €${selectedAmount ?? ''} donation`,
          de: `Spende von ${selectedAmount ?? ''} € registrieren`,
          pt: `Registrar doação de ${selectedAmount ?? ''} €`,
        })
      : frequency === 'monthly'
        ? t({
            it: `Dona ${selectedAmount ?? ''} € al mese`,
            en: `Donate €${selectedAmount ?? ''} monthly`,
            de: `Spende ${selectedAmount ?? ''} € monatlich`,
            pt: `Doe ${selectedAmount ?? ''} € por mês`,
          })
        : t({
            it: `Dona ${selectedAmount ?? ''} €`,
            en: `Donate €${selectedAmount ?? ''}`,
            de: `Spende ${selectedAmount ?? ''} €`,
            pt: `Doe ${selectedAmount ?? ''} €`,
          })

  return (
    <div className="max-w-md mx-auto text-left bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8 mb-10">
      <div className="flex rounded-xl bg-gray-100 p-1 mb-6">
        {(['once', 'monthly'] as Frequency[]).map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => handleFrequencyChange(f)}
            className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
              frequency === f ? 'bg-[var(--deep-blue)] text-white shadow' : 'text-gray-500'
            }`}
          >
            {f === 'once'
              ? t({ it: 'Una tantum', en: 'One-time', de: 'Einmalig', pt: 'Única vez' })
              : t({ it: 'Ogni mese', en: 'Monthly', de: 'Monatlich', pt: 'Mensal' })}
          </button>
        ))}
      </div>

      <p className="text-sm font-semibold text-[var(--deep-blue)] mb-2">
        {t({ it: 'Scegli un importo', en: 'Choose an amount', de: 'Wähle einen Betrag', pt: 'Escolha um valor' })}
      </p>
      <div className="grid grid-cols-3 gap-2 mb-3">
        {DEFAULT_AMOUNTS.map((value) => (
          <button
            key={value}
            type="button"
            onClick={() => handleAmountClick(value)}
            className={`py-3 rounded-xl border text-sm font-semibold transition-all ${
              amount === value && !customAmount
                ? 'border-[var(--warm-orange)] bg-[var(--warm-orange)]/10 text-[var(--deep-blue)]'
                : 'border-gray-200 text-gray-600 hover:border-[var(--warm-orange)]'
            }`}
          >
            {value} €
          </button>
        ))}
      </div>
      <div className="relative mb-6">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">€</span>
        <input
          type="text"
          inputMode="numeric"
          value={customAmount}
          onChange={(e) => handleCustomChange(e.target.value)}
          placeholder={t({ it: 'Scegli quanto donare', en: 'Choose how much to donate', de: 'Wähle deinen Betrag', pt: 'Escolha quanto doar' })}
          className={`${inputClass} pl-7`}
        />
      </div>

      <div className="border-t border-gray-100 pt-5 mb-5">
        <p className="text-sm font-semibold text-[var(--deep-blue)] mb-3">
          {t({ it: 'I tuoi dati', en: 'Your details', de: 'Deine Daten', pt: 'Seus dados' })}
        </p>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder={t({ it: 'Nome', en: 'First name', de: 'Vorname', pt: 'Nome' })}
            className={inputClass}
          />
          <input
            type="text"
            value={cognome}
            onChange={(e) => setCognome(e.target.value)}
            placeholder={t({ it: 'Cognome', en: 'Last name', de: 'Nachname', pt: 'Sobrenome' })}
            className={inputClass}
          />
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className={`${inputClass} mb-3`}
        />

        <label className="flex items-start gap-2 text-sm text-gray-600 cursor-pointer">
          <input
            type="checkbox"
            checked={anonimo}
            onChange={(e) => setAnonimo(e.target.checked)}
            className="mt-0.5 accent-[var(--warm-orange)]"
          />
          {t({
            it: 'Desidero che la mia donazione rimanga anonima.',
            en: 'I would like my donation to remain anonymous.',
            de: 'Ich möchte, dass meine Spende anonym bleibt.',
            pt: 'Gostaria que minha doação permanecesse anônima.',
          })}
        </label>
      </div>

      <div className="border-t border-gray-100 pt-5 mb-5">
        <p className="text-sm font-semibold text-[var(--deep-blue)] mb-3">
          {t({ it: 'Metodo di pagamento', en: 'Payment method', de: 'Zahlungsmethode', pt: 'Método de pagamento' })}
        </p>
        <div className="grid grid-cols-3 gap-2">
          {(
            [
              { value: 'carta', label: t({ it: 'Carta', en: 'Card', de: 'Karte', pt: 'Cartão' }) },
              { value: 'paypal', label: 'PayPal' },
              {
                value: 'bonifico',
                label: t({ it: 'Bonifico', en: 'Bank transfer', de: 'Überweisung', pt: 'Transferência' }),
                disabled: frequency === 'monthly',
              },
            ] as { value: Metodo; label: string; disabled?: boolean }[]
          ).map((opt) => (
            <button
              key={opt.value}
              type="button"
              disabled={opt.disabled}
              onClick={() => setMetodo(opt.value)}
              className={`py-2.5 rounded-xl border text-sm font-semibold transition-all disabled:opacity-30 disabled:cursor-not-allowed ${
                metodo === opt.value && !opt.disabled
                  ? 'border-[var(--warm-orange)] bg-[var(--warm-orange)]/10 text-[var(--deep-blue)]'
                  : 'border-gray-200 text-gray-600 hover:border-[var(--warm-orange)]'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
        {frequency === 'monthly' && (
          <p className="text-xs text-gray-400 mt-2">
            {t({
              it: 'Il bonifico è disponibile solo per donazioni una tantum.',
              en: 'Bank transfer is only available for one-time donations.',
              de: 'Überweisung ist nur für einmalige Spenden verfügbar.',
              pt: 'A transferência bancária está disponível apenas para doações únicas.',
            })}
          </p>
        )}
      </div>

      <label className="flex items-start gap-2 text-sm text-gray-600 mb-5 cursor-pointer">
        <input
          type="checkbox"
          checked={privacyAccettata}
          onChange={(e) => setPrivacyAccettata(e.target.checked)}
          className="mt-0.5 accent-[var(--warm-orange)]"
        />
        <span>
          {t({ it: 'Ho letto e accetto ', en: 'I have read and accept the ', de: 'Ich habe die ', pt: 'Li e aceito a ' })}
          <Link to="/privacy-policy" target="_blank" className="text-[var(--warm-orange)] font-semibold underline">
            {t({ it: "l'Informativa Privacy", en: 'Privacy Policy', de: 'Datenschutzerklärung gelesen und akzeptiere sie', pt: 'Política de Privacidade' })}
          </Link>
          {t({ it: '.', en: '.', de: '.', pt: '.' })}
        </span>
      </label>

      {error && <p className="text-sm text-[var(--warm-red)] mb-4">{error}</p>}

      <button
        type="button"
        disabled={loading}
        onClick={handleSubmit}
        className="w-full px-6 py-3 rounded-xl bg-gradient-to-br from-[#f5b942] via-[#f7c968] to-[#f5b942] text-white font-medium shadow-md hover:shadow-lg transition-all disabled:opacity-60"
      >
        {ctaLabel}
      </button>

      <p className="text-xs text-gray-400 mt-3 text-center">
        {metodo === 'bonifico'
          ? t({
              it: 'Ti mostreremo le coordinate bancarie per completare il bonifico.',
              en: "We'll show you the bank details to complete the transfer.",
              de: 'Wir zeigen dir die Bankverbindung, um die Überweisung abzuschließen.',
              pt: 'Mostraremos os dados bancários para concluir a transferência.',
            })
          : t({
              it: 'Pagamento sicuro gestito da Stripe. Sarai reindirizzato per completare la donazione.',
              en: 'Secure payment powered by Stripe. You will be redirected to complete your donation.',
              de: 'Sichere Zahlung über Stripe. Du wirst weitergeleitet, um die Spende abzuschließen.',
              pt: 'Pagamento seguro via Stripe. Você será redirecionado para concluir a doação.',
            })}
      </p>
    </div>
  )
}
