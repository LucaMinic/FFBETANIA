import { Link } from 'react-router'
import { PageHero } from '../../components/PageHero'
import heroImg from '../../../assets/sostienici/spiritualita-hero.jpg'

interface Voce {
  titolo: string
  descrizione: string
  to: string
}

const voci: Voce[] = [
  { titolo: 'Dona ora', descrizione: 'Sostieni subito le nostre attività di solidarietà.', to: '/sostienici/dona-ora' },
  { titolo: '5x1000', descrizione: 'Destina il 5x1000 alla Fondazione Betania ETS.', to: '/sostienici/5x1000' },
  { titolo: 'I nostri progetti', descrizione: 'Le campagne di raccolta fondi in corso.', to: '/sostienici/progetti' },
  {
    titolo: 'Sostegno a distanza',
    descrizione: 'Aiuta un bambino del Progetto Brasile a crescere e studiare.',
    to: '/sostienici/sostegno-a-distanza',
  },
  {
    titolo: 'Dona beni o servizi',
    descrizione: 'Aziende e professionisti possono donare prodotti o competenze.',
    to: '/sostienici/dona-beni-o-servizi',
  },
  {
    titolo: 'Lasciti solidali',
    descrizione: 'Un gesto di generosità che dura nel tempo.',
    to: '/sostienici/lasciti-solidali',
  },
  {
    titolo: 'Proponi la tua campagna',
    descrizione: 'Crea una raccolta fondi personale per i nostri progetti.',
    to: '/sostienici/proponi-una-campagna',
  },
]

export function SostieniciPage() {
  return (
    <>
      <PageHero
        image={heroImg}
        title="Sostienici"
        subtitle="Insieme, con l'aiuto di Dio, possiamo fare molto per chi ha bisogno."
        imageAlt="Fraternità Francescana di Betania"
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <p className="text-lg text-gray-600 leading-relaxed text-center mb-12">
        Ci sono molti modi per stare al nostro fianco: scegli quello più adatto a te.
      </p>

      <div className="grid sm:grid-cols-2 gap-4">
        {voci.map((v) => (
          <Link
            key={v.to}
            to={v.to}
            className="rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <h3 className="font-bold text-[var(--deep-blue)] mb-1">{v.titolo}</h3>
            <p className="text-sm text-gray-500">{v.descrizione}</p>
          </Link>
        ))}
      </div>
      </section>
    </>
  )
}
