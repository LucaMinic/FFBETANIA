import { PageHero } from '../../components/PageHero'
import heroImg from '../../../assets/cosa-facciamo/case-di-fraternita-hero.jpg'

interface Casa {
  nome: string
  luogo: string
  anno: string
  note?: string
}

const case_: Casa[] = [
  { nome: 'Casa Madre', luogo: 'Terlizzi (BA), Italia', anno: '1982', note: 'Curia Generalizia, sede legale' },
  { nome: 'Casa San Quirino', luogo: 'San Quirino (PN), Italia', anno: '1998' },
  { nome: 'Casa di Rovio', luogo: 'Rovio, Ticino, Svizzera', anno: '2002', note: 'prima casa oltreconfine' },
  { nome: 'Loreto', luogo: 'Loreto (AN), Italia', anno: '2002', note: 'presso la Parrocchia Santa Casa' },
  { nome: 'Cella di Noceto', luogo: 'Cella di Noceto (PR), Italia', anno: '2004' },
  { nome: 'Roma', luogo: 'Roma, Italia', anno: '2004' },
  { nome: 'Partanna', luogo: 'Partanna (TP), Italia', anno: '2005', note: 'custodia Santuario Madonna della Libera' },
  {
    nome: 'Monte San Savino',
    luogo: 'Monte San Savino (AR), Italia',
    anno: '2007',
    note: 'custodia Santuario Santa Maria delle Vertighe',
  },
  { nome: 'Aschaffenburg', luogo: 'Aschaffenburg, Germania', anno: '2013', note: 'ex convento Frati Minori Cappuccini' },
  {
    nome: 'Salvador de Bahia',
    luogo: 'Salvador de Bahia, Brasile',
    anno: '2012',
    note: 'con Asilo Nossa Senhora Aparecida (2014)',
  },
  { nome: 'Verona', luogo: 'Verona, Italia', anno: '2013', note: 'Convento del Barana' },
  { nome: 'Leggiuno', luogo: 'Leggiuno (VA), Italia', anno: '2019', note: "custodia Eremo di Santa Caterina del Sasso" },
]

export function CaseDiFraternitaPage() {
  return (
    <>
      <PageHero
        image={heroImg}
        title="Dove siamo"
        subtitle="Le nostre Case: oasi spirituali aperte a tutti, in Italia e nel mondo."
        imageAlt="Casa Madre di Terlizzi"
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <p className="text-gray-600 leading-relaxed mb-4">
        Le nostre Case sono chiamate ad essere delle "oasi spirituali" dove gli uomini e le donne di oggi possano
        ritrovare un sincero rapporto con Dio e con i fratelli. Chi viene a Betania non rimane spettatore perché la
        Fraternità apre le sue porte a tutti coloro che desiderano fare esperienza della nostra vita.
      </p>

      <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-6 text-center mb-12">
        <p className="text-gray-500 text-sm">
          La mappa interattiva con i dettagli di ogni singola Casa sarà disponibile a breve. Nel frattempo, ecco
          l'elenco delle nostre Case e Missioni:
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {case_.map((c) => (
          <div key={c.nome} className="rounded-2xl border border-gray-100 p-5">
            <h3 className="font-bold text-[var(--deep-blue)]">{c.nome}</h3>
            <p className="text-sm text-gray-600">{c.luogo}</p>
            <p className="text-xs text-gray-400 mt-1">
              dal {c.anno}
              {c.note ? ` — ${c.note}` : ''}
            </p>
          </div>
        ))}
      </div>
      </section>
    </>
  )
}
