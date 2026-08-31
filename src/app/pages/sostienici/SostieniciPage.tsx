import { Link } from 'react-router'
import { HandCoins, Percent, Target, GraduationCap, Package, ScrollText, Megaphone, ArrowRight } from 'lucide-react'
import { PageHero } from '../../components/PageHero'
import { useT } from '../../context/LanguageContext'
import heroImg from '../../../assets/sostienici/spiritualita-hero.jpg'
import donaOraImg from '../../../assets/progetto-brasile/asilo.jpg'
import cinqueXMilleImg from '../../../assets/sostienici/5x1000-banner.png'
import progettiImg from '../../../assets/progetto-brasile/cimg93731.jpeg'
import sostegnoDistanzaImg from '../../../assets/progetto-brasile/creche-salvador-2024.png'
import donaBeniImg from '../../../assets/sostienici/dona-beni-servizi.jpg'
import lascitiImg from '../../../assets/sostienici/spiritualita-hero.jpg'
import campagnaImg from '../../../assets/sostienici/thumb-scuola-brasile.png'

interface LocalizedString {
  it: string
  en: string
  de: string
  pt: string
}

interface Voce {
  icon: typeof HandCoins
  titolo: LocalizedString
  descrizione: LocalizedString
  to: string
  immagine: string
}

interface Sezione {
  titolo: LocalizedString
  descrizione: LocalizedString
  voci: Voce[]
}

const sezioni: Sezione[] = [
  {
    titolo: { it: 'Dona subito', en: 'Give right away', de: 'Sofort spenden', pt: 'Doe já' },
    descrizione: {
      it: 'I modi più immediati per sostenerci, anche senza spendere nulla.',
      en: 'The quickest ways to support us, even without spending anything.',
      de: 'Die schnellsten Wege, uns zu unterstützen — auch ganz ohne eigene Kosten.',
      pt: 'As formas mais imediatas de nos apoiar, mesmo sem gastar nada.',
    },
    voci: [
      {
        icon: HandCoins,
        titolo: { it: 'Dona ora', en: 'Donate now', de: 'Jetzt spenden', pt: 'Doe agora' },
        descrizione: {
          it: 'Sostieni subito le nostre attività di solidarietà.',
          en: 'Support our solidarity activities right away.',
          de: 'Unterstütze unsere karitativen Aktivitäten sofort.',
          pt: 'Apoie já as nossas atividades solidárias.',
        },
        to: '/sostienici/dona-ora',
        immagine: donaOraImg,
      },
      {
        icon: Percent,
        titolo: { it: '5x1000', en: '5x1000', de: '5x1000', pt: '5x1000' },
        descrizione: {
          it: 'Destina il 5x1000 alla Fondazione Betania ETS.',
          en: 'Designate your Italian 5x1000 tax share to Fondazione Betania ETS.',
          de: 'Bestimme deine italienische 5x1000-Steuerquote für die Fondazione Betania ETS.',
          pt: 'Destine o seu 5x1000 (imposto italiano) à Fondazione Betania ETS.',
        },
        to: '/sostienici/5x1000',
        immagine: cinqueXMilleImg,
      },
    ],
  },
  {
    titolo: { it: 'Sostegno continuativo', en: 'Ongoing support', de: 'Dauerhafte Unterstützung', pt: 'Apoio contínuo' },
    descrizione: {
      it: 'Per chi vuole restare accanto a un progetto nel tempo.',
      en: 'For those who want to stay close to a project over time.',
      de: 'Für alle, die einem Projekt langfristig zur Seite stehen möchten.',
      pt: 'Para quem quer permanecer ao lado de um projeto ao longo do tempo.',
    },
    voci: [
      {
        icon: Target,
        titolo: { it: 'I nostri progetti', en: 'Our projects', de: 'Unsere Projekte', pt: 'Nossos projetos' },
        descrizione: {
          it: 'Le campagne di raccolta fondi in corso.',
          en: 'Our current fundraising campaigns.',
          de: 'Unsere laufenden Spendenkampagnen.',
          pt: 'As campanhas de arrecadação de fundos em curso.',
        },
        to: '/sostienici/progetti',
        immagine: progettiImg,
      },
      {
        icon: GraduationCap,
        titolo: { it: 'Sostegno a distanza', en: 'Long-distance support', de: 'Patenschaften', pt: 'Apadrinhamento à distância' },
        descrizione: {
          it: 'Aiuta un bambino del Progetto Brasile a crescere e studiare.',
          en: 'Help a child from the Brazil Project grow up and study.',
          de: 'Hilf einem Kind des Brasilien-Projekts beim Aufwachsen und Lernen.',
          pt: 'Ajude uma criança do Projeto Brasil a crescer e estudar.',
        },
        to: '/sostienici/sostegno-a-distanza',
        immagine: sostegnoDistanzaImg,
      },
    ],
  },
  {
    titolo: {
      it: 'Altre forme di generosità',
      en: 'Other forms of generosity',
      de: 'Weitere Formen der Großzügigkeit',
      pt: 'Outras formas de generosidade',
    },
    descrizione: {
      it: 'Per aziende, professionisti e chi vuole lasciare un segno duraturo.',
      en: 'For companies, professionals and those who want to leave a lasting mark.',
      de: 'Für Unternehmen, Fachleute und alle, die ein bleibendes Zeichen setzen möchten.',
      pt: 'Para empresas, profissionais e quem deseja deixar uma marca duradoura.',
    },
    voci: [
      {
        icon: Package,
        titolo: { it: 'Dona beni o servizi', en: 'Donate goods or services', de: 'Sachspenden oder Dienstleistungen', pt: 'Doe bens ou serviços' },
        descrizione: {
          it: 'Aziende e professionisti possono donare prodotti o competenze.',
          en: 'Companies and professionals can donate products or expertise.',
          de: 'Unternehmen und Fachleute können Produkte oder Know-how spenden.',
          pt: 'Empresas e profissionais podem doar produtos ou competências.',
        },
        to: '/sostienici/dona-beni-o-servizi',
        immagine: donaBeniImg,
      },
      {
        icon: ScrollText,
        titolo: { it: 'Lasciti solidali', en: 'Legacy gifts', de: 'Vermächtnisse', pt: 'Legados solidários' },
        descrizione: {
          it: 'Un gesto di generosità che dura nel tempo.',
          en: 'A gesture of generosity that lasts over time.',
          de: 'Eine Geste der Großzügigkeit, die über die Zeit hinaus wirkt.',
          pt: 'Um gesto de generosidade que perdura no tempo.',
        },
        to: '/sostienici/lasciti-solidali',
        immagine: lascitiImg,
      },
      {
        icon: Megaphone,
        titolo: { it: 'Proponi la tua campagna', en: 'Propose your campaign', de: 'Schlage deine Kampagne vor', pt: 'Proponha sua campanha' },
        descrizione: {
          it: 'Crea una raccolta fondi personale per i nostri progetti.',
          en: 'Create a personal fundraiser for our projects.',
          de: 'Erstelle eine persönliche Spendenaktion für unsere Projekte.',
          pt: 'Crie uma arrecadação de fundos pessoal para os nossos projetos.',
        },
        to: '/sostienici/proponi-una-campagna',
        immagine: campagnaImg,
      },
    ],
  },
]

export function SostieniciPage() {
  const t = useT()
  return (
    <>
      <PageHero
        image={heroImg}
        title={t({ it: 'Sostienici', en: 'Support us', de: 'Unterstütze uns', pt: 'Apoie-nos' })}
        subtitle={t({
          it: "Insieme, con l'aiuto di Dio, possiamo fare molto per chi ha bisogno.",
          en: 'Together, with God’s help, we can do so much for those in need.',
          de: 'Gemeinsam, mit Gottes Hilfe, können wir viel für die Bedürftigen tun.',
          pt: 'Juntos, com a ajuda de Deus, podemos fazer muito por quem precisa.',
        })}
        imageAlt="Fraternità Francescana di Betania"
      />
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <p className="text-lg text-gray-600 leading-relaxed text-center max-w-2xl mx-auto mb-16">
          {t({
            it: "Ogni giorno, in Italia e in Brasile, apriamo le porte a chi ha bisogno di un pasto, di un ascolto, di una casa. Lo facciamo grazie a chi sceglie di starci accanto — in tanti modi diversi. Trova il tuo.",
            en: 'Every day, in Italy and in Brazil, we open our doors to those who need a meal, a listening ear, a home. We do it thanks to those who choose to stand by us — in many different ways. Find yours.',
            de: 'Jeden Tag, in Italien und in Brasilien, öffnen wir unsere Türen für alle, die eine Mahlzeit, ein offenes Ohr oder ein Zuhause brauchen. Wir schaffen das dank derer, die sich entscheiden, an unserer Seite zu stehen — auf viele verschiedene Arten. Finde deine.',
            pt: 'Todos os dias, na Itália e no Brasil, abrimos as portas a quem precisa de uma refeição, de uma escuta, de uma casa. Conseguimos fazê-lo graças a quem escolhe estar ao nosso lado — de muitas formas diferentes. Encontre a sua.',
          })}
        </p>

        {sezioni.map((s, i) => {
          const isPrimary = i === 0
          return (
            <div
              key={i}
              className={`${i < sezioni.length - 1 ? 'mb-10' : ''} ${
                isPrimary
                  ? 'rounded-[2.5rem] bg-gradient-to-br from-[var(--beige)] to-[var(--beige-dark)]/60 p-6 sm:p-10'
                  : ''
              }`}
            >
              <h2 className={`font-bold text-[var(--deep-blue)] mb-1 ${isPrimary ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>
                {t(s.titolo)}
              </h2>
              <p className={`text-gray-500 mb-5 ${isPrimary ? '' : 'text-sm'}`}>{t(s.descrizione)}</p>
              <div className={`grid sm:grid-cols-2 gap-5 ${isPrimary ? '' : 'lg:grid-cols-3'}`}>
                {s.voci.map((v) => (
                  <Link
                    key={v.to}
                    to={v.to}
                    className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className={`overflow-hidden ${isPrimary ? 'h-48' : 'h-36'}`}>
                      <img
                        src={v.immagine}
                        alt={t(v.titolo)}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className={isPrimary ? 'p-6' : 'p-5'}>
                      <v.icon className="w-6 h-6 text-[var(--warm-orange)] mb-2" />
                      <h3 className={`flex items-center gap-1.5 font-bold text-[var(--deep-blue)] mb-1 ${isPrimary ? 'text-lg' : ''}`}>
                        {t(v.titolo)}
                        <ArrowRight className="w-3.5 h-3.5 text-[var(--warm-orange)] transition-transform group-hover:translate-x-0.5" />
                      </h3>
                      <p className="text-sm text-gray-500">{t(v.descrizione)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )
        })}
      </section>
    </>
  )
}
