import { AnimatedSection } from '../AnimatedSection'
import scuola from '../../../assets/progetto-brasile/progetto-scuola.jpg'
import ritiro from '../../../assets/news/ritiro-vacanze-2026.jpeg'
import fondazione from '../../../assets/padre-pancrazio/pentecoste-1982-inaugurazione.jpg'

interface NewsItem {
  data: string
  titolo: string
  estratto: string
  immagine: string
}

const news: NewsItem[] = [
  {
    data: 'Luglio 2026',
    titolo: 'La scuola prende forma: i lavori sono iniziati!',
    estratto:
      'Sono ufficialmente iniziati i lavori per la costruzione della nuova scuola in Brasile. In queste prime settimane è stata avviata la realizzazione delle fondamenta.',
    immagine: scuola,
  },
  {
    data: 'Aprile 2026',
    titolo: 'Ritiro-vacanza familiari 2026',
    estratto:
      'Un invito a familiari, amici e famiglie a partecipare al ritiro-vacanza estivo "Rinati alla luce", a Nocera Umbra dall\'1 all\'8 agosto 2026.',
    immagine: ritiro,
  },
  {
    data: '30 maggio',
    titolo: '38 anni fa nasceva Casa Betania',
    estratto:
      'Il 30 maggio 1982 Padre Pancrazio arrivò a Terlizzi con quattro sorelle per dare vita a "Casa Betania": l\'inizio della nostra storia.',
    immagine: fondazione,
  },
]

export function NewsPreview() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] text-center mb-3">La nostra vita, giorno per giorno</h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
            Piccole e grandi storie di una famiglia numerosa, sparsa per il mondo ma sempre unita.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          {news.map((n, i) => (
            <AnimatedSection key={n.titolo} delay={i * 0.1}>
              <article className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-[0_12px_40px_-16px_rgba(93,74,58,0.35)] hover:shadow-[0_28px_60px_-16px_rgba(212,151,108,0.5)] hover:-translate-y-2 hover:rotate-[-0.5deg] transition-all duration-500 ease-out h-full">
                <img
                  src={n.immagine}
                  alt={n.titolo}
                  className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-125 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-blue)]/95 via-[var(--deep-blue)]/25 to-transparent group-hover:from-[var(--deep-blue)]/95 group-hover:via-[var(--deep-blue)]/40 transition-all duration-500" />

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="text-xs font-semibold text-[var(--warm-orange-light)] uppercase tracking-wide mb-2">
                    {n.data}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug drop-shadow-sm">{n.titolo}</h3>
                  <p className="text-sm text-white/85 leading-relaxed line-clamp-3">{n.estratto}</p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400">L'archivio completo delle notizie sarà presto disponibile.</p>
      </div>
    </section>
  )
}
