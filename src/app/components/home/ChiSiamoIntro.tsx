import { Link } from 'react-router'
import { AnimatedImage, AnimatedSection } from '../AnimatedSection'
import { WaveDivider } from '../WaveDivider'
import { useT } from '../../context/LanguageContext'
import fondatore from '../../../assets/chi-siamo/il-nostro-fondatore.jpg'

export function ChiSiamoIntro() {
  const t = useT()
  return (
    <>
      <WaveDivider fill="var(--beige)" />
      <section className="py-16 sm:py-20 bg-[var(--beige)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <AnimatedSection immediate>
            <p className="text-center text-lg sm:text-xl text-[var(--deep-blue)] italic leading-relaxed max-w-2xl mx-auto mb-12 sm:mb-16">
              {t({
                it: 'Se sei arrivato fin qui, forse stai cercando qualcosa: un luogo dove pregare, una famiglia che ti ascolti, o semplicemente un motivo per credere che la generosità esista ancora. Ti diamo il benvenuto.',
                en: "If you've made it this far, maybe you're looking for something: a place to pray, a family that listens, or simply a reason to believe that generosity still exists. We welcome you.",
                de: 'Wenn du bis hierher gekommen bist, suchst du vielleicht etwas: einen Ort zum Beten, eine Familie, die dir zuhört, oder einfach einen Grund zu glauben, dass es Großzügigkeit noch gibt. Wir heißen dich willkommen.',
                pt: 'Se você chegou até aqui, talvez esteja procurando algo: um lugar para orar, uma família que te escute, ou simplesmente um motivo para acreditar que a generosidade ainda existe. Damos-lhe as boas-vindas.',
              })}
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <AnimatedImage>
              <img
                src={fondatore}
                alt="Padre Pancrazio"
                className="w-full h-72 sm:h-96 object-cover rounded-[2rem] shadow-xl"
              />
            </AnimatedImage>
            <AnimatedSection direction="right" delay={0.15}>
              <p className="text-sm font-semibold text-[var(--warm-orange)] uppercase tracking-wide mb-2">
                {t({
                  it: 'Da oltre 40 anni al fianco di chi ha bisogno',
                  en: 'For over 40 years alongside those in need',
                  de: 'Seit über 40 Jahren an der Seite der Bedürftigen',
                  pt: 'Há mais de 40 anos ao lado de quem precisa',
                })}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] mb-5">
                {t({ it: 'Chi siamo', en: 'About us', de: 'Über uns', pt: 'Quem somos' })}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t({
                  it: 'Prima di tutto, siamo una famiglia: fratelli e sorelle che vivono di preghiera e di accoglienza, e che ogni giorno aprono le porte di casa a chi cerca conforto, ascolto o un pasto caldo. Nessuno, qui, resta uno sconosciuto.',
                  en: "First of all, we are a family: brothers and sisters who live on prayer and hospitality, and who every day open their doors to those seeking comfort, a listening ear or a warm meal. No one remains a stranger here.",
                  de: 'Vor allem sind wir eine Familie: Brüder und Schwestern, die von Gebet und Gastfreundschaft leben und die jeden Tag ihre Türen für alle öffnen, die Trost, ein offenes Ohr oder eine warme Mahlzeit suchen. Hier bleibt niemand ein Fremder.',
                  pt: 'Antes de tudo, somos uma família: irmãos e irmãs que vivem de oração e acolhimento, e que todos os dias abrem as portas de casa a quem busca conforto, escuta ou uma refeição quente. Aqui, ninguém permanece um estranho.',
                })}
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t({
                  it: "Siamo un Istituto di Vita Consacrata nato dal carisma di Padre Pancrazio Gaudioso, ispirato alla Betania evangelica — la casa di Marta, Maria e Lazzaro — e vissuto ogni giorno nello stile semplice e gioioso di san Francesco d'Assisi.",
                  en: 'We are an Institute of Consecrated Life born from the charism of Father Pancrazio Gaudioso, inspired by the Gospel Bethany — the house of Martha, Mary and Lazarus — and lived out every day in the simple, joyful style of St. Francis of Assisi.',
                  de: 'Wir sind ein Institut des geweihten Lebens, entstanden aus dem Charisma von Pater Pancrazio Gaudioso, inspiriert vom biblischen Betanien — dem Haus von Marta, Maria und Lazarus — und gelebt im schlichten, freudigen Stil des heiligen Franziskus von Assisi.',
                  pt: 'Somos um Instituto de Vida Consagrada nascido do carisma do Padre Pancrazio Gaudioso, inspirado na Betânia evangélica — a casa de Marta, Maria e Lázaro — e vivido todos os dias no estilo simples e alegre de São Francisco de Assis.',
                })}
              </p>
              <Link
                to="/chi-siamo"
                className="inline-block px-6 py-2.5 rounded-xl bg-[var(--deep-blue)] text-white font-medium shadow-md hover:shadow-lg transition-all"
              >
                {t({
                  it: 'Scopri la nostra storia',
                  en: 'Discover our story',
                  de: 'Entdecke unsere Geschichte',
                  pt: 'Conheça nossa história',
                })}
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <WaveDivider fill="var(--beige)" flip />
    </>
  )
}
