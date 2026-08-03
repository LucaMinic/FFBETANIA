import { Link } from 'react-router'
import { AnimatedSection } from '../AnimatedSection'
import famiglia from '../../../assets/famiglia-di-betania/convegno-giubilare-1794.jpg'
import cosaFacciamo from '../../../assets/cosa-facciamo/mensa-poveri.jpg'
import brasile from '../../../assets/progetto-brasile/cimg93731.jpeg'
import sostienici from '../../../assets/sostienici/dona-beni-servizi.jpg'
import media from '../../../assets/chi-siamo/convegno-giubilare-3167.jpg'
import fondazione from '../../../assets/fondazione/fondazione-italia.jpg'

interface Voce {
  titolo: string
  descrizione: string
  immagine: string
  to: string
}

const voci: Voce[] = [
  {
    titolo: 'Famiglia di Betania',
    descrizione: 'Giovani, gruppi di preghiera, oblati: cammina con noi.',
    immagine: famiglia,
    to: '/famiglia-di-betania',
  },
  {
    titolo: 'Cosa facciamo',
    descrizione: 'Mensa dei poveri, sostegno alle famiglie, raccolta e distribuzione.',
    immagine: cosaFacciamo,
    to: '/cosa-facciamo',
  },
  {
    titolo: 'Progetto Brasile',
    descrizione: 'Un centro di accoglienza per bambini e giovani a Salvador de Bahia.',
    immagine: brasile,
    to: '/progetto-brasile',
  },
  {
    titolo: 'Sostienici',
    descrizione: 'Dona ora, 5x1000, sostegno a distanza e molto altro.',
    immagine: sostienici,
    to: '/sostienici',
  },
  {
    titolo: 'Media',
    descrizione: 'Video e pubblicazioni della Fraternità.',
    immagine: media,
    to: '/media',
  },
  {
    titolo: 'Fondazione',
    descrizione: 'Trasparenza, bilanci e governance della Fondazione Betania ETS.',
    immagine: fondazione,
    to: '/fondazione',
  },
]

export function SiteIndex() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] text-center mb-3">Esplora il sito</h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
            Tutto quello che facciamo, e come puoi farne parte anche tu.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {voci.map((v, i) => (
            <AnimatedSection key={v.to} delay={(i % 3) * 0.1}>
              <Link
                to={v.to}
                className="group block rounded-[1.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={v.immagine}
                    alt={v.titolo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[var(--deep-blue)] mb-1 group-hover:text-[var(--warm-orange)] transition-colors">
                    {v.titolo}
                  </h3>
                  <p className="text-sm text-gray-500">{v.descrizione}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
