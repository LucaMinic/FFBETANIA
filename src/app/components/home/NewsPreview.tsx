import { Link } from 'react-router'
import { AnimatedSection } from '../AnimatedSection'
import { WaveDivider } from '../WaveDivider'
import { useT } from '../../context/LanguageContext'
import scuola from '../../../assets/news/scuola-inizio-lavori-2026.jpg'
import ritiro from '../../../assets/news/ritiro-vacanze-2026.jpeg'
import libroPadrePancrazio from '../../../assets/news/libro-padre-pancrazio-2026.jpg'

interface LocalizedString {
  it: string
  en: string
  de: string
  pt: string
}

interface NewsItem {
  slug: string
  data: LocalizedString
  titolo: LocalizedString
  estratto: LocalizedString
  immagine: string
}

const news: NewsItem[] = [
  {
    slug: 'la-scuola-prende-forma-i-lavori-sono-iniziati',
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
    slug: 'ritiro-vacanza-familiari-2026',
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
    slug: 'padre-pancrazio-vita-di-un-uomo-di-dio-fratello-e-padre',
    data: { it: 'Marzo 2026', en: 'March 2026', de: 'März 2026', pt: 'Março de 2026' },
    titolo: {
      it: 'Padre Pancrazio. Vita di un uomo di Dio, fratello e padre',
      en: 'Padre Pancrazio. Life of a man of God, brother and father',
      de: 'Pater Pancrazio. Leben eines Mannes Gottes, Bruder und Vater',
      pt: 'Padre Pancrazio. Vida de um homem de Deus, irmão e pai',
    },
    estratto: {
      it: 'È stato pubblicato il nuovo libro dedicato a Padre Pancrazio, fondatore della Fraternità: un\'occasione per conoscere più da vicino la sua storia e la sua eredità spirituale.',
      en: 'The new book dedicated to Padre Pancrazio, founder of the Fraternity, has been published: a chance to discover his story and spiritual legacy more closely.',
      de: 'Das neue Buch über Pater Pancrazio, den Gründer der Fraternität, ist erschienen: eine Gelegenheit, seine Geschichte und sein geistliches Erbe näher kennenzulernen.',
      pt: 'Foi publicado o novo livro dedicado ao Padre Pancrazio, fundador da Fraternidade: uma ocasião para conhecer mais de perto a sua história e o seu legado espiritual.',
    },
    immagine: libroPadrePancrazio,
  },
]

export function NewsPreview() {
  const t = useT()
  return (
    <>
      <WaveDivider fill="var(--beige)" />
      <section className="py-16 sm:py-24 bg-[var(--beige)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-sm font-semibold text-[var(--warm-orange)] uppercase tracking-wide text-center mb-2">
              {t({ it: 'Notizie', en: 'News', de: 'Nachrichten', pt: 'Notícias' })}
            </p>
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

          <div className="space-y-8 mb-10">
            {news.map((n, i) => (
              <AnimatedSection key={n.slug} delay={i * 0.1}>
                <Link
                  to={`/news/${n.slug}`}
                  className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start border-l-2 border-[var(--warm-orange-light)] pl-5 sm:pl-6 py-1 group"
                >
                  <img
                    src={n.immagine}
                    alt={t(n.titolo)}
                    loading="lazy"
                    className="w-full sm:w-32 h-40 sm:h-32 rounded-2xl object-cover shrink-0 shadow-md"
                  />
                  <div>
                    <p className="text-xs font-semibold text-[var(--warm-orange)] uppercase tracking-wide mb-1.5">{t(n.data)}</p>
                    <h3 className="text-lg sm:text-xl font-bold text-[var(--deep-blue)] mb-2 leading-snug group-hover:underline">
                      {t(n.titolo)}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{t(n.estratto)}</p>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <p className="text-center text-sm">
            <Link to="/news" className="font-semibold text-[var(--warm-orange)] hover:text-[var(--warm-orange-light)] underline">
              {t({
                it: 'Vedi tutte le notizie',
                en: 'See all news',
                de: 'Alle Nachrichten ansehen',
                pt: 'Ver todas as notícias',
              })}
            </Link>
          </p>
        </div>
      </section>
      <WaveDivider fill="var(--beige)" flip />
    </>
  )
}
