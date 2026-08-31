import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '../AnimatedSection'
import { WaveDivider } from '../WaveDivider'
import { useT } from '../../context/LanguageContext'
import mensaPoveri from '../../../assets/cosa-facciamo/mensa-poveri.jpg'
import sostegnoFamiglie from '../../../assets/cosa-facciamo/sostegno-alle-famiglie.jpg'
import pasti from '../../../assets/cosa-facciamo/pasti.jpg'

interface LocalizedString {
  it: string
  en: string
  de: string
  pt: string
}

interface Attivita {
  titolo: LocalizedString
  descrizione: LocalizedString
  immagine: string
  to: string
}

const attivita: Attivita[] = [
  {
    titolo: { it: 'Mensa dei poveri', en: 'Soup kitchen', de: 'Armenküche', pt: 'Refeitório dos pobres' },
    descrizione: {
      it: 'Un pasto, un sorriso, un volto amico: il nostro servizio quotidiano ai più bisognosi.',
      en: 'A meal, a smile, a friendly face: our daily service to those most in need.',
      de: 'Eine Mahlzeit, ein Lächeln, ein freundliches Gesicht: unser täglicher Dienst für die Bedürftigsten.',
      pt: 'Uma refeição, um sorriso, um rosto amigo: o nosso serviço diário aos mais necessitados.',
    },
    immagine: mensaPoveri,
    to: '/cosa-facciamo/mensa-dei-poveri',
  },
  {
    titolo: { it: 'Sostegno alle famiglie', en: 'Support for families', de: 'Unterstützung für Familien', pt: 'Apoio às famílias' },
    descrizione: {
      it: 'Accanto a chi vive momenti di difficoltà, con ascolto e concretezza.',
      en: 'Alongside those going through hard times, with listening and concrete help.',
      de: 'An der Seite derer, die schwierige Zeiten durchleben, mit Zuhören und konkreter Hilfe.',
      pt: 'Ao lado de quem vive momentos de dificuldade, com escuta e ações concretas.',
    },
    immagine: sostegnoFamiglie,
    to: '/cosa-facciamo/sostegno-alle-famiglie',
  },
  {
    titolo: {
      it: 'Raccolta, smistamento e distribuzione',
      en: 'Collection, sorting and distribution',
      de: 'Sammlung, Sortierung und Verteilung',
      pt: 'Coleta, triagem e distribuição',
    },
    descrizione: {
      it: 'Il lavoro quotidiano che rende possibile ogni gesto di solidarietà.',
      en: 'The daily work that makes every act of solidarity possible.',
      de: 'Die tägliche Arbeit, die jede Geste der Solidarität möglich macht.',
      pt: 'O trabalho diário que torna possível cada gesto de solidariedade.',
    },
    immagine: pasti,
    to: '/cosa-facciamo/raccolta-smistamento-distribuzione',
  },
]

export function ComeAiutiamo() {
  const t = useT()
  return (
    <>
      <WaveDivider fill="var(--beige)" />
      <section className="py-16 sm:py-24 bg-[var(--beige)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <p className="text-sm font-semibold text-[var(--warm-orange)] uppercase tracking-wide text-center mb-2">
              {t({
                it: 'Ogni giorno, accanto a chi ha bisogno',
                en: 'Every day, alongside those in need',
                de: 'Jeden Tag an der Seite der Bedürftigen',
                pt: 'Todos os dias, ao lado de quem precisa',
              })}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] text-center mb-3">
              {t({ it: 'Come aiutiamo', en: 'How we help', de: 'Wie wir helfen', pt: 'Como ajudamos' })}
            </h2>
            <p className="text-gray-500 text-center max-w-xl mx-auto mb-12">
              {t({
                it: 'Non lasciamo mai nessuno solo: apriamo le porte a chi cerca un pasto, un ascolto, una mano tesa — senza fare domande.',
                en: 'We never leave anyone alone: we open our doors to those seeking a meal, a listening ear, a helping hand — no questions asked.',
                de: 'Wir lassen niemanden allein: Wir öffnen unsere Türen für alle, die eine Mahlzeit, ein offenes Ohr oder eine helfende Hand suchen — ohne Fragen zu stellen.',
                pt: 'Nunca deixamos ninguém sozinho: abrimos as portas a quem busca uma refeição, uma escuta, uma mão estendida — sem fazer perguntas.',
              })}
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-8 mb-10">
            {attivita.map((a, i) => (
              <AnimatedSection key={a.to} delay={i * 0.1}>
                <Link
                  to={a.to}
                  className="group relative block aspect-[3/4] rounded-[2rem] overflow-hidden shadow-[0_12px_40px_-16px_rgba(93,74,58,0.35)] hover:shadow-[0_28px_60px_-16px_rgba(212,151,108,0.5)] hover:-translate-y-2 hover:rotate-[0.5deg] transition-all duration-500 ease-out"
                >
                  <img
                    src={a.immagine}
                    alt={t(a.titolo)}
                    className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-125 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--deep-blue)]/95 via-[var(--deep-blue)]/25 to-transparent group-hover:from-[var(--deep-blue)]/95 group-hover:via-[var(--deep-blue)]/40 transition-all duration-500" />

                  <div className="absolute inset-x-0 bottom-0 p-7">
                    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-sm">{t(a.titolo)}</h3>
                    <p className="text-sm text-white/85 leading-relaxed mb-4 max-w-[95%]">{t(a.descrizione)}</p>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--warm-orange-light)] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                      {t({ it: 'Scopri di più', en: 'Learn more', de: 'Mehr erfahren', pt: 'Saiba mais' })}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <p className="text-center">
              <Link to="/cosa-facciamo" className="text-sm font-semibold text-[var(--warm-orange)] hover:underline">
                {t({
                  it: 'Scopri tutte le nostre attività di solidarietà',
                  en: 'Discover all our solidarity activities',
                  de: 'Entdecke alle unsere karitativen Aktivitäten',
                  pt: 'Conheça todas as nossas atividades solidárias',
                })}{' '}
                →
              </Link>
            </p>
          </AnimatedSection>
        </div>
      </section>
      <WaveDivider fill="var(--beige)" flip />
    </>
  )
}
