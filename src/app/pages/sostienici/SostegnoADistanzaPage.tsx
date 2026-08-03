import { useState } from 'react'
import { Link } from 'react-router'
import { Copy, Check } from 'lucide-react'
import asilo from '../../../assets/progetto-brasile/asilo.jpg'
import flagBrasil from '../../../assets/sostienici/flag-brasil.png'
import flagItalia from '../../../assets/sostienici/flag-italia.png'
import flagEu from '../../../assets/sostienici/flag-eu.svg'
import qrPix from '../../../assets/sostienici/qr-pix.jpeg'

interface Importo {
  euro: number
  copertura: string
}

const importi: Importo[] = [
  { euro: 40, copertura: '1/3 dei costi reali' },
  { euro: 80, copertura: '2/3 dei costi reali' },
  { euro: 120, copertura: "l'intera spesa mensile" },
]

export function SostegnoADistanzaPage() {
  const [copiedPix, setCopiedPix] = useState(false)
  const [copiedIban, setCopiedIban] = useState(false)

  const copy = (text: string, setCopied: (v: boolean) => void) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] mb-6 text-center">Sostegno a distanza</h1>

      <img src={asilo} alt="Asilo Nossa Senhora Aparecida" className="w-full max-h-80 object-cover rounded-2xl mb-8" />

      <p className="text-lg text-gray-600 leading-relaxed text-center mb-12">
        Con il sostegno a distanza puoi aiutare un bambino a ricevere un'istruzione adeguata, sostenendo le spese vive
        per le sue attività formative presso il{' '}
        <Link to="/progetto-brasile" className="text-[var(--warm-orange)] font-semibold">
          Progetto Brasile
        </Link>
        , a Salvador de Bahia.
      </p>

      <div className="grid sm:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-2">Chi sostieni</h2>
          <p className="text-gray-600 leading-relaxed">
            Un bambino dai 4 mesi ai 5 anni e 11 mesi delle favelas del quartiere di São Cristóvão, Salvador de Bahia.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-2">Cosa riceverai</h2>
          <ul className="text-gray-600 space-y-1 list-disc list-inside">
            <li>Foto del bambino e della sua classe</li>
            <li>Attestato di sostegno a distanza</li>
            <li>Rapporto annuale</li>
            <li>Aggiornamenti sui progetti</li>
            <li>Attestato fiscale (su richiesta)</li>
          </ul>
        </div>
      </div>

      <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-4 text-center">Servizi inclusi</h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        <div className="rounded-2xl border border-gray-100 p-5">
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">Scuola a tempo pieno</h3>
          <p className="text-sm text-gray-500">Dalle 7:30 alle 16:30.</p>
        </div>
        <div className="rounded-2xl border border-gray-100 p-5">
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">Attività ordinarie</h3>
          <p className="text-sm text-gray-500">Educative, per lo sviluppo di socialità, valori e motricità.</p>
        </div>
        <div className="rounded-2xl border border-gray-100 p-5">
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">Cinque pasti al giorno</h3>
          <p className="text-sm text-gray-500">Colazione, due merende, pranzo e cena.</p>
        </div>
        <div className="rounded-2xl border border-gray-100 p-5">
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">Attività speciali</h3>
          <p className="text-sm text-gray-500">Gite, formazione specializzata, supporto psicologico, divise.</p>
        </div>
      </div>

      <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-4 text-center">Importi di sostegno mensile</h2>
      <div className="grid sm:grid-cols-3 gap-4 mb-16">
        {importi.map((i) => (
          <div key={i.euro} className="rounded-2xl bg-[var(--beige)] p-6 text-center">
            <p className="text-2xl font-bold text-[var(--deep-blue)]">{i.euro} €</p>
            <p className="text-sm text-gray-600 mt-1">{i.copertura}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3 text-center">Come attivare il sostegno</h2>
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 mb-10">
        <p className="text-gray-600 leading-relaxed mb-3">
          Per attivare il sostegno, scrivi a{' '}
          <a href="mailto:segretariato.missioni@ffbetania.net" className="text-[var(--deep-blue)] font-semibold hover:underline">
            segretariato.missioni@ffbetania.net
          </a>{' '}
          indicando:
        </p>
        <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-1 text-gray-600 mb-3 list-disc list-inside">
          <li>nome e cognome</li>
          <li>email e/o numero di telefono</li>
          <li>formula di sostegno scelta (40 €, 80 € o 120 € al mese)</li>
          <li>indirizzo</li>
          <li>data</li>
          <li>data di inizio del sostegno</li>
        </ul>
        <p className="text-gray-500 italic text-sm">
          Un nostro fratello o una nostra sorella ti contatterà per accompagnarti nell'attivazione del sostegno.
        </p>
      </div>

      <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-4 text-center">
        Scegli la modalità in base al tuo paese
      </h2>
      <div className="grid sm:grid-cols-2 gap-6 mb-12">
        <div className="rounded-2xl border-l-4 border-[var(--soft-green)] bg-white p-6 shadow-sm">
          <h3 className="flex items-center gap-2 font-bold text-[var(--deep-blue)] mb-4">
            <img src={flagBrasil} alt="Brasile" className="w-7 h-auto rounded shadow-sm" />
            Se sostieni dal Brasile
          </h3>
          <div className="bg-[var(--beige)] rounded-xl p-4 mb-3">
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">PIX</p>
            <div className="flex items-center gap-2">
              <code className="flex-1 text-sm font-mono text-[var(--deep-blue)] break-all">21610717/0001-25</code>
              <button
                type="button"
                onClick={() => copy('21610717/0001-25', setCopiedPix)}
                aria-label="Copia chiave PIX"
                className="p-2 rounded-lg bg-[var(--soft-green)] text-white hover:brightness-90 transition-all shrink-0"
              >
                {copiedPix ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            <p className="text-xs text-gray-400 mt-2">Fundação Betânia Onlus</p>
            <img src={qrPix} alt="QR Code PIX" className="w-28 h-28 object-contain mx-auto mt-3 bg-white rounded-lg border border-gray-200 p-1" />
          </div>
          <div className="text-sm text-gray-600 space-y-0.5">
            <p className="font-semibold text-[var(--deep-blue)]">ITAÚ</p>
            <p>Agenzia: <span className="font-mono">7421</span></p>
            <p>C/C: <span className="font-mono">30014-1</span></p>
          </div>
        </div>

        <div className="rounded-2xl border-l-4 border-[var(--deep-blue)] bg-white p-6 shadow-sm">
          <h3 className="flex items-center gap-2 font-bold text-[var(--deep-blue)] mb-4 flex-wrap">
            <span className="flex items-center gap-1">
              <img src={flagItalia} alt="Italia" className="w-7 h-auto rounded shadow-sm" />
              <img src={flagEu} alt="Unione Europea" className="w-7 h-auto rounded shadow-sm" />
            </span>
            Se sostieni dall'Italia o dalla UE
          </h3>
          <p className="text-sm text-gray-500 mb-1">Beneficiario</p>
          <p className="text-sm font-semibold text-[var(--deep-blue)] mb-3">
            Fraternità Francescana di Betania Fondazione ETS
          </p>
          <p className="text-sm text-gray-500 mb-1">Banca</p>
          <p className="text-sm font-medium text-[var(--deep-blue)] mb-3">INTESA SANPAOLO S.P.A</p>
          <p className="text-sm text-gray-500 mb-1">IBAN</p>
          <div className="flex items-center gap-2 mb-3">
            <code className="flex-1 text-sm font-mono text-[var(--deep-blue)] break-all">IT44X0306909606100000150294</code>
            <button
              type="button"
              onClick={() => copy('IT44X0306909606100000150294', setCopiedIban)}
              aria-label="Copia IBAN"
              className="p-2 rounded-lg bg-[var(--deep-blue)] text-white hover:brightness-90 transition-all shrink-0"
            >
              {copiedIban ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
          <p className="text-sm text-gray-500 mb-1">Causale</p>
          <p className="text-sm italic text-[var(--deep-blue)]">Sostegno a distanza — nome e cognome (del donatore)</p>
        </div>
      </div>

      <p className="text-center text-gray-500 italic">
        "Il sostegno a distanza rappresenta un piccolo gesto che dona speranza in un futuro migliore sia al bambino
        che alla sua comunità."
      </p>
    </section>
  )
}
