import { AnimatedSection } from '../AnimatedSection'
import { YouTubeEmbed } from '../YouTubeEmbed'

export function RiconoscimentiIstituzionali() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] text-center mb-3">
            Riconoscimenti istituzionali
          </h2>
          <p className="text-gray-500 text-center max-w-2xl mx-auto mb-10">
            Un cammino riconosciuto e sostenuto da istituzioni, enti pubblici e realtà internazionali.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-3xl mx-auto mb-6 rounded-[2rem] overflow-hidden shadow-lg">
            <YouTubeEmbed videoId="CzXoQBaOHis" title="Visita del Presidente della Repubblica Italiana" />
          </div>
          <p className="max-w-2xl mx-auto text-center text-gray-600 leading-relaxed">
            Venerdì 19 luglio 2024 abbiamo avuto il piacere di ricevere la visita del Presidente della Repubblica,
            Sergio Mattarella, presso la nostra Missione in Brasile. Il Capo dello Stato si trovava nel Paese in
            occasione del 150° anniversario dell'emigrazione italiana, un viaggio dedicato all'incontro con le
            diverse realtà italiane presenti sul territorio: come tappa conclusiva del suo percorso, ha scelto di
            visitare anche la nostra Fraternità e l'asilo. È stata un'esperienza carica di emozione e di grande
            grazia.
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
