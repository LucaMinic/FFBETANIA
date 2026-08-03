import { useEffect, useRef, useState } from 'react'
import { AnimatedSection } from '../AnimatedSection'

interface StatProps {
  target: number
  suffix: string
  label: string
}

function Stat({ target, suffix, label }: StatProps) {
  const [value, setValue] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStarted(true)
      },
      { threshold: 0.4 },
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const duration = 1400
    const startTime = performance.now()

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 4)
      setValue(Math.floor(target * eased))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [started, target])

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl sm:text-5xl font-bold text-[var(--deep-blue)] mb-1 sm:mb-2">
        {value}
        {suffix}
      </div>
      <p className="text-xs sm:text-base text-gray-600 leading-snug px-1">{label}</p>
    </div>
  )
}

export function NumberStats() {
  return (
    <section className="py-12 sm:py-20 bg-[var(--beige)]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-8 sm:gap-8">
            <Stat target={40} suffix="+" label="Anni di storia" />
            <Stat target={12} suffix="" label="Case e Missioni" />
            <Stat target={18} suffix="" label="Gruppi di preghiera" />
            <Stat target={120} suffix="+" label="Bambini nell'Asilo in Brasile" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
