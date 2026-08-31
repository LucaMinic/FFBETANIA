import { Link } from 'react-router'
import { AnimatedSection } from '../AnimatedSection'
import { useT } from '../../context/LanguageContext'

export function SostieniciCta() {
  const t = useT()
  return (
    <section className="py-16 sm:py-24 bg-[var(--deep-blue)] text-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            {t({
              it: "Insieme, con l'aiuto di Dio, possiamo fare molto",
              en: 'Together, with God’s help, we can do so much',
              de: 'Gemeinsam, mit Gottes Hilfe, können wir viel bewirken',
              pt: 'Juntos, com a ajuda de Deus, podemos fazer muito',
            })}
          </h2>
          <p className="text-white/80 mb-8">
            {t({
              it: 'Ogni gesto di generosità, piccolo o grande, diventa un pasto, un sorriso, un futuro per chi ne ha bisogno. Se hai letto fin qui, forse è il momento di farne parte anche tu.',
              en: 'Every act of generosity, small or great, becomes a meal, a smile, a future for those in need. If you have read this far, perhaps it is time for you to be part of it too.',
              de: 'Jede Geste der Großzügigkeit, ob klein oder groß, wird zu einer Mahlzeit, einem Lächeln, einer Zukunft für die Bedürftigen. Wenn du bis hierher gelesen hast, ist es vielleicht Zeit, auch du Teil davon zu werden.',
              pt: 'Cada gesto de generosidade, pequeno ou grande, torna-se uma refeição, um sorriso, um futuro para quem precisa. Se você leu até aqui, talvez seja o momento de fazer parte disso também.',
            })}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/sostienici/dona-ora"
              className="inline-block px-8 py-3 rounded-2xl bg-gradient-to-br from-[#f5b942] via-[#f7c968] to-[#f5b942] text-white font-medium shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              {t({ it: 'Dona ora', en: 'Donate now', de: 'Jetzt spenden', pt: 'Doe agora' })}
            </Link>
            <Link
              to="/sostienici"
              className="inline-block px-8 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/40 text-white font-medium hover:bg-white/20 transition-all"
            >
              {t({ it: 'Scopri come aiutare', en: 'Discover how to help', de: 'Entdecke, wie du helfen kannst', pt: 'Descubra como ajudar' })}
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
