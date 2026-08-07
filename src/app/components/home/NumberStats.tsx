import { useEffect, useRef, useState } from 'react'
import { AnimatedSection } from '../AnimatedSection'
import { WaveDivider } from '../WaveDivider'

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
    <>
      <section className="py-12 sm:py-20 bg-[var(--beige)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-sm font-semibold text-[var(--warm-orange)] uppercase tracking-wide text-center mb-2">
              Non solo numeri
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--deep-blue)] text-center max-w-2xl mx-auto mb-3">
              Una famiglia cresciuta casa dopo casa, in oltre 40 anni
            </h2>
            <p className="text-gray-500 text-center max-w-xl mx-auto mb-10">
              Dietro ogni numero c'è un volto: una persona accolta, una famiglia sostenuta, un bambino che oggi ha un
              futuro in più.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-8 sm:gap-8">
              <Stat target={40} suffix="+" label="Anni di storia" />
              <Stat target={12} suffix="" label="Case e Missioni" />
              <Stat target={18} suffix="" label="Gruppi di preghiera" />
              <Stat target={120} suffix="+" label="Bambini nell'Asilo in Brasile" />
            </div>
          </AnimatedSection>
        </div>
      </section>
      <WaveDivider fill="var(--beige)" flip />
    </>
  )
}
