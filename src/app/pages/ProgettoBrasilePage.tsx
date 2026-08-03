import { Link } from 'react-router'
import { YouTubeEmbed } from '../components/YouTubeEmbed'
import { PageHero } from '../components/PageHero'
import asilo from '../../assets/progetto-brasile/asilo.jpg'
import cimg from '../../assets/progetto-brasile/cimg93731.jpeg'
import progettoScuola from '../../assets/progetto-brasile/progetto-scuola.jpg'
import crecheSalvador from '../../assets/progetto-brasile/creche-salvador-2024.png'

interface Tappa {
  nome: string
  fatto: boolean
}

const tappe: Tappa[] = [
  { nome: 'Nido (4 mesi - 2 anni)', fatto: true },
  { nome: 'Scuola infantile (3-5 anni)', fatto: true },
  { nome: 'Scuola elementare (6-10 anni)', fatto: false },
  { nome: 'Scuola media (11-14 anni)', fatto: false },
  { nome: 'Scuole superiori (15-18 anni)', fatto: false },
]

export function ProgettoBrasilePage() {
  return (
    <>
      <PageHero
        image={asilo}
        title="Progetto Brasile"
        subtitle="Un centro di accoglienza per l'infanzia a Salvador de Bahia."
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <p className="text-gray-600 leading-relaxed mb-12">
        L'iniziativa nasce dal proposito del fondatore padre Pancrazio di creare "un centro di accoglienza e
        ospitalità per i giovani che vivono in favelas", affrontando situazioni di disagio attraverso una formazione
        evangelica secondo i principi della comunità.
      </p>

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3">Dove siamo</h2>
      <p className="text-gray-600 leading-relaxed mb-12">
        La struttura si trova a Salvador de Bahia, nel quartiere di São Cristóvão, vicino all'aeroporto
        internazionale. L'area ospita circa duecentomila abitanti in vari gradi di povertà, con una popolazione
        prevalentemente giovane: il 70% ha meno di 25 anni. Trasmettiamo educazione scolastica, valori e competenze
        culturali per offrire prospettive di futuro più dignitose.
      </p>

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3">Il progetto</h2>
      <p className="text-gray-600 leading-relaxed mb-6">
        L'obiettivo è la realizzazione di un centro formativo dalla prima infanzia fino al completamento degli studi
        superiori, secondo le normative brasiliane, con interventi che toccano la dimensione spirituale, il percorso
        culturale-professionale e la salute.
      </p>
      <div className="space-y-2 mb-12">
        {tappe.map((t) => (
          <div key={t.nome} className="flex items-center gap-3">
            <span
              className={`w-2.5 h-2.5 rounded-full shrink-0 ${
                t.fatto ? 'bg-[var(--soft-green)]' : 'bg-gray-300'
              }`}
            />
            <span className={t.fatto ? 'text-gray-700' : 'text-gray-400'}>{t.nome}</span>
            {t.fatto && <span className="text-xs text-[var(--soft-green)] font-semibold">realizzato</span>}
          </div>
        ))}
      </div>
      <img src={progettoScuola} alt="Progetto scuola Brasile Betania" className="w-full max-h-80 object-cover rounded-2xl mb-16" />

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3">Asilo</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        La struttura accoglie fino a 120 bambini dai 4 mesi ai 5 anni di età ed è considerata di elevata qualità dalla
        comunità locale e dalle istituzioni, con un'offerta comparabile ai migliori asili privati cittadini, inclusi
        cinque pasti giornalieri completamente gratuiti.
      </p>
      <p className="text-gray-600 leading-relaxed mb-8">
        Questo servizio è possibile grazie a finanziamenti europei (principalmente da Italia, Svizzera e Germania) e
        al sostegno del comune di Salvador per il servizio di pubblica utilità. L'approccio educativo enfatizza la
        formazione continua del personale e il coinvolgimento frequente dei genitori nelle attività didattiche.
      </p>
      <div className="grid sm:grid-cols-2 gap-4 mb-16">
        <img src={cimg} alt="Asilo Nossa Senhora Aparecida" className="w-full h-56 object-cover rounded-2xl" />
        <img src={crecheSalvador} alt="Creche FFB Salvador 2024" className="w-full h-56 object-cover rounded-2xl" />
      </div>

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-6">Il progetto raccontato</h2>
      <div className="grid sm:grid-cols-3 gap-4 mb-16">
        <YouTubeEmbed videoId="2Sg-SVqwCCQ" title="Progetto Brasile - video 1" />
        <YouTubeEmbed videoId="RyMMmTmqHPs" title="Progetto Brasile - video 2" />
        <YouTubeEmbed videoId="kErK6B0u6H8" title="Progetto Brasile - video 3" />
      </div>

      <div className="rounded-2xl bg-[var(--beige)] p-8 text-center">
        <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-2">Sostieni un bambino a distanza</h2>
        <p className="text-gray-600 mb-6">
          Con il sostegno a distanza puoi aiutare un bambino a ricevere un'istruzione adeguata, sostenendo le spese
          vive per le sue attività formative.
        </p>
        <Link
          to="/sostienici/sostegno-a-distanza"
          className="inline-block px-6 py-2.5 rounded-xl bg-gradient-to-br from-[#f5b942] via-[#f7c968] to-[#f5b942] text-white font-medium shadow-md hover:shadow-lg transition-all"
        >
          Scopri come
        </Link>
      </div>
      </section>
    </>
  )
}
