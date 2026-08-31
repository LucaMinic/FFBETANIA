import { useEffect, useRef, useState } from 'react'
import { AnimatedSection } from '../AnimatedSection'
import { WaveDivider } from '../WaveDivider'
import { useT } from '../../context/LanguageContext'

interface StatProps {
  target: number
  suffix: string
  label: { it: string; en: string; de: string; pt: string }
}

function Stat({ target, suffix, label }: StatProps) {
  const t = useT()
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
      <p className="text-xs sm:text-base text-gray-600 leading-snug px-1">{t(label)}</p>
    </div>
  )
}

export function NumberStats() {
  const t = useT()
  return (
    <>
      <section className="py-12 sm:py-20 bg-[var(--beige)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-sm font-semibold text-[var(--warm-orange)] uppercase tracking-wide text-center mb-2">
              {t({ it: 'Non solo numeri', en: 'Not just numbers', de: 'Nicht nur Zahlen', pt: 'Não são só números' })}
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[var(--deep-blue)] text-center max-w-2xl mx-auto mb-3">
              {t({
                it: 'Una famiglia cresciuta casa dopo casa, in oltre 40 anni',
                en: 'A family grown house after house, over more than 40 years',
                de: 'Eine Familie, gewachsen Haus für Haus, seit über 40 Jahren',
                pt: 'Uma família que cresceu casa após casa, ao longo de mais de 40 anos',
              })}
            </h2>
            <p className="text-gray-500 text-center max-w-xl mx-auto mb-10">
              {t({
                it: "Dietro ogni numero c'è un volto: una persona accolta, una famiglia sostenuta, un bambino che oggi ha un futuro in più.",
                en: 'Behind every number there is a face: a person welcomed, a family supported, a child who today has a brighter future.',
                de: 'Hinter jeder Zahl steht ein Gesicht: ein aufgenommener Mensch, eine unterstützte Familie, ein Kind, das heute eine Zukunft mehr hat.',
                pt: 'Por trás de cada número há um rosto: uma pessoa acolhida, uma família apoiada, uma criança que hoje tem mais futuro pela frente.',
              })}
            </p>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-8 sm:gap-8">
              <Stat
                target={40}
                suffix="+"
                label={{ it: 'Anni di storia', en: 'Years of history', de: 'Jahre Geschichte', pt: 'Anos de história' }}
              />
              <Stat
                target={12}
                suffix=""
                label={{ it: 'Case e Missioni', en: 'Houses and Missions', de: 'Häuser und Missionen', pt: 'Casas e Missões' }}
              />
              <Stat
                target={18}
                suffix=""
                label={{ it: 'Gruppi di preghiera', en: 'Prayer groups', de: 'Gebetsgruppen', pt: 'Grupos de oração' }}
              />
              <Stat
                target={120}
                suffix="+"
                label={{
                  it: "Bambini nell'Asilo in Brasile",
                  en: 'Children at the Nursery School in Brazil',
                  de: 'Kinder im Kindergarten in Brasilien',
                  pt: 'Crianças na Creche no Brasil',
                }}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>
      <WaveDivider fill="var(--beige)" flip />
    </>
  )
}
