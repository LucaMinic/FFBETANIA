import { Landmark, HeartHandshake, ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { AnimatedSection } from '../AnimatedSection'
import { YouTubeEmbed } from '../YouTubeEmbed'
import { useT } from '../../context/LanguageContext'

const riconoscimenti = [
  {
    icon: Landmark,
    titolo: {
      it: 'Istituto di Vita Consacrata',
      en: 'Institute of Consecrated Life',
      de: 'Institut des geweihten Lebens',
      pt: 'Instituto de Vida Consagrada',
    },
    testo: {
      it: "Riconosciuto dalla Chiesa cattolica come Istituto di diritto diocesano dall'8 dicembre 1998.",
      en: 'Recognized by the Catholic Church as an Institute of diocesan right since 8 December 1998.',
      de: 'Von der katholischen Kirche seit dem 8. Dezember 1998 als Institut diözesanen Rechts anerkannt.',
      pt: 'Reconhecido pela Igreja Católica como Instituto de direito diocesano desde 8 de dezembro de 1998.',
    },
  },
  {
    icon: HeartHandshake,
    titolo: { it: 'Fondazione Betania ETS', en: 'Betania ETS Foundation', de: 'Stiftung Betania ETS', pt: 'Fundação Betânia ETS' },
    testo: {
      it: 'Ente del Terzo Settore dal 2007, per sostenere le opere di carità della Fraternità nel mondo.',
      en: 'A Third Sector Entity since 2007, to support the Fraternity’s charitable works around the world.',
      de: 'Seit 2007 eine Einrichtung des Dritten Sektors zur Unterstützung der karitativen Werke der Fraternität weltweit.',
      pt: 'Entidade do Terceiro Setor desde 2007, para apoiar as obras de caridade da Fraternidade no mundo.',
    },
    href: '/fondazione',
  },
]

export function RiconoscimentiIstituzionali() {
  const t = useT()
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <p className="text-sm font-semibold text-[var(--warm-orange)] uppercase tracking-wide text-center mb-2">
            {t({
              it: 'Non cerchiamo il riconoscimento, ma a volte arriva',
              en: 'We do not seek recognition, but sometimes it comes',
              de: 'Wir suchen keine Anerkennung, aber manchmal kommt sie',
              pt: 'Não buscamos reconhecimento, mas às vezes ele chega',
            })}
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] text-center mb-3">
            {t({
              it: 'Il bene non passa inosservato',
              en: 'Good deeds do not go unnoticed',
              de: 'Gutes bleibt nicht unbemerkt',
              pt: 'O bem não passa despercebido',
            })}
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            {t({
              it: 'Quello che facciamo con semplicità, ogni giorno, ha attraversato confini che non avremmo mai immaginato — non per merito nostro, ma per la forza silenziosa del bene fatto insieme a chi ci sostiene.',
              en: 'What we do simply, every day, has crossed borders we never imagined — not through our own merit, but through the quiet strength of good done together with those who support us.',
              de: 'Was wir jeden Tag auf einfache Weise tun, hat Grenzen überschritten, die wir uns nie vorgestellt hätten — nicht durch unser eigenes Verdienst, sondern durch die stille Kraft des Guten, das wir gemeinsam mit unseren Unterstützern tun.',
              pt: 'Aquilo que fazemos com simplicidade, todos os dias, atravessou fronteiras que nunca imaginámos — não por mérito nosso, mas pela força silenciosa do bem feito junto com quem nos apoia.',
            })}
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
          {riconoscimenti.map((r, i) => {
            const content = (
              <>
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-white shadow-sm mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 ease-out">
                  <r.icon className="w-6 h-6 text-[var(--warm-orange)]" />
                </span>
                <h3 className="text-lg font-bold text-[var(--deep-blue)] mb-2">{t(r.titolo)}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{t(r.testo)}</p>
                {r.href && (
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--warm-orange)] mt-4">
                    {t({ it: 'Scopri la Fondazione', en: 'Discover the Foundation', de: 'Entdecke die Stiftung', pt: 'Conheça a Fundação' })}
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                )}
              </>
            )
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                {r.href ? (
                  <Link
                    to={r.href}
                    className="group block h-full rounded-[2rem] bg-gradient-to-br from-[var(--beige)] to-[var(--beige-dark)]/60 p-8 shadow-[0_12px_36px_-18px_rgba(93,74,58,0.35)] hover:shadow-[0_20px_48px_-16px_rgba(212,151,108,0.4)] hover:-translate-y-2 hover:rotate-[-0.5deg] transition-all duration-500 ease-out"
                  >
                    {content}
                  </Link>
                ) : (
                  <div className="group h-full rounded-[2rem] bg-gradient-to-br from-[var(--beige)] to-[var(--beige-dark)]/60 p-8 shadow-[0_12px_36px_-18px_rgba(93,74,58,0.35)]">
                    {content}
                  </div>
                )}
              </AnimatedSection>
            )
          })}
        </div>

        <AnimatedSection delay={0.15}>
          <div className="max-w-3xl mx-auto rounded-[2.5rem] bg-[var(--beige)]/60 p-3 sm:p-4">
            <div className="rounded-[2rem] overflow-hidden shadow-lg mb-6">
              <YouTubeEmbed videoId="CzXoQBaOHis" title="Visita del Presidente della Repubblica Italiana" />
            </div>
            <div className="px-4 pb-4 sm:px-6 sm:pb-6">
              <p className="text-xs font-semibold text-[var(--warm-orange)] uppercase tracking-wide mb-2">
                {t({ it: '19 luglio 2024', en: '19 July 2024', de: '19. Juli 2024', pt: '19 de julho de 2024' })}
              </p>
              <h3 className="text-xl font-bold text-[var(--deep-blue)] mb-2">
                {t({
                  it: 'Visita del Presidente della Repubblica',
                  en: 'Visit of the President of the Republic',
                  de: 'Besuch des Staatspräsidenten',
                  pt: 'Visita do Presidente da República',
                })}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {t({
                  it: 'Il Presidente Sergio Mattarella ha voluto conoscere da vicino il nostro asilo di Salvador de Bahia e i bambini che ogni giorno accogliamo. La raccontiamo con gratitudine, perché aiuta a far conoscere una missione che va avanti soprattutto grazie a chi ci sostiene.',
                  en: 'President Sergio Mattarella wanted to see firsthand our nursery school in Salvador de Bahia and the children we welcome every day. We share it with gratitude, because it helps make known a mission that carries on above all thanks to those who support us.',
                  de: 'Präsident Sergio Mattarella wollte unseren Kindergarten in Salvador de Bahia und die Kinder, die wir jeden Tag aufnehmen, aus der Nähe kennenlernen. Wir erzählen es mit Dankbarkeit, weil es hilft, eine Mission bekannt zu machen, die vor allem dank unserer Unterstützer weitergeht.',
                  pt: 'O Presidente Sergio Mattarella quis conhecer de perto a nossa creche em Salvador da Bahia e as crianças que acolhemos todos os dias. Contamos isso com gratidão, porque ajuda a dar a conhecer uma missão que segue em frente sobretudo graças a quem nos apoia.',
                })}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
