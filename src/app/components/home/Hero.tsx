import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Link } from 'react-router'
import { AnimatedSection } from '../AnimatedSection'
import asilo from '../../../assets/progetto-brasile/creche-salvador-2024.png'
import caseHero from '../../../assets/cosa-facciamo/case-di-fraternita-hero.jpg'
import pancrazio from '../../../assets/padre-pancrazio/pancrazio-ffb.jpg'
import famigliari from '../../../assets/famiglia-di-betania/famigliari.jpg'
import spiritualita from '../../../assets/sostienici/spiritualita-hero.jpg'

interface Slide {
  src: string
  alt: string
  caption: string
}

const slides: Slide[] = [
  { src: pancrazio, alt: 'Padre Pancrazio con la comunità', caption: 'Un carisma nato dalla preghiera, vissuto in fraternità.' },
  { src: asilo, alt: 'Bambini del Progetto Brasile', caption: "Ogni giorno costruiamo futuro, un bambino alla volta." },
  { src: caseHero, alt: 'Casa Madre di Terlizzi', caption: 'Le nostre Case sono oasi spirituali aperte a tutti.' },
  { src: famigliari, alt: 'Famiglia di Betania', caption: 'Una grande famiglia spirituale, in cammino insieme.' },
  { src: spiritualita, alt: 'Preghiera e accoglienza', caption: 'Preghiera e accoglienza: i pilastri del nostro carisma.' },
]

export function Hero() {
  const [index, setIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [])

  const scrollToNext = () => {
    sectionRef.current?.nextElementSibling?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[420px] h-[60vh] md:h-[65vh] md:min-h-[480px] overflow-hidden bg-[var(--deep-blue)]"
    >
      <AnimatePresence mode="sync">
        <motion.img
          key={index}
          src={slides[index].src}
          alt={slides[index].alt}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: 1, scale: 1.08 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: { duration: 1.2, ease: 'easeInOut' }, scale: { duration: 5, ease: 'linear' } }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/25 to-black/15" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
        <AnimatedSection immediate>
          <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-lg mb-4 max-w-3xl">
            Fraternità Francescana di Betania
          </h1>
        </AnimatedSection>
        <AnimatedSection immediate delay={0.15}>
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="text-lg sm:text-2xl text-white/90 max-w-2xl mb-8"
            >
              {slides[index].caption}
            </motion.p>
          </AnimatePresence>
        </AnimatedSection>
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

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((s, i) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Vai alla slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === index ? 'bg-white w-6' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </section>
  )
}
