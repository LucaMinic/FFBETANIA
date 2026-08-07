import { Landmark, HeartHandshake, Award } from 'lucide-react'
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
  },
  {
    icon: Award,
    titolo: 'Visita del Presidente della Repubblica',
    testo: 'Il 19 luglio 2024 Sergio Mattarella ha scelto di visitare la nostra missione in Brasile.',
  },
]

export function RiconoscimentiIstituzionali() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <p className="text-sm font-semibold text-[var(--warm-orange)] uppercase tracking-wide text-center mb-2">
            Un amore che non passa inosservato
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] text-center mb-3">
            Riconosciuti, sostenuti, visitati
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
            Quello che facciamo con semplicità, ogni giorno, non è passato inosservato: la nostra storia ha
            attraversato confini inaspettati, fino alle più alte cariche dello Stato.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-6 mb-14">
          {riconoscimenti.map((r, i) => (
            <AnimatedSection key={r.titolo} delay={i * 0.1}>
              <div className="h-full rounded-[1.5rem] bg-[var(--beige)] p-6">
                <r.icon className="w-8 h-8 text-[var(--warm-orange)] mb-3" />
                <h3 className="font-bold text-[var(--deep-blue)] mb-1.5">{r.titolo}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{r.testo}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.15}>
          <p className="max-w-2xl mx-auto text-center text-gray-600 leading-relaxed mb-6">
            Proprio in quella missione nata da un sogno semplice, un giorno di luglio del 2024 è arrivata una visita
            che nessuno si aspettava: il Presidente Sergio Mattarella, in Brasile per il 150° anniversario
            dell'emigrazione italiana, ha scelto la nostra Fraternità e il nostro asilo come tappa conclusiva del suo
            viaggio. Un'esperienza carica di emozione e di grande grazia, che raccontiamo con gratitudine.
          </p>
          <div className="max-w-3xl mx-auto rounded-[2rem] overflow-hidden shadow-lg">
            <YouTubeEmbed videoId="CzXoQBaOHis" title="Visita del Presidente della Repubblica Italiana" />
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
