import { Link } from 'react-router'
import { AnimatedImage, AnimatedSection } from '../AnimatedSection'
import { WaveDivider } from '../WaveDivider'
import famigliari from '../../../assets/famiglia-di-betania/famigliari.jpg'

const gruppi = [
  { label: 'Giovani di Betania', to: '/famiglia-di-betania/giovani-di-betania' },
  { label: 'Gruppi Ancilla Domini', to: '/famiglia-di-betania/gruppo-ancilla-domini' },
  { label: 'Oblati', to: '/famiglia-di-betania/oblati' },
]

export function FamigliaDiBetaniaTeaser() {
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
                Non solo consacrati
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] mb-5">Famiglia di Betania</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Attorno alla Fraternità è fiorita negli anni una grande famiglia spirituale: laici, giovani e coppie
                che condividono il nostro carisma nella vita di ogni giorno, ciascuno a suo modo. Forse c'è un posto
                anche per te.
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {gruppi.map((g) => (
                  <Link
                    key={g.to}
                    to={g.to}
                    className="px-4 py-2 rounded-xl bg-white text-sm font-medium text-[var(--deep-blue)] hover:text-[var(--warm-orange)] shadow-sm transition-colors"
                  >
                    {g.label}
                  </Link>
                ))}
              </div>
              <Link
                to="/famiglia-di-betania"
                className="inline-block px-6 py-2.5 rounded-xl bg-[var(--deep-blue)] text-white font-medium shadow-md hover:shadow-lg transition-all"
              >
                Scopri la Famiglia di Betania
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
