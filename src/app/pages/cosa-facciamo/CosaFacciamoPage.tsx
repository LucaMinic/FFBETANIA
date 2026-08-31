import { Link } from 'react-router'
import { YouTubeEmbed } from '../../components/YouTubeEmbed'
import { PageHero } from '../../components/PageHero'
import { PageCta } from '../../components/PageCta'
import { useT } from '../../context/LanguageContext'
import mensaPoveri from '../../../assets/cosa-facciamo/mensa-poveri.jpg'
import sostegnoFamiglie from '../../../assets/cosa-facciamo/sostegno-alle-famiglie.jpg'
import pasti from '../../../assets/cosa-facciamo/pasti.jpg'
import servizioCucina from '../../../assets/cosa-facciamo/servizio-cucina-mensa.png'

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

export function CosaFacciamoPage() {
  const t = useT()
  return (
    <>
      <PageHero
        image={servizioCucina}
        title={t({ it: 'Attività di solidarietà', en: 'What we do', de: 'Unsere Aktivitäten', pt: 'O que fazemos' })}
        subtitle={t({
          it: 'Il nostro servizio quotidiano di accoglienza verso chi vive povertà materiali e spirituali.',
          en: 'Our daily service of hospitality towards those living in material and spiritual poverty.',
          de: 'Unser täglicher Dienst der Gastfreundschaft für Menschen, die materielle und geistliche Armut erleben.',
          pt: 'O nosso serviço diário de acolhimento para quem vive pobrezas materiais e espirituais.',
        })}
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <blockquote className="border-l-4 border-[var(--warm-orange)] pl-4 italic text-gray-600 mb-6">
        {t({
          it: '"Ogni volta che avete fatto queste cose a uno solo di questi miei fratelli più piccoli, l\'avete fatto a me." (Mt 25,40)',
          en: '"Whatever you did for one of the least of these brothers and sisters of mine, you did for me." (Mt 25:40)',
          de: '„Was ihr für einen meiner geringsten Brüder getan habt, das habt ihr mir getan.“ (Mt 25,40)',
          pt: '"Cada vez que fizestes isto a um destes meus irmãos mais pequeninos, a mim o fizestes." (Mt 25,40)',
        })}
      </blockquote>

      <p className="text-gray-600 leading-relaxed mb-4">
        {t({
          it: 'I fratelli e sorelle della FFB cercano di rispondere alle parole di Gesù attraverso il loro servizio quotidiano di solidarietà rivolto ai "piccoli" dei territori in cui sorgono le nostre Case. L\'impegno s\'inserisce in uno dei pilastri del carisma: l\'accoglienza, attraverso cui il Signore chiama ad "allargare il cuore e ad allungare le braccia" verso chi vive povertà materiali e spirituali.',
          en: 'The brothers and sisters of the FFB seek to respond to the words of Jesus through their daily service of solidarity directed at the "little ones" of the areas where our Houses stand. This commitment is part of one of the pillars of the charism: hospitality, through which the Lord calls us to "widen our hearts and stretch out our arms" to those living in material and spiritual poverty.',
          de: 'Die Brüder und Schwestern der FFB versuchen, den Worten Jesu durch ihren täglichen solidarischen Dienst an den „Kleinen“ der Gebiete, in denen unsere Häuser stehen, zu entsprechen. Dieses Engagement gehört zu einer der Säulen des Charismas: der Gastfreundschaft, durch die der Herr uns aufruft, „das Herz zu weiten und die Arme auszustrecken“ gegenüber denen, die materielle und geistliche Armut erleben.',
          pt: 'Os irmãos e irmãs da FFB procuram responder às palavras de Jesus através do seu serviço quotidiano de solidariedade voltado aos "pequenos" dos territórios onde surgem as nossas Casas. O compromisso insere-se num dos pilares do carisma: o acolhimento, através do qual o Senhor chama a "alargar o coração e estender os braços" para quem vive pobrezas materiais e espirituais.',
        })}
      </p>
      <p className="text-gray-500 text-sm italic mb-12">
        {t({
          it: '"L\'uomo sogna e Dio realizza." — "L\'Amore, quello con la A maiuscola, annulla le distanze." — Padre Pancrazio',
          en: '"Man dreams and God brings it about." — "Love, the one with a capital L, annuls all distances." — Father Pancrazio',
          de: '„Der Mensch träumt und Gott verwirklicht.“ — „Die Liebe, die mit großem L, hebt alle Entfernungen auf.“ — Pater Pancrazio',
          pt: '"O homem sonha e Deus realiza." — "O Amor, esse com A maiúsculo, anula as distâncias." — Padre Pancrazio',
        })}
      </p>

      <div className="grid sm:grid-cols-3 gap-4 mb-16">
        {attivita.map((a) => (
          <Link
            key={a.to}
            to={a.to}
            className="group block rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md hover:-translate-y-0.5 transition-all"
          >
            <div className="h-40 overflow-hidden">
              <img
                src={a.immagine}
                alt={t(a.titolo)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-[var(--deep-blue)] mb-1">{t(a.titolo)}</h3>
              <p className="text-sm text-gray-500">{t(a.descrizione)}</p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mb-16">
        <YouTubeEmbed videoId="GXxjvapi5bE" title="Attività di solidarietà FFB" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Link
          to="/progetto-brasile"
          className="rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">
            {t({ it: 'Progetto Brasile', en: 'Brazil Project', de: 'Brasilien-Projekt', pt: 'Projeto Brasil' })}
          </h3>
          <p className="text-sm text-gray-500">
            {t({
              it: 'Il centro di accoglienza a Salvador de Bahia.',
              en: 'The welcome center in Salvador de Bahia.',
              de: 'Das Aufnahmezentrum in Salvador de Bahia.',
              pt: 'O centro de acolhida em Salvador da Bahia.',
            })}
          </p>
        </Link>
        <Link
          to="/cosa-facciamo/case-di-fraternita"
          className="rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">
            {t({ it: 'Dove siamo', en: 'Where we are', de: 'Wo wir sind', pt: 'Onde estamos' })}
          </h3>
          <p className="text-sm text-gray-500">
            {t({
              it: 'Le nostre Case di Fraternità.',
              en: 'Our Houses of Fraternity.',
              de: 'Unsere Häuser der Fraternität.',
              pt: 'As nossas Casas de Fraternidade.',
            })}
          </p>
        </Link>
      </div>

      <PageCta
        title={t({ it: 'Sostieni queste attività', en: 'Support these activities', de: 'Unterstütze diese Aktivitäten', pt: 'Apoie estas atividades' })}
        text={t({
          it: 'Ogni pasto, ogni pacco alimentare, ogni parola di conforto è possibile grazie a chi sceglie di sostenerci.',
          en: 'Every meal, every food parcel, every word of comfort is possible thanks to those who choose to support us.',
          de: 'Jede Mahlzeit, jedes Lebensmittelpaket, jedes tröstende Wort ist möglich dank derer, die sich entscheiden, uns zu unterstützen.',
          pt: 'Cada refeição, cada cesta básica, cada palavra de conforto é possível graças a quem escolhe nos apoiar.',
        })}
        primaryLabel={t({ it: 'Dona ora', en: 'Donate now', de: 'Jetzt spenden', pt: 'Doe agora' })}
        primaryTo="/sostienici/dona-ora"
        secondaryLabel={t({ it: 'Scopri come aiutare', en: 'Discover how to help', de: 'Entdecke, wie du helfen kannst', pt: 'Descubra como ajudar' })}
        secondaryTo="/sostienici"
      />
      </section>
    </>
  )
}
