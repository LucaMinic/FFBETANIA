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

        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          {riconoscimenti.map((r, i) => {
            const content = (
              <>
                <r.icon className="w-8 h-8 text-[var(--warm-orange)] mb-3" />
                <h3 className="font-bold text-[var(--deep-blue)] mb-1.5">{r.titolo}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{r.testo}</p>
                {r.href && (
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--warm-orange)] mt-3">
                    Scopri la Fondazione
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                )}
              </>
            )
            return (
              <AnimatedSection key={r.titolo} delay={i * 0.1}>
                {r.href ? (
                  <Link
                    to={r.href}
                    className="block h-full rounded-[1.5rem] bg-[var(--beige)] p-6 hover:bg-[var(--beige)]/70 transition-colors"
                  >
                    {content}
                  </Link>
                ) : (
                  <div className="h-full rounded-[1.5rem] bg-[var(--beige)] p-6">{content}</div>
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
