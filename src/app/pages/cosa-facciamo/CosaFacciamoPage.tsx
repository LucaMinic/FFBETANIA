import { Link } from 'react-router'
import { YouTubeEmbed } from '../../components/YouTubeEmbed'
import { PageHero } from '../../components/PageHero'
import mensaPoveri from '../../../assets/cosa-facciamo/mensa-poveri.jpg'
import sostegnoFamiglie from '../../../assets/cosa-facciamo/sostegno-alle-famiglie.jpg'
import pasti from '../../../assets/cosa-facciamo/pasti.jpg'
import servizioCucina from '../../../assets/cosa-facciamo/servizio-cucina-mensa.png'

interface Attivita {
  titolo: string
  descrizione: string
  immagine: string
  to: string
}

const attivita: Attivita[] = [
  {
    titolo: 'Mensa dei poveri',
    descrizione: 'Un pasto, un sorriso, un volto amico: il nostro servizio quotidiano ai più bisognosi.',
    immagine: mensaPoveri,
    to: '/cosa-facciamo/mensa-dei-poveri',
  },
  {
    titolo: 'Sostegno alle famiglie',
    descrizione: 'Accanto a chi vive momenti di difficoltà, con ascolto e concretezza.',
    immagine: sostegnoFamiglie,
    to: '/cosa-facciamo/sostegno-alle-famiglie',
  },
  {
    titolo: 'Raccolta, smistamento e distribuzione',
    descrizione: 'Il lavoro quotidiano che rende possibile ogni gesto di solidarietà.',
    immagine: pasti,
    to: '/cosa-facciamo/raccolta-smistamento-distribuzione',
  },
]

export function CosaFacciamoPage() {
  return (
    <>
      <PageHero
        image={servizioCucina}
        title="Attività di solidarietà"
        subtitle="Il nostro servizio quotidiano di accoglienza verso chi vive povertà materiali e spirituali."
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <blockquote className="border-l-4 border-[var(--warm-orange)] pl-4 italic text-gray-600 mb-6">
        "Ogni volta che avete fatto queste cose a uno solo di questi miei fratelli più piccoli, l'avete fatto a me."
        (Mt 25,40)
      </blockquote>

      <p className="text-gray-600 leading-relaxed mb-4">
        I fratelli e sorelle della FFB cercano di rispondere alle parole di Gesù attraverso il loro servizio
        quotidiano di solidarietà rivolto ai "piccoli" dei territori in cui sorgono le nostre Case. L'impegno
        s'inserisce in uno dei pilastri del carisma: l'accoglienza, attraverso cui il Signore chiama ad "allargare il
        cuore e ad allungare le braccia" verso chi vive povertà materiali e spirituali.
      </p>
      <p className="text-gray-500 text-sm italic mb-12">
        "L'uomo sogna e Dio realizza." — "L'Amore, quello con la A maiuscola, annulla le distanze." — Padre Pancrazio
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
                alt={a.titolo}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-[var(--deep-blue)] mb-1">{a.titolo}</h3>
              <p className="text-sm text-gray-500">{a.descrizione}</p>
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
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">Progetto Brasile</h3>
          <p className="text-sm text-gray-500">Il centro di accoglienza a Salvador de Bahia.</p>
        </Link>
        <Link
          to="/cosa-facciamo/case-di-fraternita"
          className="rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">Dove siamo</h3>
          <p className="text-sm text-gray-500">Le nostre Case di Fraternità.</p>
        </Link>
      </div>
      </section>
    </>
  )
}
