import { Link } from 'react-router'
import { HandCoins, Percent, Target, GraduationCap, Package, ScrollText, Megaphone, ArrowRight } from 'lucide-react'
import { PageHero } from '../../components/PageHero'
import heroImg from '../../../assets/sostienici/spiritualita-hero.jpg'
import donaOraImg from '../../../assets/progetto-brasile/asilo.jpg'
import cinqueXMilleImg from '../../../assets/sostienici/5x1000-banner.png'
import progettiImg from '../../../assets/progetto-brasile/cimg93731.jpeg'
import sostegnoDistanzaImg from '../../../assets/progetto-brasile/creche-salvador-2024.png'
import donaBeniImg from '../../../assets/sostienici/dona-beni-servizi.jpg'
import lascitiImg from '../../../assets/sostienici/spiritualita-hero.jpg'
import campagnaImg from '../../../assets/sostienici/thumb-scuola-brasile.png'

interface Voce {
  icon: typeof HandCoins
  titolo: string
  descrizione: string
  to: string
  immagine: string
}

interface Sezione {
  titolo: string
  descrizione: string
  voci: Voce[]
}

const sezioni: Sezione[] = [
  {
    titolo: 'Dona subito',
    descrizione: 'I modi più immediati per sostenerci, anche senza spendere nulla.',
    voci: [
      {
        icon: HandCoins,
        titolo: 'Dona ora',
        descrizione: 'Sostieni subito le nostre attività di solidarietà.',
        to: '/sostienici/dona-ora',
        immagine: donaOraImg,
      },
      {
        icon: Percent,
        titolo: '5x1000',
        descrizione: 'Destina il 5x1000 alla Fondazione Betania ETS.',
        to: '/sostienici/5x1000',
        immagine: cinqueXMilleImg,
      },
    ],
  },
  {
    titolo: 'Sostegno continuativo',
    descrizione: 'Per chi vuole restare accanto a un progetto nel tempo.',
    voci: [
      {
        icon: Target,
        titolo: 'I nostri progetti',
        descrizione: 'Le campagne di raccolta fondi in corso.',
        to: '/sostienici/progetti',
        immagine: progettiImg,
      },
      {
        icon: GraduationCap,
        titolo: 'Sostegno a distanza',
        descrizione: 'Aiuta un bambino del Progetto Brasile a crescere e studiare.',
        to: '/sostienici/sostegno-a-distanza',
        immagine: sostegnoDistanzaImg,
      },
    ],
  },
  {
    titolo: 'Altre forme di generosità',
    descrizione: 'Per aziende, professionisti e chi vuole lasciare un segno duraturo.',
    voci: [
      {
        icon: Package,
        titolo: 'Dona beni o servizi',
        descrizione: 'Aziende e professionisti possono donare prodotti o competenze.',
        to: '/sostienici/dona-beni-o-servizi',
        immagine: donaBeniImg,
      },
      {
        icon: ScrollText,
        titolo: 'Lasciti solidali',
        descrizione: 'Un gesto di generosità che dura nel tempo.',
        to: '/sostienici/lasciti-solidali',
        immagine: lascitiImg,
      },
      {
        icon: Megaphone,
        titolo: 'Proponi la tua campagna',
        descrizione: 'Crea una raccolta fondi personale per i nostri progetti.',
        to: '/sostienici/proponi-una-campagna',
        immagine: campagnaImg,
      },
    ],
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
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <p className="text-lg text-gray-600 leading-relaxed text-center mb-16">
        Ci sono molti modi per stare al nostro fianco: scegli quello più adatto a te.
      </p>

      {sezioni.map((s, i) => (
        <div key={s.titolo} className={i < sezioni.length - 1 ? 'mb-14' : ''}>
          <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-1">{s.titolo}</h2>
          <p className="text-sm text-gray-500 mb-5">{s.descrizione}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {s.voci.map((v) => (
              <Link
                key={v.to}
                to={v.to}
                className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-36 overflow-hidden">
                  <img
                    src={v.immagine}
                    alt={v.titolo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <v.icon className="w-6 h-6 text-[var(--warm-orange)] mb-2" />
                  <h3 className="flex items-center gap-1.5 font-bold text-[var(--deep-blue)] mb-1">
                    {v.titolo}
                    <ArrowRight className="w-3.5 h-3.5 text-[var(--warm-orange)] transition-transform group-hover:translate-x-0.5" />
                  </h3>
                  <p className="text-sm text-gray-500">{v.descrizione}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
      </section>
    </>
  )
}
