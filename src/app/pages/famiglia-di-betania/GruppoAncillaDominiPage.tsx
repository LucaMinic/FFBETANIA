import { PageHero } from '../../components/PageHero'
import { PageCta } from '../../components/PageCta'
import logoGad from '../../../assets/famiglia-di-betania/logo-gad.jpeg'
import convegnoGiubilare from '../../../assets/famiglia-di-betania/convegno-giubilare-1794.jpg'

interface Gruppo {
  nome: string
  luogo: string
  quando: string
  referente: string
}

const gruppi: Gruppo[] = [
  { nome: 'Cagliari', luogo: 'Cappella della Madonna del Rosario, via Vidal 2, Cagliari', quando: 'Venerdì 19:00', referente: 'Alberto' },
  { nome: 'Cadegliano', luogo: 'Cadegliano Viconago (Varese)', quando: 'Domenica 16:30', referente: 'Giovanna — giovanna.armani65@gmail.com' },
  { nome: "Sant'Elpidio", luogo: "Chiesa Madonna della Fiducia, corso Umberto I 166, Porto Sant'Elpidio (Fermo)", quando: 'Giovedì 21:15', referente: 'Loredana — lory.gaetani92@gmail.com' },
  { nome: 'Sirolo', luogo: 'Chiesa San Nicolò di Bari, piazza Vittorio Veneto, Sirolo (Ancona)', quando: 'Mercoledì 18:30', referente: 'Simonetta — simonetta.orlandini@libero.it' },
  { nome: 'Marsala', luogo: 'Santuario Madonna Della Cava, via Pellegrino A.E.V. 1, Marsala (Trapani)', quando: 'Mercoledì 21:00', referente: 'Loredana — loredanaconcorsi@libero.it' },
  { nome: 'Terlizzi', luogo: 'Centro Parrocchiale S. Cuore di Gesù, via della Resistenza 56, Terlizzi (Bari)', quando: 'Venerdì 18:30', referente: 'Saverio — saveriodibisceglie@libero.it' },
  { nome: 'San Pio X (Verona)', luogo: 'Chiesa San Pio X, via Carlo Cipolla 36, Verona', quando: 'Venerdì 20:45', referente: 'Paola — paolafor22@gmail.com' },
  { nome: 'Salemi', luogo: 'Chiesa di San Ciro, contrada San Ciro, Salemi (Trapani)', quando: 'Lunedì 21:00', referente: 'Mariapia — mariapiarubino02@gmail.com' },
  { nome: 'Parma', luogo: 'Chiesa di San Luca, via Goria 2, Parma', quando: 'Martedì 21:00', referente: 'Yris — yrisfalcon9@gmail.com' },
  { nome: 'Roma', luogo: 'Fraternità Francescana di Betania, via Maria Domenica Brun Barbantini 151, Roma', quando: 'Mercoledì 20:30', referente: 'Loredana — loredana.rossitto@libero.it' },
  { nome: 'Castellana Grotte', luogo: "Chiesetta di Sant'Onofrio, via Sant'Onofrio 20, Castellana Grotte (Bari)", quando: 'Martedì 19:30', referente: 'Donatello — caldon1960@libero.it' },
  { nome: 'San Paolo', luogo: 'Chiesa Conversione di San Paolo, via Giovanni Minzoni 8, San Polo di Torrile (Parma)', quando: 'Giovedì 16:30', referente: 'Fausta — faustarossi476@gmail.com' },
  { nome: 'Partanna', luogo: 'Chiesa Madonna delle Grazie, via Trieste, Partanna (Trapani)', quando: 'Venerdì 21:00', referente: 'Antonio — antoniomessina73@gmail.com' },
  { nome: "D'Azzano", luogo: 'Salone parrocchia Maria SS. Assunta di Beccacivetta, via P. Mascagni, Castel d\'Azzano (Verona)', quando: 'Venerdì 20:45', referente: 'fra Giampiero, fra Marco, sr Annemarie' },
  { nome: 'Fermo', luogo: "Locali parrocchiali Chiesa San Gabriele dell'Addolorata, zona Campiglione, Fermo", quando: 'Mercoledì 21:15 (inv.) / 21:30 (est.)', referente: 'annaagostini.67@gmail.com' },
  { nome: 'Valdarno', luogo: 'Santuario della Purificazione di Maria, piazza San Marco, Valdarno di Albizzate (Varese)', quando: 'Venerdì 14:30', referente: 'Patrizia' },
  { nome: 'Legnano', luogo: 'Centro parrocchiale San Magno, piazza San Magno 10, Legnano (Milano)', quando: 'Lunedì 20:45', referente: 'Rosario — falzy.ross1963@libero.it' },
  { nome: 'Civitanova Marche', luogo: 'Chiesa parrocchiale San Gabriele, via Friuli 58, Civitanova Marche (Macerata)', quando: 'Giovedì 21:15', referente: 'Massimo — massimosantoni60@tiscali.it' },
]

export function GruppoAncillaDominiPage() {
  return (
    <>
      <PageHero
        image={convegnoGiubilare}
        title="Gruppi Ancilla Domini"
        subtitle="18 gruppi di preghiera del Rinnovamento Carismatico Cattolico in tutta Italia."
        imageAlt="Fraternità Francescana di Betania - Convegno Giubilare"
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <div className="flex items-center justify-center gap-6 mb-8">
        <img src={logoGad} alt="Logo GAD FFB" className="w-24 h-24 object-contain rounded-2xl" />
      </div>

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3">Chi sono</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        I GAD fanno parte del Rinnovamento Carismatico Cattolico (RCC) e sono innestati nella grande famiglia
        spirituale della Fraternità Francescana di Betania (FFB). Padre Pancrazio aggiunse il santo Rosario alla
        preghiera di lode carismatica tipica dei gruppi RCC, recitato all'inizio degli incontri. Viene data
        attenzione speciale all'Eucaristia, anche attraverso quella modalità di adorazione che è chiamata Roveto
        Ardente.
      </p>
      <p className="text-gray-600 leading-relaxed mb-4">
        L'origine risale all'esperienza del Battesimo nello Spirito Santo durante il primo ritiro estivo a Camaldoli
        nel 1976. I figli spirituali di padre Pancrazio crearono diversi gruppi di preghiera sparsi in tutta Italia e
        nel Ticino denominati Gruppi Ancilla Domini per l'accentuazione mariana legata alla Santa Casa di Loreto.
      </p>
      <p className="text-gray-600 leading-relaxed mb-4">
        Nel 2007, al convegno dei Familiari della FFB a Loreto, i Gruppi Ancilla Domini sono stati riconosciuti parte
        integrante della Fraternità Francescana di Betania e inseriti nello Statuto dei Familiari della FFB.
        L'accompagnamento spirituale è affidato a fratelli e sorelle delegati dal Consiglio Generale della FFB.
      </p>
      <p className="text-gray-600 leading-relaxed mb-4">
        La cura pastorale e l'assistenza spirituale dei GAD è affidata all'Équipe Generale GAD, formata sia da
        consacrati della FFB che da laici. Dal 2022, i Gruppi Ancilla Domini sono registrati a CHARIS, l'Ufficio
        creato nel 2019 da Papa Francesco a servizio del RCC mondiale.
      </p>
      <p className="text-gray-500 text-sm mb-12">
        Documenti di riferimento: Statuto dei Familiari FFB (2007) e Istruzione sulla vita dei GAD (revisionata nel
        2025).
      </p>

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-4">Dove siamo — i nostri gruppi territoriali</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-left border-b border-gray-200">
              <th className="py-2 pr-4 font-semibold text-[var(--deep-blue)]">Gruppo</th>
              <th className="py-2 pr-4 font-semibold text-[var(--deep-blue)]">Luogo di incontro</th>
              <th className="py-2 pr-4 font-semibold text-[var(--deep-blue)]">Giorno/Ora</th>
              <th className="py-2 font-semibold text-[var(--deep-blue)]">Referente</th>
            </tr>
          </thead>
          <tbody>
            {gruppi.map((g) => (
              <tr key={g.nome} className="border-b border-gray-100 align-top">
                <td className="py-2 pr-4 font-semibold text-gray-700 whitespace-nowrap">{g.nome}</td>
                <td className="py-2 pr-4 text-gray-500">{g.luogo}</td>
                <td className="py-2 pr-4 text-gray-500 whitespace-nowrap">{g.quando}</td>
                <td className="py-2 text-gray-500">{g.referente}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <PageCta
        title="Trova il tuo gruppo di preghiera"
        text="Se non trovi un gruppo vicino a te, o vuoi saperne di più sulla Famiglia di Betania, siamo felici di aiutarti."
        primaryLabel="Contattaci"
        primaryTo="/contatti"
        secondaryLabel="Famiglia di Betania"
        secondaryTo="/famiglia-di-betania"
      />
      </section>
    </>
  )
}
