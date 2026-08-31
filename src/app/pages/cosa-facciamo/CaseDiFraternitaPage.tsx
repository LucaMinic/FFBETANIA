import { Link } from 'react-router'
import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react'
import { PageHero } from '../../components/PageHero'
import { CaseMap } from '../../components/CaseMap'
import { PageCta } from '../../components/PageCta'
import { useT } from '../../context/LanguageContext'
import heroImg from '../../../assets/cosa-facciamo/case-di-fraternita-hero.jpg'

interface LocalizedString {
  it: string
  en: string
  de: string
  pt: string
}

interface Casa {
  slug: string
  nome: string
  luogo: LocalizedString
  indirizzo: string
  email: string
  telefono: string
  lat: number
  lng: number
  fuoriEuropa?: boolean
}

const case_: Casa[] = [
  {
    slug: 'terlizzi',
    nome: 'Casa Madre',
    luogo: { it: 'Terlizzi (BA), Italia', en: 'Terlizzi (BA), Italy', de: 'Terlizzi (BA), Italien', pt: 'Terlizzi (BA), Itália' },
    indirizzo: 'Via Pasquale Fiore 143, 70038 Terlizzi BA',
    email: 'terlizzi@ffbetania.net',
    telefono: '080 351 77 12',
    lat: 41.1327,
    lng: 16.5327,
  },
  {
    slug: 'san-quirino',
    nome: 'Casa San Quirino',
    luogo: { it: 'San Quirino (PN), Italia', en: 'San Quirino (PN), Italy', de: 'San Quirino (PN), Italien', pt: 'San Quirino (PN), Itália' },
    indirizzo: 'Via Aprilis 23, 33080 San Quirino PN',
    email: 'sanquirino@ffbetania.net',
    telefono: '0434 91409',
    lat: 45.9833,
    lng: 12.6167,
  },
  {
    slug: 'rovio',
    nome: 'Casa di Rovio',
    luogo: { it: 'Rovio, Ticino, Svizzera', en: 'Rovio, Ticino, Switzerland', de: 'Rovio, Tessin, Schweiz', pt: 'Rovio, Ticino, Suíça' },
    indirizzo: 'Via S. Felice 6821, Rovio – Ticino CH',
    email: 'rovio@ffbetania.net',
    telefono: '+41 91 630 65 40',
    lat: 45.9167,
    lng: 8.9667,
  },
  {
    slug: 'loreto',
    nome: 'Loreto',
    luogo: { it: 'Loreto (AN), Italia', en: 'Loreto (AN), Italy', de: 'Loreto (AN), Italien', pt: 'Loreto (AN), Itália' },
    indirizzo: 'Piazza Porta Marina 3, 60025 Loreto AN',
    email: 'loreto@ffbetania.net',
    telefono: '350 040 7489',
    lat: 43.4396,
    lng: 13.6106,
  },
  {
    slug: 'cella-di-noceto',
    nome: 'Cella di Noceto',
    luogo: { it: 'Cella di Noceto (PR), Italia', en: 'Cella di Noceto (PR), Italy', de: 'Cella di Noceto (PR), Italien', pt: 'Cella di Noceto (PR), Itália' },
    indirizzo: 'Via S. Pio da Pietrelcina 3, 43015 Cella di Noceto PR',
    email: 'cella.noceto@ffbetania.net',
    telefono: '0521 624 052',
    lat: 44.7833,
    lng: 10.1167,
  },
  {
    slug: 'roma',
    nome: 'Roma',
    luogo: { it: 'Roma, Italia', en: 'Rome, Italy', de: 'Rom, Italien', pt: 'Roma, Itália' },
    indirizzo: 'Via M. D. Brun Barbantini 151, 00123 Roma',
    email: 'roma@ffbetania.net',
    telefono: '06 86120934',
    lat: 42.0064,
    lng: 12.3961,
  },
  {
    slug: 'partanna',
    nome: 'Partanna',
    luogo: { it: 'Partanna (TP), Italia', en: 'Partanna (TP), Italy', de: 'Partanna (TP), Italien', pt: 'Partanna (TP), Itália' },
    indirizzo: 'Via Rocco Parisi Asaro 46/B, Partanna TP (Santuario Madonna della Libera)',
    email: 'partanna@ffbetania.net',
    telefono: '0924 88099',
    lat: 37.7167,
    lng: 12.8833,
  },
  {
    slug: 'monte-san-savino',
    nome: 'Monte San Savino',
    luogo: { it: 'Monte San Savino (AR), Italia', en: 'Monte San Savino (AR), Italy', de: 'Monte San Savino (AR), Italien', pt: 'Monte San Savino (AR), Itália' },
    indirizzo: 'Via S. Pio da Pietrelcina 3, 52048 Monte San Savino AR',
    email: 'vertighe@ffbetania.net',
    telefono: '0575 849 326',
    lat: 43.3333,
    lng: 11.7167,
  },
  {
    slug: 'aschaffenburg',
    nome: 'Aschaffenburg',
    luogo: { it: 'Aschaffenburg, Germania', en: 'Aschaffenburg, Germany', de: 'Aschaffenburg, Deutschland', pt: 'Aschaffenburg, Alemanha' },
    indirizzo: 'Kapuzinerplatz 8, D-63739 Aschaffenburg',
    email: 'aschaffenburg@ffbetania.net',
    telefono: '+49 (0)6021 583920',
    lat: 49.9769,
    lng: 9.15,
  },
  {
    slug: 'salvador-de-bahia',
    nome: 'Salvador de Bahia',
    luogo: { it: 'Salvador de Bahia, Brasile', en: 'Salvador de Bahia, Brazil', de: 'Salvador de Bahia, Brasilien', pt: 'Salvador da Bahia, Brasil' },
    indirizzo: 'Rod. BA 526 n. 1672, Bairro São Cristóvão, 41510 Salvador de Bahia',
    email: 'salvador@ffbetania.net',
    telefono: '+55 71 8249 1713',
    lat: -12.9777,
    lng: -38.5016,
    fuoriEuropa: true,
  },
  {
    slug: 'verona',
    nome: 'Verona',
    luogo: { it: 'Verona, Italia', en: 'Verona, Italy', de: 'Verona, Italien', pt: 'Verona, Itália' },
    indirizzo: 'Via Colonnello Fincato 35, 37131 Verona',
    email: 'verona@ffbetania.net',
    telefono: '045 525374',
    lat: 45.4384,
    lng: 10.9916,
  },
  {
    slug: 'leggiuno',
    nome: 'Leggiuno',
    luogo: { it: 'Leggiuno (VA), Italia', en: 'Leggiuno (VA), Italy', de: 'Leggiuno (VA), Italien', pt: 'Leggiuno (VA), Itália' },
    indirizzo: 'Via Santa Caterina, 21038 Leggiuno VA',
    email: 'santacaterina@ffbetania.net',
    telefono: '0332 647 172',
    lat: 45.8381,
    lng: 8.6167,
  },
]

const telHref = (tel: string) => `tel:${tel.replace(/[^\d+]/g, '')}`

export function CaseDiFraternitaPage() {
  const t = useT()
  return (
    <>
      <PageHero
        image={heroImg}
        title={t({ it: 'Dove siamo', en: 'Where we are', de: 'Wo wir sind', pt: 'Onde estamos' })}
        subtitle={t({
          it: 'Le nostre Case: oasi spirituali aperte a tutti, in Italia e nel mondo.',
          en: 'Our Houses: spiritual oases open to everyone, in Italy and around the world.',
          de: 'Unsere Häuser: geistliche Oasen, offen für alle, in Italien und weltweit.',
          pt: 'Nossas Casas: oásis espirituais abertos a todos, na Itália e no mundo.',
        })}
        imageAlt="Casa Madre di Terlizzi"
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <p className="max-w-3xl text-gray-600 leading-relaxed mb-4">
          {t({
            it: 'Le nostre Case sono chiamate ad essere delle "oasi spirituali" dove gli uomini e le donne di oggi possano ritrovare un sincero rapporto con Dio e con i fratelli. Chi viene a Betania non rimane spettatore perché la Fraternità apre le sue porte a tutti coloro che desiderano fare esperienza della nostra vita.',
            en: 'Our Houses are called to be "spiritual oases" where the men and women of today can rediscover a sincere relationship with God and with their brothers and sisters. Those who come to Betania do not remain spectators, because the Fraternity opens its doors to all who wish to experience our life.',
            de: 'Unsere Häuser sind berufen, „geistliche Oasen“ zu sein, in denen die Menschen von heute eine aufrichtige Beziehung zu Gott und zu den Mitmenschen wiederfinden können. Wer nach Betania kommt, bleibt nicht Zuschauer, denn die Fraternität öffnet ihre Türen allen, die unser Leben erfahren möchten.',
            pt: 'As nossas Casas são chamadas a ser "oásis espirituais" onde os homens e mulheres de hoje possam reencontrar uma relação sincera com Deus e com os irmãos. Quem vem a Betânia não permanece espectador, porque a Fraternidade abre as suas portas a todos os que desejam fazer a experiência da nossa vida.',
          })}
        </p>

        <p className="text-sm text-gray-500 mb-4">
          {t({
            it: 'Tocca un segnalino sulla mappa, oppure una scheda qui sotto, per scoprire ogni Casa e Missione:',
            en: 'Tap a marker on the map, or a card below, to discover each House and Mission:',
            de: 'Tippe auf eine Markierung auf der Karte oder auf eine Karte unten, um jedes Haus und jede Mission zu entdecken:',
            pt: 'Toque num marcador no mapa, ou num cartão abaixo, para conhecer cada Casa e Missão:',
          })}
        </p>
        <CaseMap case_={case_.map((c) => ({ ...c, luogo: t(c.luogo) }))} />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {case_.map((c) => (
            <div
              key={c.slug}
              className="group rounded-2xl border border-gray-100 p-5 hover:border-[var(--warm-orange)] hover:shadow-md transition-all"
            >
              <Link to={`/cosa-facciamo/case-di-fraternita/${c.slug}`}>
                <h3 className="font-bold text-[var(--deep-blue)] mb-2">{c.nome}</h3>
              </Link>
              <div className="flex items-start gap-1.5 text-xs text-gray-500 mb-1.5">
                <MapPin className="w-3.5 h-3.5 text-[var(--warm-orange)] shrink-0 mt-0.5" />
                <span>{c.indirizzo}</span>
              </div>
              <a href={`mailto:${c.email}`} className="flex items-center gap-1.5 text-xs mb-1.5 hover:underline">
                <Mail className="w-3.5 h-3.5 text-[var(--warm-orange)] shrink-0" />
                <span className="text-[var(--warm-orange)] break-all">{c.email}</span>
              </a>
              <a href={telHref(c.telefono)} className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[var(--warm-orange)]">
                <Phone className="w-3.5 h-3.5 text-[var(--warm-orange)] shrink-0" />
                {c.telefono}
              </a>
              <Link
                to={`/cosa-facciamo/case-di-fraternita/${c.slug}`}
                className="flex items-center gap-1 text-sm font-semibold text-[var(--warm-orange)] mt-3"
              >
                {t({ it: 'Scopri di più', en: 'Learn more', de: 'Mehr erfahren', pt: 'Saiba mais' })}
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>

        <PageCta
          title={t({ it: 'Vieni a trovarci', en: 'Come visit us', de: 'Besuche uns', pt: 'Venha nos visitar' })}
          text={t({
            it: "Ogni Casa di Fraternità è un'oasi spirituale aperta a tutti: scrivici per organizzare una visita o per saperne di più.",
            en: 'Every House of Fraternity is a spiritual oasis open to everyone: write to us to arrange a visit or to find out more.',
            de: 'Jedes Haus der Fraternität ist eine geistliche Oase, offen für alle: Schreib uns, um einen Besuch zu vereinbaren oder mehr zu erfahren.',
            pt: 'Cada Casa de Fraternidade é um oásis espiritual aberto a todos: escreva-nos para organizar uma visita ou para saber mais.',
          })}
          primaryLabel={t({ it: 'Contattaci', en: 'Contact us', de: 'Kontaktiere uns', pt: 'Contate-nos' })}
          primaryTo="/contatti"
          secondaryLabel={t({ it: 'Progetto Brasile', en: 'Brazil Project', de: 'Brasilien-Projekt', pt: 'Projeto Brasil' })}
          secondaryTo="/progetto-brasile"
        />
      </section>
    </>
  )
}
