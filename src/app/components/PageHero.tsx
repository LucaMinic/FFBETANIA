import { useRef } from 'react'
import { Link } from 'react-router'
import { motion } from 'motion/react'
import { AnimatedSection } from './AnimatedSection'

interface PageHeroProps {
  image: string
  title: string
  subtitle?: string
  imageAlt?: string
}

export function PageHero({ image, title, subtitle, imageAlt }: PageHeroProps) {
  const sectionRef = useRef<HTMLElement>(null)

  const scrollToNext = () => {
    sectionRef.current?.nextElementSibling?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[420px] h-[60vh] md:h-[65vh] md:min-h-[480px] overflow-hidden bg-[var(--deep-blue)]"
    >
      <motion.img
        src={image}
        alt={imageAlt ?? title}
        initial={{ scale: 1 }}
        animate={{ scale: 1.08 }}
        transition={{ duration: 14, ease: 'linear' }}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-blue)]/80 via-[var(--deep-blue)]/40 to-[var(--deep-blue)]/20" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <AnimatedSection immediate>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4 max-w-3xl">{title}</h1>
        </AnimatedSection>
        {subtitle && (
          <AnimatedSection immediate delay={0.15}>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-2xl mb-8">{subtitle}</p>
          </AnimatedSection>
        )}
        <AnimatedSection immediate delay={0.3}>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={scrollToNext}
              className="px-8 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/40 text-white font-medium hover:bg-white/20 transition-all"
            >
              Scopri di più
            </button>
            <Link
              to="/sostienici/dona-ora"
              className="px-8 py-3 rounded-2xl bg-gradient-to-br from-[#f5b942] via-[#f7c968] to-[#f5b942] text-white font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Dona ora
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
