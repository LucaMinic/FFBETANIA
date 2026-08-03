import { Link } from 'react-router'
import { AnimatedImage, AnimatedSection } from '../AnimatedSection'
import { WaveDivider } from '../WaveDivider'
import scuola from '../../../assets/progetto-brasile/progetto-scuola.jpg'

export function BrasileSpotlight() {
  return (
    <>
      <WaveDivider fill="var(--beige)" />
      <section className="py-16 sm:py-20 bg-[var(--beige)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-sm font-semibold text-[var(--warm-orange)] uppercase tracking-wide mb-2">
                Il nostro progetto più grande
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] mb-5">Progetto Brasile</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                A Salvador de Bahia stiamo costruendo un centro di accoglienza per bambini e giovani delle favelas:
                un asilo già attivo per 120 bambini, e una scuola in costruzione fino alle superiori.
              </p>
              <Link
                to="/progetto-brasile"
                className="inline-block px-6 py-2.5 rounded-xl bg-gradient-to-br from-[#f5b942] via-[#f7c968] to-[#f5b942] text-white font-medium shadow-md hover:shadow-lg transition-all"
              >
                Scopri il progetto
              </Link>
            </AnimatedSection>
            <AnimatedImage delay={0.15}>
              <img
                src={scuola}
                alt="Progetto scuola Brasile"
                className="w-full h-72 sm:h-96 object-cover rounded-[2rem] shadow-xl"
              />
            </AnimatedImage>
          </div>
        </div>
      </section>
      <WaveDivider fill="var(--beige)" flip />
    </>
  )
}
