import { Link, useParams } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import { PageHero } from '../components/PageHero'
import { PageCta } from '../components/PageCta'
import { AnimatedSection } from '../components/AnimatedSection'
import { YouTubeEmbed } from '../components/YouTubeEmbed'
import { useT } from '../context/LanguageContext'
import { getNewsArticle } from '../data/news'

export function NewsArticlePage() {
  const { slug } = useParams()
  const t = useT()
  const article = slug ? getNewsArticle(slug) : undefined

  if (!article) {
    return (
      <section className="max-w-2xl mx-auto px-4 sm:px-6 py-24 text-center">
        <h1 className="text-2xl font-bold text-[var(--deep-blue)] mb-4">
          {t({ it: 'Notizia non trovata', en: 'News not found', de: 'Nachricht nicht gefunden', pt: 'Notícia não encontrada' })}
        </h1>
        <Link to="/news" className="text-[var(--warm-orange)] font-semibold underline">
          {t({ it: 'Torna alle notizie', en: 'Back to news', de: 'Zurück zu den Nachrichten', pt: 'Voltar às notícias' })}
        </Link>
      </section>
    )
  }

  return (
    <>
      <PageHero image={article.immagineCopertina} title={article.titolo} imageAlt={article.immagineAlt} />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Link
          to="/news"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--warm-orange)] hover:text-[var(--warm-orange-light)] mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t({ it: 'Tutte le notizie', en: 'All news', de: 'Alle Nachrichten', pt: 'Todas as notícias' })}
        </Link>

        <AnimatedSection immediate>
          <div className="flex items-center gap-3 mb-8 text-sm">
            <span className="px-3 py-1 rounded-full bg-[var(--beige)] font-semibold text-[var(--deep-blue)]">
              {article.categoria}
            </span>
            <span className="text-gray-400">{article.data}</span>
          </div>
        </AnimatedSection>

        {article.paragrafi.map((testo, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <p className="text-gray-600 leading-relaxed mb-6">{testo}</p>
          </AnimatedSection>
        ))}

        {article.videoId && (
          <AnimatedSection>
            <div className="rounded-2xl overflow-hidden shadow-md mb-10">
              <YouTubeEmbed videoId={article.videoId} title={article.titolo} />
            </div>
          </AnimatedSection>
        )}

        {article.immaginiCorpo && article.immaginiCorpo.length > 0 && (
          <AnimatedSection>
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {article.immaginiCorpo.map((img) => (
                <img key={img.src} src={img.src} alt={img.alt} loading="lazy" className="w-full rounded-2xl shadow-md object-cover" />
              ))}
            </div>
          </AnimatedSection>
        )}

        <p className="text-xs text-gray-400 italic mb-16">
          {t({
            it: 'Notizia riportata dal precedente sito della Fraternità. Le prossime pubblicazioni saranno gestite tramite il nostro nuovo sistema di gestione contenuti.',
            en: 'News reported from the Fraternity’s previous website. Future news will be managed through our new content management system.',
            de: 'Nachricht von der vorherigen Website der Fraternität übernommen. Künftige Meldungen werden über unser neues Redaktionssystem verwaltet.',
            pt: 'Notícia reproduzida do site anterior da Fraternidade. As próximas publicações serão geridas através do nosso novo sistema de gestão de conteúdos.',
          })}
        </p>

        {article.relatedLabel && article.relatedTo && (
          <AnimatedSection>
            <Link
              to={article.relatedTo}
              className="block rounded-2xl border border-gray-100 p-5 mb-16 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <p className="text-xs text-gray-400 mb-1">
                {t({ it: 'Scopri di più', en: 'Learn more', de: 'Mehr erfahren', pt: 'Saiba mais' })}
              </p>
              <h3 className="font-bold text-[var(--deep-blue)]">{article.relatedLabel}</h3>
            </Link>
          </AnimatedSection>
        )}

        <PageCta
          title={t({ it: 'Vuoi conoscere di persona la nostra vita?', en: 'Want to experience our life in person?', de: 'Möchtest du unser Leben persönlich kennenlernen?', pt: 'Quer conhecer pessoalmente a nossa vida?' })}
          text={t({
            it: "Dietro ogni notizia c'è una famiglia che vive di preghiera e accoglienza ogni giorno.",
            en: 'Behind every piece of news there is a family that lives on prayer and hospitality every day.',
            de: 'Hinter jeder Nachricht steht eine Familie, die jeden Tag von Gebet und Gastfreundschaft lebt.',
            pt: 'Por trás de cada notícia há uma família que vive de oração e acolhimento todos os dias.',
          })}
          primaryLabel={t({ it: 'Scopri le nostre attività', en: 'Discover our activities', de: 'Entdecke unsere Aktivitäten', pt: 'Conheça as nossas atividades' })}
          primaryTo="/cosa-facciamo"
          secondaryLabel={t({ it: 'Tutte le notizie', en: 'All news', de: 'Alle Nachrichten', pt: 'Todas as notícias' })}
          secondaryTo="/news"
        />
      </section>
    </>
  )
}
