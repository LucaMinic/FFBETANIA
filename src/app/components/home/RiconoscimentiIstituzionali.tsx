import { Landmark, HeartHandshake, Award, ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { AnimatedSection } from '../AnimatedSection'
import { YouTubeEmbed } from '../YouTubeEmbed'

const riconoscimenti = [
  {
    icon: Landmark,
    titolo: 'Istituto di Vita Consacrata',
    testo: 'Riconosciuto dalla Chiesa cattolica come Istituto di diritto diocesano dall\'8 dicembre 1998.',
  },
  {
    icon: HeartHandshake,
    titolo: 'Fondazione Betania ETS',
    testo: 'Ente del Terzo Settore dal 2007, per sostenere le opere di carità della Fraternità nel mondo.',
    href: '/fondazione',
  },
  {
    icon: Award,
    titolo: 'Visita del Presidente della Repubblica',
    testo: 'Il 19 luglio 2024 Sergio Mattarella ha visitato il nostro asilo in Brasile, portando attenzione su chi ogni giorno vi lavora.',
  },
]

export function RiconoscimentiIstituzionali() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <p className="text-sm font-semibold text-[var(--warm-orange)] uppercase tracking-wide text-center mb-2">
            Non cerchiamo il riconoscimento, ma a volte arriva
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] text-center mb-3">
            Il bene non passa inosservato
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Quello che facciamo con semplicità, ogni giorno, ha attraversato confini che non avremmo mai immaginato —
            non per merito nostro, ma per la forza silenziosa del bene fatto insieme a chi ci sostiene.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          {riconoscimenti.map((r, i) => {
            const content = (
              <>
                <span className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-sm mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 ease-out">
                  <r.icon className="w-7 h-7 text-[var(--warm-orange)]" />
                </span>
                <h3 className="text-lg font-bold text-[var(--deep-blue)] mb-2">{r.titolo}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{r.testo}</p>
                {r.href && (
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--warm-orange)] mt-4">
                    Scopri la Fondazione
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                )}
              </>
            )
            return (
              <AnimatedSection key={r.titolo} delay={i * 0.1}>
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
          <p className="max-w-2xl mx-auto text-center text-gray-600 leading-relaxed mb-6">
            Quella visita è arrivata proprio nella missione nata da un sogno semplice: il 19 luglio 2024 il
            Presidente Sergio Mattarella ha voluto conoscere da vicino il nostro asilo di Salvador de Bahia e i
            bambini che ogni giorno accogliamo. La raccontiamo con gratitudine, perché aiuta a far conoscere una
            missione che va avanti soprattutto grazie a chi ci sostiene.
          </p>
          <div className="max-w-3xl mx-auto rounded-[2rem] overflow-hidden shadow-lg">
            <YouTubeEmbed videoId="CzXoQBaOHis" title="Visita del Presidente della Repubblica Italiana" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
