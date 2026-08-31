import { Link } from 'react-router'
import { AnimatedImage, AnimatedSection } from '../AnimatedSection'
import { WaveDivider } from '../WaveDivider'
import { useT } from '../../context/LanguageContext'
import famigliari from '../../../assets/famiglia-di-betania/famigliari.jpg'

const gruppi = [
  {
    label: { it: 'Giovani di Betania', en: 'Youth of Betania', de: 'Jugend von Betania', pt: 'Jovens de Betânia' },
    to: '/famiglia-di-betania/giovani-di-betania',
  },
  {
    label: { it: 'Gruppi Ancilla Domini', en: 'Ancilla Domini Groups', de: 'Ancilla-Domini-Gruppen', pt: 'Grupos Ancilla Domini' },
    to: '/famiglia-di-betania/gruppo-ancilla-domini',
  },
  {
    label: { it: 'Oblati', en: 'Oblates', de: 'Oblaten', pt: 'Oblatos' },
    to: '/famiglia-di-betania/oblati',
  },
]

export function FamigliaDiBetaniaTeaser() {
  const t = useT()
  return (
    <>
      <WaveDivider fill="var(--beige)" />
      <section className="py-16 sm:py-20 bg-[var(--beige)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <AnimatedImage>
              <img
                src={famigliari}
                alt="Familiari della Fraternità Francescana di Betania"
                className="w-full h-72 sm:h-96 object-cover rounded-[2rem] shadow-xl"
              />
            </AnimatedImage>
            <AnimatedSection direction="right" delay={0.15}>
              <p className="text-sm font-semibold text-[var(--warm-orange)] uppercase tracking-wide mb-2">
                {t({ it: 'Non solo consacrati', en: 'Not only the consecrated', de: 'Nicht nur Geweihte', pt: 'Não somente consagrados' })}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] mb-5">
                {t({ it: 'Famiglia di Betania', en: 'Family of Betania', de: 'Familie von Betania', pt: 'Família de Betânia' })}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t({
                  it: "Attorno alla Fraternità è fiorita negli anni una grande famiglia spirituale: laici, giovani e coppie che condividono il nostro carisma nella vita di ogni giorno, ciascuno a suo modo. Forse c'è un posto anche per te.",
                  en: 'Around the Fraternity, a great spiritual family has flourished over the years: laypeople, young people and couples who share our charism in everyday life, each in their own way. Perhaps there is a place for you too.',
                  de: 'Rund um die Fraternität ist über die Jahre eine große geistliche Familie gewachsen: Laien, Jugendliche und Paare, die unser Charisma jeweils auf ihre Weise im Alltag leben. Vielleicht ist auch für dich ein Platz dabei.',
                  pt: 'Em torno da Fraternidade floresceu, ao longo dos anos, uma grande família espiritual: leigos, jovens e casais que partilham o nosso carisma na vida quotidiana, cada um a seu modo. Talvez haja um lugar também para você.',
                })}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {gruppi.map((g) => (
                  <Link
                    key={g.to}
                    to={g.to}
                    className="px-4 py-2 rounded-xl bg-white text-sm font-medium text-[var(--deep-blue)] hover:text-[var(--warm-orange)] shadow-sm transition-colors"
                  >
                    {t(g.label)}
                  </Link>
                ))}
              </div>
              <Link
                to="/famiglia-di-betania"
                className="inline-block px-6 py-2.5 rounded-xl bg-[var(--deep-blue)] text-white font-medium shadow-md hover:shadow-lg transition-all"
              >
                {t({
                  it: 'Scopri la Famiglia di Betania',
                  en: 'Discover the Family of Betania',
                  de: 'Entdecke die Familie von Betania',
                  pt: 'Conheça a Família de Betânia',
                })}
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <WaveDivider fill="var(--beige)" flip />
    </>
  )
}
