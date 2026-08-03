import { Link } from 'react-router'
import { AnimatedSection } from '../AnimatedSection'
import mensaPoveri from '../../../assets/cosa-facciamo/mensa-poveri.jpg'
import sostegnoFamiglie from '../../../assets/cosa-facciamo/sostegno-alle-famiglie.jpg'
import pasti from '../../../assets/cosa-facciamo/pasti.jpg'

interface Attivita {
  titolo: string
  descrizione: string
  immagine: string
  to: string
}

const attivita: Attivita[] = [
  {
    titolo: 'Mensa dei poveri',
    descrizione: 'Un pasto, un sorriso, un volto amico: il nostro servizio quotidiano ai più bisognosi.',
    immagine: mensaPoveri,
    to: '/cosa-facciamo/mensa-dei-poveri',
  },
  {
    titolo: 'Sostegno alle famiglie',
    descrizione: 'Accanto a chi vive momenti di difficoltà, con ascolto e concretezza.',
    immagine: sostegnoFamiglie,
    to: '/cosa-facciamo/sostegno-alle-famiglie',
  },
  {
    titolo: 'Raccolta, smistamento e distribuzione',
    descrizione: 'Il lavoro quotidiano che rende possibile ogni gesto di solidarietà.',
    immagine: pasti,
    to: '/cosa-facciamo/raccolta-smistamento-distribuzione',
  },
]

export function ComeAiutiamo() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] text-center mb-3">Come aiutiamo</h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
            Il nostro servizio quotidiano rivolto a chi vive povertà materiali e spirituali.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-6 mb-8">
          {attivita.map((a, i) => (
            <AnimatedSection key={a.to} delay={i * 0.1}>
              <Link
                to={a.to}
                className="group block rounded-[1.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
              >
                <div className="h-44 overflow-hidden">
                  <img
                    src={a.immagine}
                    alt={a.titolo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-[var(--deep-blue)] mb-1 group-hover:text-[var(--warm-orange)] transition-colors">
                    {a.titolo}
                  </h3>
                  <p className="text-sm text-gray-500">{a.descrizione}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <p className="text-center">
            <Link to="/cosa-facciamo" className="text-sm font-semibold text-[var(--warm-orange)] hover:underline">
              Scopri tutte le nostre attività di solidarietà →
            </Link>
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
