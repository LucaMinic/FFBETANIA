import { Link } from 'react-router'
import { PageHero } from '../components/PageHero'
import { AnimatedSection } from '../components/AnimatedSection'
import { useT } from '../context/LanguageContext'
import { newsArticles } from '../data/news'
import convegnoGiubilare from '../../assets/chi-siamo/convegno-giubilare-3167.jpg'

export function NewsPage() {
  const t = useT()
  const articoliOrdinati = [...newsArticles].sort((a, b) => b.dataOrdinamento.localeCompare(a.dataOrdinamento))

  return (
    <>
      <PageHero
        image={convegnoGiubilare}
        title={t({ it: 'Notizie', en: 'News', de: 'Nachrichten', pt: 'Notícias' })}
        subtitle={t({
          it: 'La vita della Fraternità, giorno per giorno.',
          en: 'The life of the Fraternity, day by day.',
          de: 'Das Leben der Fraternität, Tag für Tag.',
          pt: 'A vida da Fraternidade, dia após dia.',
        })}
      />

      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          {articoliOrdinati.map((article, i) => (
            <AnimatedSection key={article.slug} delay={i * 0.1}>
              <Link
                to={`/news/${article.slug}`}
                className="block rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all h-full"
              >
                <img
                  src={article.immagineCopertina}
                  alt={article.immagineAlt}
                  loading="lazy"
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2 text-xs">
                    <span className="px-2.5 py-0.5 rounded-full bg-[var(--beige)] font-semibold text-[var(--deep-blue)]">
                      {article.categoria}
                    </span>
                    <span className="text-gray-400">{article.data}</span>
                  </div>
                  <h2 className="text-lg font-bold text-[var(--deep-blue)] leading-snug">{article.titolo}</h2>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>

        <p className="text-center text-sm text-gray-400">
          {t({
            it: "L'archivio storico completo sarà pubblicato gradualmente, non appena collegato al nostro nuovo sistema di gestione contenuti.",
            en: 'The full historical archive will be published gradually, once connected to our new content management system.',
            de: 'Das vollständige historische Archiv wird schrittweise veröffentlicht, sobald es an unser neues Redaktionssystem angebunden ist.',
            pt: 'O arquivo histórico completo será publicado gradualmente, assim que ligado ao nosso novo sistema de gestão de conteúdos.',
          })}
        </p>
      </section>
    </>
  )
}
