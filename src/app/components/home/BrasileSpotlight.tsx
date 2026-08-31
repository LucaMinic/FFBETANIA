import { Link } from 'react-router'
import { AnimatedImage, AnimatedSection } from '../AnimatedSection'
import { WaveDivider } from '../WaveDivider'
import { useT } from '../../context/LanguageContext'
import scuola from '../../../assets/progetto-brasile/progetto-scuola.jpg'

export function BrasileSpotlight() {
  const t = useT()
  return (
    <>
      <WaveDivider fill="var(--beige)" />
      <section className="py-16 sm:py-20 bg-[var(--beige)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <p className="text-sm font-semibold text-[var(--warm-orange)] uppercase tracking-wide mb-2">
                {t({
                  it: 'Il sogno più grande del nostro fondatore',
                  en: 'Our founder’s greatest dream',
                  de: 'Der größte Traum unseres Gründers',
                  pt: 'O maior sonho do nosso fundador',
                })}
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] mb-5">
                {t({ it: 'Progetto Brasile', en: 'Brazil Project', de: 'Brasilien-Projekt', pt: 'Projeto Brasil' })}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {t({
                  it: 'Padre Pancrazio sognava "un centro di accoglienza e ospitalità per i giovani che vivono in favelas". Oggi quel sogno ha il volto di 120 bambini che ogni giorno ricevono cura, pasti caldi e un\'educazione, in un asilo nato dal nulla a Salvador de Bahia — e presto anche una scuola.',
                  en: 'Father Pancrazio dreamed of "a welcoming and hospitable center for young people living in favelas." Today that dream has the face of 120 children who every day receive care, warm meals and an education, in a nursery school born from nothing in Salvador de Bahia — and soon a school too.',
                  de: 'Pater Pancrazio träumte von „einem Aufnahme- und Gastfreundschaftszentrum für Jugendliche aus den Favelas“. Heute trägt dieser Traum das Gesicht von 120 Kindern, die jeden Tag Fürsorge, warme Mahlzeiten und Bildung erhalten, in einem aus dem Nichts entstandenen Kindergarten in Salvador de Bahia — und bald auch in einer Schule.',
                  pt: 'O Padre Pancrazio sonhava com "um centro de acolhida e hospitalidade para os jovens que vivem nas favelas". Hoje esse sonho tem o rosto de 120 crianças que todos os dias recebem cuidado, refeições quentes e educação, numa creche nascida do zero em Salvador da Bahia — e em breve também uma escola.',
                })}
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t({
                  it: 'È il progetto più grande della nostra missione, ma è fatto di gesti piccoli: un abbraccio, un pasto, un futuro reso possibile.',
                  en: 'It is the largest project of our mission, but it is made of small gestures: an embrace, a meal, a future made possible.',
                  de: 'Es ist das größte Projekt unserer Mission, doch es besteht aus kleinen Gesten: einer Umarmung, einer Mahlzeit, einer ermöglichten Zukunft.',
                  pt: 'É o maior projeto da nossa missão, mas é feito de pequenos gestos: um abraço, uma refeição, um futuro possível.',
                })}
              </p>
              <Link
                to="/progetto-brasile"
                className="inline-block px-6 py-2.5 rounded-xl bg-gradient-to-br from-[#f5b942] via-[#f7c968] to-[#f5b942] text-white font-medium shadow-md hover:shadow-lg transition-all"
              >
                {t({ it: 'Scopri il progetto', en: 'Discover the project', de: 'Entdecke das Projekt', pt: 'Conheça o projeto' })}
              </Link>
            </AnimatedSection>
            <AnimatedImage delay={0.15}>
              <img
                src={scuola}
                alt="Progetto scuola Brasile"
                className="w-full h-72 sm:h-96 object-cover rounded-[2rem] shadow-xl"
              />
            </AnimatedImage>
          </div>
        </div>
      </section>
      <WaveDivider fill="var(--beige)" flip />
    </>
  )
}
