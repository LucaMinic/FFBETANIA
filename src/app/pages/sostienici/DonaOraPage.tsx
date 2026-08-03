import { useState } from 'react'
import { Link } from 'react-router'
import { Copy, Check } from 'lucide-react'
import { PlaceholderForm } from '../../components/PlaceholderForm'
import { PageHero } from '../../components/PageHero'
import famigliari from '../../../assets/famiglia-di-betania/famigliari.jpg'

interface Bonifico {
  banca: string
  beneficiario: string
  iban: string
}

const bonifici: Bonifico[] = [
  {
    banca: 'Intesa Sanpaolo S.P.A',
    beneficiario: 'Fraternità Francescana di Betania Fondazione ETS',
    iban: 'IT48O0306909606100000106797',
  },
  {
    banca: 'Banca Popolare dell\'Emilia Romagna — filiale di Molfetta',
    beneficiario: 'Fraternità Francescana di Betania Fondazione ETS',
    iban: 'IT75F0538741562000002260111',
  },
]

export function DonaOraPage() {
  const [copiedIban, setCopiedIban] = useState<string | null>(null)

  const copy = (iban: string) => {
    navigator.clipboard.writeText(iban)
    setCopiedIban(iban)
    setTimeout(() => setCopiedIban((current) => (current === iban ? null : current)), 2000)
  }

  return (
    <>
      <PageHero
        image={famigliari}
        title="Dona ora"
        subtitle="Sostienici nel nostro servizio di solidarietà in Italia e all'estero."
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
      <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
        "Insieme, con l'aiuto di Dio, possiamo fare molto per chi ha bisogno." Sostieni le attività della Fraternità
        Francescana di Betania e della Fondazione Betania ETS con una donazione libera.
      </p>

      <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-6 max-w-md mx-auto mb-10">
        <p className="text-gray-500 text-sm">
          Il modulo di pagamento (carta di credito, PayPal, bonifico SEPA) sarà attivo a breve, collegato al nostro
          nuovo gestionale.
        </p>
      </div>

      <PlaceholderForm submitLabel="Voglio essere avvisato" contactEmail="info@ffbetania.net" withMessage={false} />

      <h2 className="text-xl font-bold text-[var(--deep-blue)] mt-16 mb-6">Nel frattempo, puoi donare con bonifico</h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-16 text-left">
        {bonifici.map((b) => (
          <div key={b.iban} className="rounded-2xl border-l-4 border-[var(--deep-blue)] bg-white p-6 shadow-sm">
            <p className="text-sm text-gray-500 mb-1">Banca</p>
            <p className="text-sm font-medium text-[var(--deep-blue)] mb-3">{b.banca}</p>
            <p className="text-sm text-gray-500 mb-1">Beneficiario</p>
            <p className="text-sm font-semibold text-[var(--deep-blue)] mb-3">{b.beneficiario}</p>
            <p className="text-sm text-gray-500 mb-1">IBAN</p>
            <div className="flex items-center gap-2">
              <code className="flex-1 text-sm font-mono text-[var(--deep-blue)] break-all">{b.iban}</code>
              <button
                type="button"
                onClick={() => copy(b.iban)}
                aria-label="Copia IBAN"
                className="p-2 rounded-lg bg-[var(--deep-blue)] text-white hover:brightness-90 transition-all shrink-0"
              >
                {copiedIban === b.iban ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-6">Vantaggi fiscali</h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-6 text-left">
        <div className="rounded-2xl border border-gray-100 p-5">
          <h3 className="font-bold text-[var(--deep-blue)] mb-2">Persone fisiche</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Le donazioni in denaro o in beni sono deducibili al 30%, fino a un massimo di 30.000 € per periodo
            d'imposta, oppure, in alternativa, deducibili fino al 10% del reddito complessivo dichiarato.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-100 p-5">
          <h3 className="font-bold text-[var(--deep-blue)] mb-2">Aziende ed enti</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Le donazioni sono deducibili fino al 10% del reddito complessivo netto dichiarato (senza il precedente
            limite di 70.000 €). L'eccedenza è riportabile nei quattro periodi d'imposta successivi.
          </p>
        </div>
      </div>
      <p className="text-xs text-gray-400 mb-16">
        Disposizioni contenute nel Codice del Terzo Settore, applicabili dal 1° gennaio 2018.
      </p>

      <p className="text-gray-500">
        Vuoi sostenerci senza spendere nulla?{' '}
        <Link to="/sostienici/5x1000" className="text-[var(--warm-orange)] font-semibold">
          Scopri il 5x1000
        </Link>
      </p>
      </section>
    </>
  )
}
