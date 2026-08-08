import { Link } from 'react-router'
import { PageHero } from '../components/PageHero'
import { PageCta } from '../components/PageCta'
import progettoBrasile from '../../assets/fondazione/progetto-brasile-2.jpg'
import fondazioneItalia from '../../assets/fondazione/fondazione-italia.jpg'
import statutoPdf from '../../assets/fondazione/statuto.pdf'
import rendiconto2020 from '../../assets/fondazione/rendiconto-5x1000-2020.pdf'
import rendiconto2021 from '../../assets/fondazione/rendiconto-5x1000-2021.pdf'
import rendiconto2022 from '../../assets/fondazione/rendiconto-5x1000-2022.pdf'
import rendiconto2023 from '../../assets/fondazione/rendiconto-5x1000-2023.pdf'

interface Consigliere {
  ruolo: string
  nome: string
}

const consiglio: Consigliere[] = [
  { ruolo: 'Presidente', nome: 'fra Gregorio Merendino' },
  { ruolo: 'Vice presidente', nome: 'Benedetta Gori' },
  { ruolo: 'Consigliere', nome: 'Rodolfo Maestrello' },
  { ruolo: 'Consigliera', nome: 'sor. Mariagrazia Gianolli' },
  { ruolo: 'Consigliera', nome: 'sor. Maria Pia Fazzi' },
]

export function FondazionePage() {
  return (
    <>
      <PageHero
        image={progettoBrasile}
        title="Fondazione Betania ETS"
        subtitle="Un'istituzione senza fini di lucro al servizio dei più deboli, in Italia e nel mondo."
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <p className="text-gray-600 leading-relaxed mb-4">
        La Fondazione Betania ETS è nata nel 2007 per un'iniziativa del fondatore del nostro Istituto, padre Pancrazio
        Nicola Gaudioso. Il suo desiderio era quello di costituire un'istituzione senza fini di lucro che potesse
        operare in tutto il mondo per dare sostegno alla parte più debole e bisognosa della società.
      </p>
      <p className="font-semibold text-[var(--deep-blue)] mb-2">
        La Fondazione ha come scopo principale quello di fornire assistenza e formazione umana e spirituale ai
        giovani in situazioni disagiate:
      </p>
      <ul className="text-gray-600 space-y-1 list-disc list-inside mb-12">
        <li>Creare strutture per il sostentamento e la formazione culturale, professionale e spirituale</li>
        <li>Migliorare le condizioni sanitarie dei bambini e dei giovani</li>
        <li>Sviluppare la cultura cristiana del dono e dell'amore</li>
        <li>Promuovere lo sviluppo dei valori cristiani della carità e della solidarietà</li>
        <li>Sostenere istituzioni civili in crisi come la famiglia</li>
        <li>Beneficenza e assistenza a distanza</li>
      </ul>

      <div className="grid sm:grid-cols-2 gap-8 items-center mb-12">
        <img src={progettoBrasile} alt="Progetto Brasile" className="w-full h-56 object-cover rounded-2xl" />
        <div>
          <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-2">Brasile</h2>
          <p className="text-gray-600 leading-relaxed">
            Il progetto attualmente più importante della Fondazione riguarda la realizzazione di un villaggio per i
            giovani a Salvador de Bahia. La Fondazione vi ha costruito un asilo e una scuola infantile per circa 120
            bambini, un campo di calcio, un campetto polisportivo, e ha appena terminato il convento dove vivranno i
            religiosi della Fraternità.{' '}
            <Link to="/progetto-brasile" className="text-[var(--warm-orange)] font-semibold">
              Scopri il progetto
            </Link>
          </p>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 items-center mb-16">
        <div className="sm:order-2">
          <img src={fondazioneItalia} alt="Fondazione Italia" className="w-full h-56 object-cover rounded-2xl" />
        </div>
        <div className="sm:order-1">
          <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-2">Italia</h2>
          <p className="text-gray-600 leading-relaxed">
            In Italia la Fondazione si è impegnata a finanziare la costruzione di un centro di distribuzione
            alimentare presso la Casa di Terlizzi, per raccogliere e distribuire generi alimentari alle persone e
            famiglie che quotidianamente chiedono aiuto alla Fraternità.{' '}
            <Link to="/cosa-facciamo" className="text-[var(--warm-orange)] font-semibold">
              Scopri le attività
            </Link>
          </p>
        </div>
      </div>

      <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-4">Trasparenza</h2>
      <div className="flex flex-wrap gap-3 mb-16">
        <a
          href={`${import.meta.env.BASE_URL}documenti/fondazione/bilancio-sociale-2019.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl border border-gray-100 text-sm text-gray-600 hover:border-[var(--warm-orange)] hover:text-[var(--warm-orange)] transition-colors"
        >
          Bilancio Sociale 2019
        </a>
        <a
          href={statutoPdf}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl border border-gray-100 text-sm text-gray-600 hover:border-[var(--warm-orange)] hover:text-[var(--warm-orange)] transition-colors"
        >
          Statuto
        </a>
        <a
          href={rendiconto2020}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl border border-gray-100 text-sm text-gray-600 hover:border-[var(--warm-orange)] hover:text-[var(--warm-orange)] transition-colors"
        >
          Rendiconto 5x1000 — 2020
        </a>
        <a
          href={rendiconto2021}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl border border-gray-100 text-sm text-gray-600 hover:border-[var(--warm-orange)] hover:text-[var(--warm-orange)] transition-colors"
        >
          Rendiconto 5x1000 — 2021
        </a>
        <a
          href={rendiconto2022}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl border border-gray-100 text-sm text-gray-600 hover:border-[var(--warm-orange)] hover:text-[var(--warm-orange)] transition-colors"
        >
          Rendiconto 5x1000 — 2022
        </a>
        <a
          href={rendiconto2023}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl border border-gray-100 text-sm text-gray-600 hover:border-[var(--warm-orange)] hover:text-[var(--warm-orange)] transition-colors"
        >
          Rendiconto 5x1000 — 2023
        </a>
      </div>

      <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-4">Consiglio di Fondazione</h2>
      <div className="grid sm:grid-cols-2 gap-3">
        {consiglio.map((c) => (
          <div key={c.nome} className="rounded-2xl border border-gray-100 p-4">
            <p className="text-xs text-gray-400">{c.ruolo}</p>
            <p className="font-semibold text-[var(--deep-blue)]">{c.nome}</p>
          </div>
        ))}
      </div>

      <PageCta
        title="Sostieni i progetti della Fondazione"
        text="Con una donazione o il tuo 5x1000 contribuisci direttamente ai progetti in Brasile e in Italia."
        primaryLabel="Dona ora"
        primaryTo="/sostienici/dona-ora"
        secondaryLabel="Destina il 5x1000"
        secondaryTo="/sostienici/5x1000"
      />
      </section>
    </>
  )
}
