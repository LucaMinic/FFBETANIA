import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Link } from 'react-router'
import { Pause, Play } from 'lucide-react'
import { AnimatedSection } from '../AnimatedSection'
import { useT } from '../../context/LanguageContext'
import asilo from '../../../assets/fondazione/progetto-brasile-2.jpg'
import caseHero from '../../../assets/cosa-facciamo/case-di-fraternita-hero.jpg'
import pancrazio from '../../../assets/padre-pancrazio/pancrazio-ffb.jpg'
import famigliari from '../../../assets/famiglia-di-betania/famigliari.jpg'
import spiritualita from '../../../assets/sostienici/spiritualita-hero.jpg'

interface Slide {
  src: string
  alt: string
  caption: { it: string; en: string; de: string; pt: string }
}

const slides: Slide[] = [
  {
    src: pancrazio,
    alt: 'Padre Pancrazio con la comunità',
    caption: {
      it: 'Un carisma nato dalla preghiera, vissuto in fraternità.',
      en: 'A charism born from prayer, lived in fraternity.',
      de: 'Ein Charisma, geboren aus dem Gebet, gelebt in Fraternität.',
      pt: 'Um carisma nascido da oração, vivido em fraternidade.',
    },
  },
  {
    src: asilo,
    alt: 'Bambini del Progetto Brasile',
    caption: {
      it: 'Ogni giorno costruiamo futuro, un bambino alla volta.',
      en: 'Every day we build the future, one child at a time.',
      de: 'Jeden Tag bauen wir Zukunft, ein Kind nach dem anderen.',
      pt: 'Todos os dias construímos futuro, uma criança de cada vez.',
    },
  },
  {
    src: caseHero,
    alt: 'Casa Madre di Terlizzi',
    caption: {
      it: 'Le nostre Case sono oasi spirituali aperte a tutti.',
      en: 'Our Houses are spiritual oases open to everyone.',
      de: 'Unsere Häuser sind geistliche Oasen, offen für alle.',
      pt: 'Nossas Casas são oásis espirituais abertos a todos.',
    },
  },
  {
    src: famigliari,
    alt: 'Famiglia di Betania',
    caption: {
      it: 'Una grande famiglia spirituale, in cammino insieme.',
      en: 'A great spiritual family, journeying together.',
      de: 'Eine große geistliche Familie, gemeinsam unterwegs.',
      pt: 'Uma grande família espiritual, caminhando juntos.',
    },
  },
  {
    src: spiritualita,
    alt: 'Preghiera e accoglienza',
    caption: {
      it: 'Preghiera e accoglienza: i pilastri del nostro carisma.',
      en: 'Prayer and hospitality: the pillars of our charism.',
      de: 'Gebet und Gastfreundschaft: die Säulen unseres Charismas.',
      pt: 'Oração e acolhimento: os pilares do nosso carisma.',
    },
  },
]

export function Hero() {
  const t = useT()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (query.matches) setPaused(true)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 5000)
    return () => clearInterval(id)
  }, [paused])

  const scrollToNext = () => {
    sectionRef.current?.nextElementSibling?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[340px] h-[48vh] md:h-[65vh] md:min-h-[480px] overflow-hidden bg-[var(--deep-blue)]"
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
              {t(slides[index].caption)}
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
              {t({ it: 'Scopri di più', en: 'Learn more', de: 'Mehr erfahren', pt: 'Saiba mais' })}
            </button>
            <Link
              to="/sostienici/dona-ora"
              className="px-8 py-3 rounded-2xl bg-gradient-to-br from-[#f5b942] via-[#f7c968] to-[#f5b942] text-white font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              {t({ it: 'Dona ora', en: 'Donate now', de: 'Jetzt spenden', pt: 'Doe agora' })}
            </Link>
          </div>
        </AnimatedSection>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
        <div className="flex gap-2">
          {slides.map((s, i) => (
            <button
              key={s.src}
              type="button"
              aria-label={`${t({ it: 'Vai alla slide', en: 'Go to slide', de: 'Zu Folie', pt: 'Ir para o slide' })} ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === index ? 'bg-white w-6' : 'bg-white/40'}`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={
            paused
              ? t({ it: 'Riprendi presentazione', en: 'Resume slideshow', de: 'Diashow fortsetzen', pt: 'Retomar apresentação' })
              : t({ it: 'Metti in pausa presentazione', en: 'Pause slideshow', de: 'Diashow pausieren', pt: 'Pausar apresentação' })
          }
          className="w-6 h-6 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border border-white/40 text-white hover:bg-white/20 transition-all"
        >
          {paused ? <Play className="w-3 h-3" /> : <Pause className="w-3 h-3" />}
        </button>
      </div>
    </section>
  )
}
