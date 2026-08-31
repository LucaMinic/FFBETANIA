import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '../AnimatedSection'
import { useT } from '../../context/LanguageContext'
import terlizzi from '../../../assets/case-di-fraternita/terlizzi/casa-madre-terlizzi-panoramica.jpg'
import loreto from '../../../assets/case-di-fraternita/loreto/loreto-casa-1.jpg'
import aschaffenburg from '../../../assets/case-di-fraternita/aschaffenburg/convento-aschaffenburg-1.jpg'
import salvador from '../../../assets/case-di-fraternita/salvador-de-bahia/convento-salvador-esterno.jpg'

interface LocalizedString {
  it: string
  en: string
  de: string
  pt: string
}

interface CasaTeaser {
  nome: string
  luogo: LocalizedString
  immagine: string
  to: string
}

const case_: CasaTeaser[] = [
  {
    nome: 'Casa Madre',
    luogo: { it: 'Terlizzi, Italia', en: 'Terlizzi, Italy', de: 'Terlizzi, Italien', pt: 'Terlizzi, Itália' },
    immagine: terlizzi,
    to: '/cosa-facciamo/case-di-fraternita/terlizzi',
  },
  {
    nome: 'Loreto',
    luogo: { it: 'Marche, Italia', en: 'Marche, Italy', de: 'Marken, Italien', pt: 'Marche, Itália' },
    immagine: loreto,
    to: '/cosa-facciamo/case-di-fraternita/loreto',
  },
  {
    nome: 'Aschaffenburg',
    luogo: { it: 'Germania', en: 'Germany', de: 'Deutschland', pt: 'Alemanha' },
    immagine: aschaffenburg,
    to: '/cosa-facciamo/case-di-fraternita/aschaffenburg',
  },
  {
    nome: 'Salvador de Bahia',
    luogo: { it: 'Brasile', en: 'Brazil', de: 'Brasilien', pt: 'Brasil' },
    immagine: salvador,
    to: '/cosa-facciamo/case-di-fraternita/salvador-de-bahia',
  },
]

export function DoveSiamoTeaser() {
  const t = useT()
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <p className="text-sm font-semibold text-[var(--warm-orange)] uppercase tracking-wide text-center mb-2">
            {t({ it: 'Una famiglia, tante case', en: 'One family, many houses', de: 'Eine Familie, viele Häuser', pt: 'Uma família, muitas casas' })}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] text-center mb-3">
            {t({ it: 'Dove siamo di casa', en: 'Where we call home', de: 'Wo wir zu Hause sind', pt: 'Onde estamos em casa' })}
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            {t({
              it: "12 Case e Missioni, dall'Italia alla Germania fino al Brasile: ovunque le stesse porte aperte, la stessa accoglienza, la stessa famiglia.",
              en: '12 Houses and Missions, from Italy to Germany to Brazil: the same open doors, the same welcome, the same family everywhere.',
              de: '12 Häuser und Missionen, von Italien über Deutschland bis Brasilien: überall dieselben offenen Türen, dieselbe Gastfreundschaft, dieselbe Familie.',
              pt: '12 Casas e Missões, da Itália à Alemanha até o Brasil: em toda parte as mesmas portas abertas, o mesmo acolhimento, a mesma família.',
            })}
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
                  <p className="text-xs sm:text-sm text-gray-500">{t(c.luogo)}</p>
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
              {t({
                it: 'Scopri tutte le nostre Case di Fraternità',
                en: 'Discover all our Houses of Fraternity',
                de: 'Entdecke alle unsere Häuser der Fraternität',
                pt: 'Conheça todas as nossas Casas de Fraternidade',
              })}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
