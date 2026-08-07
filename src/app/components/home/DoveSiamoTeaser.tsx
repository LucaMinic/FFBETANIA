import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '../AnimatedSection'
import terlizzi from '../../../assets/case-di-fraternita/terlizzi/casa-madre-terlizzi-panoramica.jpg'
import loreto from '../../../assets/case-di-fraternita/loreto/loreto-casa-1.jpg'
import aschaffenburg from '../../../assets/case-di-fraternita/aschaffenburg/convento-aschaffenburg-1.jpg'
import salvador from '../../../assets/case-di-fraternita/salvador-de-bahia/convento-salvador-esterno.jpg'

interface CasaTeaser {
  nome: string
  luogo: string
  immagine: string
  to: string
}

const case_: CasaTeaser[] = [
  { nome: 'Casa Madre', luogo: 'Terlizzi, Italia', immagine: terlizzi, to: '/cosa-facciamo/case-di-fraternita/terlizzi' },
  { nome: 'Loreto', luogo: 'Marche, Italia', immagine: loreto, to: '/cosa-facciamo/case-di-fraternita/loreto' },
  { nome: 'Aschaffenburg', luogo: 'Germania', immagine: aschaffenburg, to: '/cosa-facciamo/case-di-fraternita/aschaffenburg' },
  { nome: 'Salvador de Bahia', luogo: 'Brasile', immagine: salvador, to: '/cosa-facciamo/case-di-fraternita/salvador-de-bahia' },
]

export function DoveSiamoTeaser() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <p className="text-sm font-semibold text-[var(--warm-orange)] uppercase tracking-wide text-center mb-2">
            Una famiglia, tante case
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] text-center mb-3">Dove siamo di casa</h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            12 Case e Missioni, dall'Italia alla Germania fino al Brasile: ovunque le stesse porte aperte, la stessa
            accoglienza, la stessa famiglia.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-10">
          {case_.map((c, i) => (
            <AnimatedSection key={c.to} delay={i * 0.08}>
              <Link to={c.to} className="group block rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="h-32 sm:h-44 overflow-hidden">
                  <img
                    src={c.immagine}
                    alt={c.nome}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-3 sm:p-4 bg-[var(--beige)]">
                  <h3 className="text-sm sm:text-base font-bold text-[var(--deep-blue)] leading-tight group-hover:text-[var(--warm-orange)] transition-colors">
                    {c.nome}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">{c.luogo}</p>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.3}>
          <p className="text-center">
            <Link
              to="/cosa-facciamo/case-di-fraternita"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--warm-orange)] hover:underline"
            >
              Scopri tutte le nostre Case di Fraternità
              <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
