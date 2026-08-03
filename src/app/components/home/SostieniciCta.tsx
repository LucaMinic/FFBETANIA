import { Link } from 'react-router'
import { AnimatedSection } from '../AnimatedSection'

export function SostieniciCta() {
  return (
    <section className="py-16 sm:py-24 bg-[var(--deep-blue)] text-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Insieme, con l'aiuto di Dio, possiamo fare molto
          </h2>
          <p className="text-white/80 mb-8">
            Ogni gesto di generosità, piccolo o grande, cambia concretamente la vita di chi ha bisogno.
          </p>
          <Link
            to="/sostienici"
            className="inline-block px-8 py-3 rounded-2xl bg-gradient-to-br from-[#f5b942] via-[#f7c968] to-[#f5b942] text-white font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            Scopri come aiutare
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}
