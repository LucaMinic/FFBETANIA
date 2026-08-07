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
            Ogni gesto di generosità, piccolo o grande, diventa un pasto, un sorriso, un futuro per chi ne ha
            bisogno. Se hai letto fin qui, forse è il momento di farne parte anche tu.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/sostienici/dona-ora"
              className="inline-block px-8 py-3 rounded-2xl bg-gradient-to-br from-[#f5b942] via-[#f7c968] to-[#f5b942] text-white font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Dona ora
            </Link>
            <Link
              to="/sostienici"
              className="inline-block px-8 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/40 text-white font-medium hover:bg-white/20 transition-all"
            >
              Scopri come aiutare
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
