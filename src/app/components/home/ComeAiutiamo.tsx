import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
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
          <p className="text-sm font-semibold text-[var(--warm-orange)] uppercase tracking-wide text-center mb-2">
            Ogni giorno, accanto a chi ha bisogno
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] text-center mb-3">Come aiutiamo</h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
            Non lasciamo mai nessuno solo: apriamo le porte a chi cerca un pasto, un ascolto, una mano tesa — senza
            fare domande.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {attivita.map((a, i) => (
            <AnimatedSection key={a.to} delay={i * 0.1}>
              <Link
                to={a.to}
                className="group relative block aspect-[3/4] rounded-[2rem] overflow-hidden shadow-[0_12px_40px_-16px_rgba(93,74,58,0.35)] hover:shadow-[0_28px_60px_-16px_rgba(212,151,108,0.5)] hover:-translate-y-2 hover:rotate-[0.5deg] transition-all duration-500 ease-out"
              >
                <img
                  src={a.immagine}
                  alt={a.titolo}
                  className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-125 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-blue)]/95 via-[var(--deep-blue)]/25 to-transparent group-hover:from-[var(--deep-blue)]/95 group-hover:via-[var(--deep-blue)]/40 transition-all duration-500" />

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <h3 className="text-xl font-bold text-white mb-2 drop-shadow-sm">{a.titolo}</h3>
                  <p className="text-sm text-white/85 leading-relaxed mb-4 max-w-[95%]">{a.descrizione}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--warm-orange-light)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    Scopri di più
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
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
