import { Link } from 'react-router'
import { ArrowLeft } from 'lucide-react'
import { PageHero } from './PageHero'
import { PageCta } from './PageCta'
import { AnimatedSection } from './AnimatedSection'
import { useT } from '../context/LanguageContext'

interface CampagnaLayoutProps {
  titolo: string
  immagine: string
  heroAlt?: string
  raccolti: string
  obiettivo?: string
  conclusa?: boolean
  paragrafi: string[]
  relatedLabel?: string
  relatedTo?: string
}

export function CampagnaLayout({
  titolo,
  immagine,
  heroAlt,
  raccolti,
  obiettivo,
  conclusa,
  paragrafi,
  relatedLabel,
  relatedTo,
}: CampagnaLayoutProps) {
  const t = useT()

  return (
    <>
      <PageHero image={immagine} title={titolo} imageAlt={heroAlt} />

      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <Link
          to="/sostienici/progetti"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--warm-orange)] hover:text-[var(--warm-orange-light)] mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t({ it: 'Tutti i progetti', en: 'All projects', de: 'Alle Projekte', pt: 'Todos os projetos' })}
        </Link>

        <AnimatedSection immediate>
          <div className="rounded-2xl bg-[var(--beige)] p-6 mb-10">
            <div className="h-1.5 rounded-full bg-white/70 overflow-hidden mb-2">
              <div
                className="h-full rounded-full bg-[var(--warm-orange)]"
                style={{ width: conclusa ? '100%' : '55%' }}
              />
            </div>
            <p className="text-sm text-gray-600">
              <span className="font-semibold text-[var(--deep-blue)]">
                {t({ it: `${raccolti} raccolti`, en: `${raccolti} raised`, de: `${raccolti} gesammelt`, pt: `${raccolti} arrecadados` })}
              </span>
              {obiettivo && ` · ${t({ it: 'obiettivo', en: 'goal', de: 'Ziel', pt: 'objetivo' })} ${obiettivo}`}
              {conclusa && (
                <span className="ml-2 font-semibold text-[var(--warm-orange)]">
                  · {t({ it: 'campagna conclusa', en: 'campaign closed', de: 'Kampagne beendet', pt: 'campanha encerrada' })}
                </span>
              )}
            </p>
          </div>
        </AnimatedSection>

        {paragrafi.map((testo, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <p className="text-gray-600 leading-relaxed mb-6">{testo}</p>
          </AnimatedSection>
        ))}

        <p className="text-xs text-gray-400 italic mb-16">
          {t({
            it: 'Progetto mostrato a titolo di esempio, in attesa del collegamento al nostro nuovo sistema di gestione delle campagne di raccolta fondi.',
            en: 'Project shown as an example, pending the connection to our new fundraising campaign management system.',
            de: 'Projekt beispielhaft dargestellt, bis zur Anbindung an unser neues Verwaltungssystem für Spendenkampagnen.',
            pt: 'Projeto apresentado a título de exemplo, enquanto se aguarda a ligação ao nosso novo sistema de gestão de campanhas de angariação de fundos.',
          })}
        </p>

        {relatedLabel && relatedTo && (
          <AnimatedSection>
            <Link
              to={relatedTo}
              className="block rounded-2xl border border-gray-100 p-5 mb-16 hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <p className="text-xs text-gray-400 mb-1">
                {t({ it: 'Scopri di più', en: 'Learn more', de: 'Mehr erfahren', pt: 'Saiba mais' })}
              </p>
              <h3 className="font-bold text-[var(--deep-blue)]">{relatedLabel}</h3>
            </Link>
          </AnimatedSection>
        )}

        {conclusa ? (
          <AnimatedSection>
            <div className="rounded-[2rem] bg-[var(--beige)] p-8 sm:p-12 text-center">
              <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-3">
                {t({ it: 'Obiettivo raggiunto grazie a voi', en: 'Goal reached thanks to you', de: 'Ziel dank euch erreicht', pt: 'Objetivo alcançado graças a vocês' })}
              </h2>
              <p className="text-gray-600 max-w-xl mx-auto mb-6 leading-relaxed">
                {t({
                  it: 'Questa campagna si è conclusa con successo. Ogni nuova donazione sostiene i nostri progetti attivi e il servizio quotidiano di solidarietà.',
                  en: 'This campaign has closed successfully. Every new donation supports our active projects and our daily service of solidarity.',
                  de: 'Diese Kampagne wurde erfolgreich abgeschlossen. Jede neue Spende unterstützt unsere aktiven Projekte und unseren täglichen karitativen Dienst.',
                  pt: 'Esta campanha foi concluída com sucesso. Cada nova doação apoia os nossos projetos ativos e o nosso serviço diário de solidariedade.',
                })}
              </p>
              <Link
                to="/sostienici/dona-ora"
                className="inline-block px-6 py-2.5 rounded-xl bg-gradient-to-br from-[#f5b942] via-[#f7c968] to-[#f5b942] text-white font-medium shadow-md hover:shadow-lg transition-all"
              >
                {t({ it: 'Dona ora', en: 'Donate now', de: 'Jetzt spenden', pt: 'Doe agora' })}
              </Link>
            </div>
          </AnimatedSection>
        ) : (
          <PageCta
            title={t({ it: 'Sostieni questo progetto', en: 'Support this project', de: 'Unterstütze dieses Projekt', pt: 'Apoie este projeto' })}
            text={t({
              it: 'Ogni donazione, anche piccola, avvicina questo progetto al suo obiettivo.',
              en: 'Every donation, even a small one, brings this project closer to its goal.',
              de: 'Jede Spende, auch eine kleine, bringt dieses Projekt seinem Ziel näher.',
              pt: 'Cada doação, mesmo pequena, aproxima este projeto do seu objetivo.',
            })}
            primaryLabel={t({ it: 'Dona ora', en: 'Donate now', de: 'Jetzt spenden', pt: 'Doe agora' })}
            primaryTo="/sostienici/dona-ora"
            secondaryLabel={t({ it: 'Tutti i progetti', en: 'All projects', de: 'Alle Projekte', pt: 'Todos os projetos' })}
            secondaryTo="/sostienici/progetti"
          />
        )}
      </section>
    </>
  )
}
