import { PageHero } from '../../components/PageHero'
import { PageCta } from '../../components/PageCta'
import pentecoste from '../../../assets/padre-pancrazio/pentecoste-1982-inaugurazione.jpg'
import camaldoli from '../../../assets/padre-pancrazio/camaldoli-1976.jpg'
import casaMadreStorica from '../../../assets/case-di-fraternita/terlizzi/casa-madre-terlizzi-2005-storica.jpg'
import sanQuirino from '../../../assets/case-di-fraternita/san-quirino/san-quirino-casa-4.jpg'
import cellaDiNoceto from '../../../assets/case-di-fraternita/cella-di-noceto/casa-cella-di-noceto-esterno.jpeg'
import aschaffenburg from '../../../assets/case-di-fraternita/aschaffenburg/convento-aschaffenburg-1.jpg'
import asiloSalvador from '../../../assets/case-di-fraternita/salvador-de-bahia/asilo-nossa-senhora-aparecida.jpg'
import conventoBarana from '../../../assets/case-di-fraternita/verona/convento-barana-1.jpg'
import eremoLeggiuno from '../../../assets/case-di-fraternita/leggiuno/eremo-santa-caterina-del-sasso-1.jpg'

interface Milestone {
  date: string
  text: string
  img?: string
  imgAlt?: string
}

const milestones: Milestone[] = [
  { date: '1973', text: 'Fra Pancrazio viene ordinato sacerdote e trasferito a Civitanova Marche.' },
  {
    date: '1975',
    text: 'P. Pancrazio fonda alcuni gruppi di preghiera, all\'interno dei quali nasce l\'esigenza e il desiderio di una forma stabile di vita fraterna.',
    img: camaldoli,
    imgAlt: 'Camaldoli 1976 - gruppo con padre Pancrazio',
  },
  {
    date: '1982',
    text: 'Nel giorno di Pentecoste a Terlizzi (BA), con un primo piccolo gruppo di sorelle, incomincia l\'esperienza di vita comune.',
    img: pentecoste,
    imgAlt: 'Pentecoste 30.05.82 - Inaugurazione ufficiale FFB',
  },
  {
    date: '8 dicembre 1998',
    text: 'L\'Associazione di fedeli "Casa Betania" diviene Istituto di vita consacrata con il nome di "Fraternità Francescana di Betania".',
    img: casaMadreStorica,
    imgAlt: 'Casa Madre di Terlizzi',
  },
  {
    date: '14 novembre 2006',
    text: 'Si apre il Giubileo della Fraternità per il venticinquesimo anno di fondazione, chiuso il 10 dicembre 2007.',
  },
  {
    date: '1998-2002',
    text: 'Il 30 maggio 1998 apre la Casa di San Quirino (PN); il 5 maggio 2002 la prima Casa oltreconfine a Rovio (Ticino, Svizzera); inizia la presenza a Loreto.',
    img: sanQuirino,
    imgAlt: 'Casa San Quirino',
  },
  {
    date: '2004-2007',
    text: 'Aprono le Case di Cella di Noceto (PR) e Roma (2004); custodia del Santuario della Madonna della Libera a Partanna (2005) e del Santuario di Santa Maria delle Vertighe a Monte San Savino (2007).',
    img: cellaDiNoceto,
    imgAlt: 'Casa di Cella di Noceto',
  },
  {
    date: '2009',
    text: '50° anniversario del programma di vita donato da p. Pio: mandato missionario ai primi 5 membri per Würzburg, Germania (dal 2013 ad Aschaffenburg).',
    img: aschaffenburg,
    imgAlt: 'Convento di Aschaffenburg',
  },
  {
    date: '10 ottobre 2012',
    text: 'Mandato missionario ai primi 10 missionari per Salvador de Bahia, Brasile. Il 12 ottobre 2014 inaugurazione dell\'Asilo Nossa Senhora Aparecida.',
    img: asiloSalvador,
    imgAlt: 'Asilo Nossa Senhora Aparecida - Salvador de Bahia',
  },
  {
    date: '6 ottobre 2013',
    text: 'Presa di possesso del Convento del Barana, a Verona.',
    img: conventoBarana,
    imgAlt: 'Convento del Barana - Verona',
  },
  {
    date: '1 aprile 2019',
    text: 'Custodia e animazione pastorale dell\'Eremo di Santa Caterina del Sasso, a Leggiuno (VA).',
    img: eremoLeggiuno,
    imgAlt: 'Eremo di Santa Caterina del Sasso - Leggiuno',
  },
  { date: '2022', text: '40° anniversario della Fraternità Francescana di Betania.' },
  { date: '18 maggio 2023', text: 'Nomina del nuovo Governo generale della Fraternità Francescana di Betania.' },
]

export function StoriaPage() {
  return (
    <>
      <PageHero
        image={pentecoste}
        title="La nostra storia"
        subtitle="Dalla prima comunità del 1982 a oggi: le tappe della Fraternità."
        imageAlt="Pentecoste 30.05.82 - Inaugurazione ufficiale FFB"
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <ol className="relative border-l-2 border-[var(--beige-dark)] pl-6 space-y-8 mb-16">
        {milestones.map((m) => (
          <li key={m.date} className="relative">
            <span className="absolute -left-[31px] top-1 w-3 h-3 rounded-full bg-[var(--warm-orange)]" />
            <div className={m.img ? 'sm:flex sm:items-center sm:gap-6' : undefined}>
              <div className="flex-1">
                <p className="font-bold text-[var(--deep-blue)]">{m.date}</p>
                <p className="text-gray-600 leading-relaxed">{m.text}</p>
              </div>
              {m.img && (
                <img
                  src={m.img}
                  alt={m.imgAlt}
                  className="w-full sm:w-40 h-28 object-cover rounded-xl shadow-sm mt-3 sm:mt-0 shrink-0"
                />
              )}
            </div>
          </li>
        ))}
      </ol>

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-4">Governo generale della Fraternità</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        In seguito al V Capitolo Generale Ordinario, vissuto nel mese di maggio 2023, il governo generale della FFB è
        composto da:
      </p>
      <ul className="text-gray-600 space-y-1">
        <li>fra Angelo Tolardo — Ministro generale</li>
        <li>fra Gregorio Merendino — Vicario generale</li>
        <li>sor. Sarah Zanoni — consigliera generale</li>
        <li>fra Antonio Surano — consigliere generale</li>
        <li>sor. Maria Francesca Gavirati — consigliera generale</li>
      </ul>

      <PageCta
        title="Vuoi saperne di più sul nostro fondatore?"
        text="Scopri la vita di Padre Pancrazio Gaudioso e il carisma che ha dato origine alla nostra Fraternità."
        primaryLabel="Padre Pancrazio"
        primaryTo="/chi-siamo/padre-pancrazio"
        secondaryLabel="Il nostro carisma"
        secondaryTo="/chi-siamo/carisma"
      />
      </section>
    </>
  )
}
