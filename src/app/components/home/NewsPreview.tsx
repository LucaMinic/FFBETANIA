import { AnimatedSection } from '../AnimatedSection'
import { useT } from '../../context/LanguageContext'
import scuola from '../../../assets/progetto-brasile/progetto-scuola.jpg'
import ritiro from '../../../assets/news/ritiro-vacanze-2026.jpeg'
import fondazione from '../../../assets/padre-pancrazio/pentecoste-1982-inaugurazione.jpg'

interface LocalizedString {
  it: string
  en: string
  de: string
  pt: string
}

interface NewsItem {
  data: LocalizedString
  titolo: LocalizedString
  estratto: LocalizedString
  immagine: string
}

const news: NewsItem[] = [
  {
    data: { it: 'Luglio 2026', en: 'July 2026', de: 'Juli 2026', pt: 'Julho de 2026' },
    titolo: {
      it: 'La scuola prende forma: i lavori sono iniziati!',
      en: 'The school takes shape: work has begun!',
      de: 'Die Schule nimmt Gestalt an: Die Arbeiten haben begonnen!',
      pt: 'A escola toma forma: as obras começaram!',
    },
    estratto: {
      it: 'Sono ufficialmente iniziati i lavori per la costruzione della nuova scuola in Brasile. In queste prime settimane è stata avviata la realizzazione delle fondamenta.',
      en: 'Construction work on the new school in Brazil has officially begun. In these first weeks, work on the foundations has started.',
      de: 'Die Bauarbeiten für die neue Schule in Brasilien haben offiziell begonnen. In diesen ersten Wochen wurde mit den Fundamenten begonnen.',
      pt: 'Começaram oficialmente as obras de construção da nova escola no Brasil. Nestas primeiras semanas, foi iniciada a realização das fundações.',
    },
    immagine: scuola,
  },
  {
    data: { it: 'Aprile 2026', en: 'April 2026', de: 'April 2026', pt: 'Abril de 2026' },
    titolo: {
      it: 'Ritiro-vacanza familiari 2026',
      en: 'Family retreat-vacation 2026',
      de: 'Familien-Exerzitien-Urlaub 2026',
      pt: 'Retiro-férias em família 2026',
    },
    estratto: {
      it: 'Un invito a familiari, amici e famiglie a partecipare al ritiro-vacanza estivo "Rinati alla luce", a Nocera Umbra dall\'1 all\'8 agosto 2026.',
      en: 'An invitation to relatives, friends and families to take part in the summer retreat-vacation "Reborn into the light", in Nocera Umbra from 1 to 8 August 2026.',
      de: 'Eine Einladung an Angehörige, Freunde und Familien, am Sommer-Exerzitien-Urlaub „Wiedergeboren zum Licht“ in Nocera Umbra vom 1. bis 8. August 2026 teilzunehmen.',
      pt: 'Um convite a familiares, amigos e famílias para participar no retiro-férias de verão "Renascidos à luz", em Nocera Umbra de 1 a 8 de agosto de 2026.',
    },
    immagine: ritiro,
  },
  {
    data: { it: '30 maggio', en: 'May 30', de: '30. Mai', pt: '30 de maio' },
    titolo: {
      it: '38 anni fa nasceva Casa Betania',
      en: 'Casa Betania was born 38 years ago',
      de: 'Vor 38 Jahren entstand Casa Betania',
      pt: 'Há 38 anos nascia a Casa Betânia',
    },
    estratto: {
      it: 'Il 30 maggio 1982 Padre Pancrazio arrivò a Terlizzi con quattro sorelle per dare vita a "Casa Betania": l\'inizio della nostra storia.',
      en: 'On 30 May 1982, Father Pancrazio arrived in Terlizzi with four sisters to bring "Casa Betania" to life: the beginning of our history.',
      de: 'Am 30. Mai 1982 kam Pater Pancrazio mit vier Schwestern nach Terlizzi, um „Casa Betania“ ins Leben zu rufen: der Beginn unserer Geschichte.',
      pt: 'Em 30 de maio de 1982, o Padre Pancrazio chegou a Terlizzi com quatro irmãs para dar vida à "Casa Betânia": o início da nossa história.',
    },
    immagine: fondazione,
  },
]

export function NewsPreview() {
  const t = useT()
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <AnimatedSection>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] text-center mb-3">
            {t({
              it: 'La nostra vita, giorno per giorno',
              en: 'Our life, day by day',
              de: 'Unser Leben, Tag für Tag',
              pt: 'A nossa vida, dia após dia',
            })}
          </h2>
          <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
            {t({
              it: 'Piccole e grandi storie di una famiglia numerosa, sparsa per il mondo ma sempre unita.',
              en: 'Small and great stories of a large family, scattered around the world but always united.',
              de: 'Kleine und große Geschichten einer großen Familie, über die Welt verstreut, aber immer vereint.',
              pt: 'Pequenas e grandes histórias de uma família numerosa, espalhada pelo mundo mas sempre unida.',
            })}
          </p>
        </AnimatedSection>

        <div className="grid sm:grid-cols-3 gap-8 mb-8">
          {news.map((n, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <article className="group relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-[0_12px_40px_-16px_rgba(93,74,58,0.35)] hover:shadow-[0_28px_60px_-16px_rgba(212,151,108,0.5)] hover:-translate-y-2 hover:rotate-[-0.5deg] transition-all duration-500 ease-out h-full">
                <img
                  src={n.immagine}
                  alt={t(n.titolo)}
                  className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-125 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-blue)]/95 via-[var(--deep-blue)]/25 to-transparent group-hover:from-[var(--deep-blue)]/95 group-hover:via-[var(--deep-blue)]/40 transition-all duration-500" />

                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="text-xs font-semibold text-[var(--warm-orange-light)] uppercase tracking-wide mb-2">
                    {t(n.data)}
                  </p>
                  <h3 className="text-lg font-bold text-white mb-2 leading-snug drop-shadow-sm">{t(n.titolo)}</h3>
                  <p className="text-sm text-white/85 leading-relaxed line-clamp-3">{t(n.estratto)}</p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400">
          {t({
            it: "L'archivio completo delle notizie sarà presto disponibile.",
            en: 'The full news archive will be available soon.',
            de: 'Das vollständige Nachrichtenarchiv wird bald verfügbar sein.',
            pt: 'O arquivo completo de notícias estará disponível em breve.',
          })}
        </p>
      </div>
    </section>
  )
}
