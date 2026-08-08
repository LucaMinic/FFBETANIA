import { YouTubeEmbed } from '../components/YouTubeEmbed'
import { PageHero } from '../components/PageHero'
import { PageCta } from '../components/PageCta'
import convegnoGiubilare from '../../assets/chi-siamo/convegno-giubilare-3167.jpg'

const videoIds = [
  'GV-O28mk_BA',
  'GXoMELIFeHk',
  'KJimKDT2dk8',
  'UsDsFGB4WUI',
  'XQdM4gK-S6M',
  '_SvJE_oYZso',
  'hMm-65C59X4',
  'qf9ykbj_nZg',
  'wwj4rkDfi6E',
]

interface Pubblicazione {
  titolo: string
  file: string
}

const doc = (path: string) => `${import.meta.env.BASE_URL}documenti/${path}`

const ancillaDomini: Pubblicazione[] = [
  { titolo: 'AD1 2017', file: doc('ancilla-domini/AD1_2017.pdf') },
  { titolo: 'AD1 2018', file: doc('ancilla-domini/AD1_2018.pdf') },
  { titolo: 'AD1 2019', file: doc('ancilla-domini/AD1_2019.pdf') },
  { titolo: 'AD2 2017', file: doc('ancilla-domini/AD2_2017.pdf') },
  { titolo: 'AD2 2018', file: doc('ancilla-domini/AD2_2018.pdf') },
  { titolo: 'AD2 2019', file: doc('ancilla-domini/AD2_2019.pdf') },
  { titolo: 'AD3 2017', file: doc('ancilla-domini/AD3_2017.pdf') },
  { titolo: 'AD3 2018', file: doc('ancilla-domini/AD3_2018.pdf') },
  { titolo: 'AD3 2019', file: doc('ancilla-domini/AD3_2019.pdf') },
  { titolo: 'AD4 2017', file: doc('ancilla-domini/AD4_2017.pdf') },
  { titolo: 'AD4 2018', file: doc('ancilla-domini/AD4_2018.pdf') },
  { titolo: 'AD4 2019', file: doc('ancilla-domini/AD4_2019.pdf') },
  { titolo: 'Speciale Ancilla Domini FFB, aprile-giugno 2016', file: doc('ancilla-domini/Speciale-2016.pdf') },
  { titolo: 'Speciale Ancilla Domini FFB, giugno 2020', file: doc('ancilla-domini/Speciale-2020.pdf') },
  { titolo: 'Speciale Ancilla Domini FFB, giugno 2021', file: doc('ancilla-domini/Speciale-2021.pdf') },
  { titolo: 'Speciale Ancilla Domini FFB, febbraio 2022', file: doc('ancilla-domini/Speciale-2022-febbraio.pdf') },
  { titolo: 'Speciale Ancilla Domini FFB, novembre 2022', file: doc('ancilla-domini/Speciale-2022-novembre.pdf') },
  {
    titolo: 'Ancilla Domini FFB maggio 2023, inserto Capitolo Generale',
    file: doc('ancilla-domini/AD-maggio-2023-capitolo-generale.pdf'),
  },
]

const comunicatiStampa: Pubblicazione[] = [
  { titolo: '"Dio è bello da morire" di Roberto Fusco', file: doc('comunicati-stampa/dio-e-bello-da-morire.pdf') },
  { titolo: '"La forza dell\'amore" di Elias Coviello', file: doc('comunicati-stampa/la-forza-dellamore.pdf') },
]

export function MediaPage() {
  return (
    <>
      <PageHero
        image={convegnoGiubilare}
        title="Media"
        subtitle="Video, pubblicazioni e racconti della vita della Fraternità."
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-6">Video</h2>
      <div className="grid sm:grid-cols-3 gap-4 mb-16">
        {videoIds.map((id, i) => (
          <YouTubeEmbed key={id} videoId={id} title={`Video FFBetania ${i + 1}`} />
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-2">Pubblicazioni — Ancilla Domini</h2>
      <p className="text-gray-500 text-sm mb-6">Il bollettino periodico della Fraternità.</p>
      <div className="grid sm:grid-cols-2 gap-2 mb-16">
        {ancillaDomini.map((p) => (
          <a
            key={p.file}
            href={p.file}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-gray-100 px-4 py-3 text-sm text-gray-600 hover:border-[var(--warm-orange)] hover:text-[var(--warm-orange)] transition-colors"
          >
            {p.titolo}
          </a>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-2">Libri pubblicati da membri della Fraternità</h2>
      <div className="grid sm:grid-cols-2 gap-2">
        {comunicatiStampa.map((p) => (
          <a
            key={p.file}
            href={p.file}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-gray-100 px-4 py-3 text-sm text-gray-600 hover:border-[var(--warm-orange)] hover:text-[var(--warm-orange)] transition-colors"
          >
            {p.titolo}
          </a>
        ))}
      </div>

      <PageCta
        title="Vuoi conoscere di persona la nostra vita?"
        text="Dietro ogni video e ogni pubblicazione c'è una famiglia che vive di preghiera e accoglienza ogni giorno."
        primaryLabel="Scopri le nostre attività"
        primaryTo="/cosa-facciamo"
        secondaryLabel="Contattaci"
        secondaryTo="/contatti"
      />
      </section>
    </>
  )
}
