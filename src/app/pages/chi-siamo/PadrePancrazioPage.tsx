import { PageHero } from '../../components/PageHero'
import portrait from '../../../assets/padre-pancrazio/pancrazio-ffb.jpg'
import piccoloNicola from '../../../assets/padre-pancrazio/01-pancrazio-piccolo-nicola.jpg'
import convento1 from '../../../assets/padre-pancrazio/02-il-convento-1.jpg'
import convento2 from '../../../assets/padre-pancrazio/03-il-convento-2.jpg'
import pancrazio1 from '../../../assets/padre-pancrazio/04-pancrazio-1.jpg'
import votiPerpetui from '../../../assets/padre-pancrazio/05-pancrazio-voti-perpetui.jpg'
import santaCasa from '../../../assets/padre-pancrazio/pancrazio-santa-casa.jpg'
import biglietto from '../../../assets/padre-pancrazio/pp-biglietto.jpg'
import camaldoli from '../../../assets/padre-pancrazio/camaldoli-1976.jpg'
import pentecoste from '../../../assets/padre-pancrazio/pentecoste-1982-inaugurazione.jpg'

export function PadrePancrazioPage() {
  return (
    <>
      <PageHero image={portrait} title="Padre Pancrazio" subtitle="La storia del fondatore della Fraternità Francescana di Betania." />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3">Il piccolo Nicola</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Nicola Gaudioso nacque a Bari il 15 novembre 1926 in via Durazzo, sesto e ultimo figlio di Domenico Gaudioso e
        Giovanna Vavallo. Fu battezzato il 30 gennaio 1927 nella chiesa di sant'Antonio, nel rione "Madonnella".
      </p>
      <p className="text-gray-600 leading-relaxed mb-4">
        Il papà morì ancora giovane, agli inizi degli anni '30, di tumore polmonare, lasciando la giovane moglie e sei
        figli. La famiglia Gaudioso, povera ma molto dignitosa, si ritrovò a reggersi sul lavoro di mamma Giovanna,
        che cuciva abiti per la "Quarta Zona Aerea Territoriale di Bari".
      </p>
      <p className="text-gray-600 leading-relaxed mb-6">
        Il piccolo Nicola passò la sua infanzia sulle strade della Bari di quegli anni, prestando servizio alla
        parrocchia come capo dei chierichetti, sotto la guida del parroco don Antonio Carucci.
      </p>
      <img src={piccoloNicola} alt="Pancrazio da piccolo (Nicola)" className="w-56 mx-auto rounded-2xl mb-8" />

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3">In convento</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Entrò in convento a soli tredici anni, il 10 dicembre 1939, giorno dedicato alla Madonna di Loreto. Fu la
        mamma, che desiderava avere un figlio sacerdote, ad avviarlo a questa vocazione. Venne scelto l'Ordine dei
        Frati Minori Cappuccini, che per scelta di povertà non avrebbero chiesto un finanziamento.
      </p>
      <p className="text-gray-600 leading-relaxed mb-4">
        Quel giorno mise le poche cose che aveva in una federa di cuscino, che fece da sacca da viaggio. Sua mamma
        aggiunse anche la sua corona del rosario e un pezzo di pane che lui non mangiò perché aveva lo stomaco chiuso.
        Mamma Giovanna, nel salutarlo, lo affidò alla B.V. Maria con queste parole: "Buon viaggio; da ora in poi tua
        madre è la Madonna."
      </p>
      <p className="text-gray-600 leading-relaxed mb-6">
        La prima notte al convento di Barletta, il piccolo Nicola sentì la mancanza della mamma e scoppiò a piangere.
        Quella notte sognò la Vergine Maria che gli promise di essergli mamma e di aiutarlo nel cammino.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <img src={convento1} alt="Il convento" className="w-full h-48 object-cover rounded-2xl" />
        <img src={convento2} alt="Il convento" className="w-full h-48 object-cover rounded-2xl" />
      </div>

      <h3 className="text-xl font-bold text-[var(--deep-blue)] mb-3">Pancrazio</h3>
      <p className="text-gray-600 leading-relaxed mb-4">
        Dopo gli anni a Barletta, Nicola svolse il postulato a Giovinazzo (BA) e il 13 maggio 1942 entrò in noviziato
        presso il Convento di Alessano (LE), vestendo l'abito religioso come fratello laico. Gli fu dato il nome di
        Pancrazio, dal martire san Pancrazio, giovane cristiano martirizzato a quattordici anni, dal momento che lui
        era il più giovane dei novizi.
      </p>
      <p className="text-gray-600 leading-relaxed mb-6">
        Il 19 giugno 1943 fra Pancrazio emise la prima professione religiosa ad Alessano. Nel marzo del '46 venne
        trasferito provvisoriamente a Giovinazzo e da lì, il 1° aprile 1946, partì per Loreto. Il 23 novembre 1947
        emise in Santa Casa la professione perpetua.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <img src={pancrazio1} alt="Fra Pancrazio" className="w-full h-56 object-cover rounded-2xl" />
        <img src={votiPerpetui} alt="Voti perpetui" className="w-full h-56 object-cover rounded-2xl" />
      </div>

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3">Gli anni a Loreto</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Durante gli anni lauretani si occupò di varie mansioni: dal 1946 al 1959 alla custodia della Santa Casa; dal
        1960 al 1964 del refettorio della comunità cappuccina; dal 1964 al 1967 fu portinaio. Rimase nelle Marche
        trentaquattro anni: Loreto, poi Recanati, poi Civitanova Marche.
      </p>
      <img src={santaCasa} alt="P. Pancrazio Gaudioso in Santa Casa" className="w-64 mx-auto rounded-2xl mb-6" />
      <p className="text-gray-600 leading-relaxed mb-4">
        A Loreto si dedicava anche all'accoglienza dei pellegrini e dei diversi figli spirituali di san Pio da
        Pietrelcina. Il primo incontro diretto con san Pio avvenne il 1° aprile 1950, e ne divenne figlio spirituale;
        ne seguirono altri fino al 1968.
      </p>
      <blockquote className="border-l-4 border-[var(--warm-orange)] pl-4 italic text-gray-600 my-6">
        L'incontro del 20 ottobre 1959 è quello del "testamento spirituale". Fra Pancrazio, dopo una confessione,
        chiese a p. Pio un programma di vita, che il santo del Gargano gli fece consegnare dopo tre giorni, scritto a
        tergo di un'immaginetta: "Non sii talmente dedito all'attività di Marta da dimenticare il silenzio di Maria,
        la Vergine Madre che sì ben concilia l'uno e l'altro ufficio ti sia di dolce modello e d'ispirazione."
      </blockquote>
      <img
        src={biglietto}
        alt="Il biglietto scritto da San Pio a Padre Pancrazio"
        className="w-72 mx-auto rounded-2xl mb-8 shadow-md"
      />
      <p className="text-gray-600 leading-relaxed mb-8">
        Fra Pancrazio custodì questo programma di vita per circa vent'anni: sarebbe diventato il principio costitutivo
        del carisma della Fraternità Francescana di Betania. Nell'ultimo incontro con san Pio, nel luglio del 1968,
        questi disse: "Figliolo, è volontà di Dio che diventi sacerdote." Il 18 marzo 1973 fra Pancrazio venne
        ordinato sacerdote a Loreto.
      </p>

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3">La Fraternità Francescana di Betania</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        La ricerca di un forte flusso di preghiera portò p. Pancrazio ad abbracciare il movimento del Rinnovamento
        nello Spirito, riunendo i suoi figli spirituali sparsi per l'Italia e il Ticino in gruppi di preghiera, che
        chiamò Gruppi "Ancilla Domini" a motivo del tratto mariano e lauretano.
      </p>
      <img
        src={camaldoli}
        alt="Camaldoli 1976 - gruppo con padre Pancrazio"
        className="w-full max-h-72 object-cover rounded-2xl mb-6"
      />
      <p className="text-gray-600 leading-relaxed mb-4">
        Dal gruppo di Civitanova, sorto nel 1974, nacque il primo nucleo della Fraternità. Durante una preghiera in
        casa di alcuni di loro, aprendo la Bibbia uscì il passo degli Atti degli Apostoli 2, 42-47, letto come
        espressione della volontà di Dio: nacque così l'intenzione di condividere una vera "vita comune".
      </p>
      <p className="text-gray-600 leading-relaxed mb-4">
        Nel 1982, il 30 maggio, giorno di Pentecoste, nel convento di Terlizzi (BA), si insediò ufficialmente la prima
        Comunità. Nel 1983 nacque l'Associazione civile "Casa Betania"; nel 1985 il riconoscimento come Associazione
        privata di fedeli da parte di Mons. Antonio Bello; nel 1987 come Associazione pubblica di fedeli.
      </p>
      <img
        src={pentecoste}
        alt="Pentecoste 30.05.82 - Inaugurazione ufficiale FFB"
        className="w-full max-h-72 object-cover rounded-2xl mb-6"
      />
      <p className="text-gray-600 leading-relaxed mb-4">
        L'8 dicembre 1998, solennità dell'Immacolata, il Vescovo Mons. Donato Negro firmò il decreto di erezione a
        Istituto di Vita Consacrata di diritto diocesano con il nome di "Fraternità Francescana di Betania".
      </p>
      <blockquote className="border-l-4 border-[var(--warm-orange)] pl-4 italic text-gray-600 my-6">
        P. Pancrazio raccontava che, sino a quella data, ogni giorno rivolgeva a Dio questa preghiera: "Signore, se
        non è opera tua distruggila."
      </blockquote>
      <p className="text-gray-600 leading-relaxed mb-4">
        P. Pancrazio è stato Superiore Generale della Fraternità dal 1999 al 2011. È morto all'età di 89 anni la
        mattina del 3 gennaio 2016, circondato dall'affetto e dalla preghiera dei fratelli e delle sorelle.
      </p>
      <blockquote className="border-l-4 border-[var(--warm-orange)] pl-4 italic text-gray-600">
        «Siate uniti, siate uniti perché la Fraternità possa avere continuità. Non cercate un mio testamento; non ho
        fatto nessun testamento. Il mio testamento è quello di Gesù: "Siano una cosa sola". Non ho da aggiungere
        niente, vi ripeto le parole di Gesù. Non c'è testamento più bello.»
      </blockquote>
      <p className="text-gray-500 text-sm mt-4">
        Il funerale è stato celebrato nella cappella esterna della Casa di Terlizzi il 5 gennaio 2016, alla presenza
        di più di duemila persone.
      </p>
      </section>
    </>
  )
}
