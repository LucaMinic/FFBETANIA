import { Link } from 'react-router'
import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react'
import { PageHero } from '../../components/PageHero'
import { CaseMap } from '../../components/CaseMap'
import { PageCta } from '../../components/PageCta'
import heroImg from '../../../assets/cosa-facciamo/case-di-fraternita-hero.jpg'

interface Casa {
  slug: string
  nome: string
  luogo: string
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
    luogo: 'Terlizzi (BA), Italia',
    indirizzo: 'Via Pasquale Fiore 143, 70038 Terlizzi BA',
    email: 'terlizzi@ffbetania.net',
    telefono: '080 351 77 12',
    lat: 41.1327,
    lng: 16.5327,
  },
  {
    slug: 'san-quirino',
    nome: 'Casa San Quirino',
    luogo: 'San Quirino (PN), Italia',
    indirizzo: 'Via Aprilis 23, 33080 San Quirino PN',
    email: 'sanquirino@ffbetania.net',
    telefono: '0434 91409',
    lat: 45.9833,
    lng: 12.6167,
  },
  {
    slug: 'rovio',
    nome: 'Casa di Rovio',
    luogo: 'Rovio, Ticino, Svizzera',
    indirizzo: 'Via S. Felice 6821, Rovio – Ticino CH',
    email: 'rovio@ffbetania.net',
    telefono: '+41 91 630 65 40',
    lat: 45.9167,
    lng: 8.9667,
  },
  {
    slug: 'loreto',
    nome: 'Loreto',
    luogo: 'Loreto (AN), Italia',
    indirizzo: 'Piazza Porta Marina 3, 60025 Loreto AN',
    email: 'loreto@ffbetania.net',
    telefono: '350 040 7489',
    lat: 43.4396,
    lng: 13.6106,
  },
  {
    slug: 'cella-di-noceto',
    nome: 'Cella di Noceto',
    luogo: 'Cella di Noceto (PR), Italia',
    indirizzo: 'Via S. Pio da Pietrelcina 3, 43015 Cella di Noceto PR',
    email: 'cella.noceto@ffbetania.net',
    telefono: '0521 624 052',
    lat: 44.7833,
    lng: 10.1167,
  },
  {
    slug: 'roma',
    nome: 'Roma',
    luogo: 'Roma, Italia',
    indirizzo: 'Via M. D. Brun Barbantini 151, 00123 Roma',
    email: 'roma@ffbetania.net',
    telefono: '06 86120934',
    lat: 42.0064,
    lng: 12.3961,
  },
  {
    slug: 'partanna',
    nome: 'Partanna',
    luogo: 'Partanna (TP), Italia',
    indirizzo: 'Via Rocco Parisi Asaro 46/B, Partanna TP (Santuario Madonna della Libera)',
    email: 'partanna@ffbetania.net',
    telefono: '0924 88099',
    lat: 37.7167,
    lng: 12.8833,
  },
  {
    slug: 'monte-san-savino',
    nome: 'Monte San Savino',
    luogo: 'Monte San Savino (AR), Italia',
    indirizzo: 'Via S. Pio da Pietrelcina 3, 52048 Monte San Savino AR',
    email: 'vertighe@ffbetania.net',
    telefono: '0575 849 326',
    lat: 43.3333,
    lng: 11.7167,
  },
  {
    slug: 'aschaffenburg',
    nome: 'Aschaffenburg',
    luogo: 'Aschaffenburg, Germania',
    indirizzo: 'Kapuzinerplatz 8, D-63739 Aschaffenburg',
    email: 'aschaffenburg@ffbetania.net',
    telefono: '+49 (0)6021 583920',
    lat: 49.9769,
    lng: 9.15,
  },
  {
    slug: 'salvador-de-bahia',
    nome: 'Salvador de Bahia',
    luogo: 'Salvador de Bahia, Brasile',
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
    luogo: 'Verona, Italia',
    indirizzo: 'Via Colonnello Fincato 35, 37131 Verona',
    email: 'verona@ffbetania.net',
    telefono: '045 525374',
    lat: 45.4384,
    lng: 10.9916,
  },
  {
    slug: 'leggiuno',
    nome: 'Leggiuno',
    luogo: 'Leggiuno (VA), Italia',
    indirizzo: 'Via Santa Caterina, 21038 Leggiuno VA',
    email: 'santacaterina@ffbetania.net',
    telefono: '0332 647 172',
    lat: 45.8381,
    lng: 8.6167,
  },
]

const telHref = (tel: string) => `tel:${tel.replace(/[^\d+]/g, '')}`

export function CaseDiFraternitaPage() {
  return (
    <>
      <PageHero
        image={heroImg}
        title="Dove siamo"
        subtitle="Le nostre Case: oasi spirituali aperte a tutti, in Italia e nel mondo."
        imageAlt="Casa Madre di Terlizzi"
      />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <p className="max-w-3xl text-gray-600 leading-relaxed mb-4">
          Le nostre Case sono chiamate ad essere delle "oasi spirituali" dove gli uomini e le donne di oggi possano
          ritrovare un sincero rapporto con Dio e con i fratelli. Chi viene a Betania non rimane spettatore perché la
          Fraternità apre le sue porte a tutti coloro che desiderano fare esperienza della nostra vita.
        </p>

        <p className="text-sm text-gray-500 mb-4">
          Tocca un segnalino sulla mappa, oppure una scheda qui sotto, per scoprire ogni Casa e Missione:
        </p>
        <CaseMap case_={case_} />

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
                Scopri di più
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>

        <PageCta
          title="Vieni a trovarci"
          text="Ogni Casa di Fraternità è un'oasi spirituale aperta a tutti: scrivici per organizzare una visita o per saperne di più."
          primaryLabel="Contattaci"
          primaryTo="/contatti"
          secondaryLabel="Progetto Brasile"
          secondaryTo="/progetto-brasile"
        />
      </section>
    </>
  )
}
