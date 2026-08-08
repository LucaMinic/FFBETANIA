import { useEffect, useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface GalleryImg {
  src: string
  alt: string
}

interface GallerySlideshowProps {
  immagini: GalleryImg[]
  intervalMs?: number
}

export function GallerySlideshow({ immagini, intervalMs = 4500 }: GallerySlideshowProps) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setIndex((i) => (i + 1) % immagini.length), [immagini.length])
  const prev = useCallback(() => setIndex((i) => (i - 1 + immagini.length) % immagini.length), [immagini.length])

  useEffect(() => {
    if (paused || immagini.length <= 1) return
    const id = setInterval(next, intervalMs)
    return () => clearInterval(id)
  }, [paused, next, intervalMs, immagini.length])

  if (immagini.length === 0) return null

  return (
    <div
      className="relative w-full h-72 sm:h-[26rem] rounded-[2rem] overflow-hidden shadow-lg bg-[var(--beige)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="sync">
        <motion.img
          key={immagini[index].src}
          src={immagini[index].src}
          alt={immagini[index].alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {immagini.length > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            aria-label="Immagine precedente"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 text-[var(--deep-blue)] hover:bg-white transition-colors shadow"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Immagine successiva"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/70 text-[var(--deep-blue)] hover:bg-white transition-colors shadow"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {immagini.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setIndex(i)}
                aria-label={`Vai all'immagine ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === index ? 'w-6 bg-white' : 'w-2 bg-white/60 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
