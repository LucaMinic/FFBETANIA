import { Link } from 'react-router'
import { AnimatedImage, AnimatedSection } from '../AnimatedSection'
import { WaveDivider } from '../WaveDivider'
import fondatore from '../../../assets/chi-siamo/il-nostro-fondatore.jpg'

export function ChiSiamoIntro() {
  return (
    <>
      <WaveDivider fill="var(--beige)" />
      <section className="py-16 sm:py-20 bg-[var(--beige)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <AnimatedImage>
              <img
                src={fondatore}
                alt="Padre Pancrazio"
                className="w-full h-72 sm:h-96 object-cover rounded-[2rem] shadow-xl"
              />
            </AnimatedImage>
            <AnimatedSection direction="right" delay={0.15}>
              <p className="text-sm font-semibold text-[var(--warm-orange)] uppercase tracking-wide mb-2">
                Da oltre 40 anni al fianco di chi ha bisogno
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] mb-5">Chi siamo</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Prima di tutto, siamo una famiglia: una fraternità che vive di preghiera e di accoglienza, e che ogni
                giorno apre le porte a chi cerca conforto, ascolto o un pasto caldo.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Siamo un Istituto di Vita Consacrata nato dal carisma di Padre Pancrazio Gaudioso, ispirato alla
                Betania evangelica e vissuto nello stile di san Francesco d'Assisi.
              </p>
              <Link
                to="/chi-siamo"
                className="inline-block px-6 py-2.5 rounded-xl bg-[var(--deep-blue)] text-white font-medium shadow-md hover:shadow-lg transition-all"
              >
                Scopri di più
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  )
}
