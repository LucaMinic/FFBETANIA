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
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] text-center mb-3">Ultime notizie</h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
            Uno sguardo sulla vita quotidiana della Fraternità.
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-6 mb-6">
          {news.map((n, i) => (
            <AnimatedSection key={n.titolo} delay={i * 0.1}>
              <article className="rounded-[1.5rem] overflow-hidden border border-gray-100 shadow-sm h-full">
                <div className="h-40 overflow-hidden">
                  <img src={n.immagine} alt={n.titolo} className="w-full h-full object-cover" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-[var(--warm-orange)] uppercase tracking-wide mb-2">
                    {n.data}
                  </p>
                  <h3 className="font-bold text-[var(--deep-blue)] mb-2">{n.titolo}</h3>
                  <p className="text-sm text-gray-500">{n.estratto}</p>
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
