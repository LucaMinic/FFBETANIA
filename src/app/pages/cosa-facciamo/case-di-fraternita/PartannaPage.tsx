import { CasaLayout } from '../../../components/CasaLayout'
import { useT } from '../../../context/LanguageContext'
import hero from '../../../../assets/case-di-fraternita/partanna/santuario-madonna-libera-1.jpg'
import santuario2 from '../../../../assets/case-di-fraternita/partanna/santuario-madonna-libera-2.jpg'
import santuario3 from '../../../../assets/case-di-fraternita/partanna/santuario-madonna-libera-3.jpg'
import messa from '../../../../assets/case-di-fraternita/partanna/messa-festa-madonna-della-libera.jpg'
import comunita2024 from '../../../../assets/case-di-fraternita/partanna/comunita-settembre-2024.png'

export function PartannaPage() {
  const t = useT()
  return (
    <CasaLayout
      nome="Partanna"
      luogo={t({ it: 'Partanna (TP), Italia', en: 'Partanna (TP), Italy', de: 'Partanna (TP), Italien', pt: 'Partanna (TP), Itália' })}
      anno="2005"
      note={t({
        it: 'custodia del Santuario Madonna della Libera',
        en: 'custodianship of the Shrine of the Madonna della Libera',
        de: 'Obhut über das Heiligtum Madonna della Libera',
        pt: 'guarda do Santuário Madonna della Libera',
      })}
      indirizzo="Via Rocco Parisi Asaro 46/B, Partanna TP (Santuario Madonna della Libera)"
      email="partanna@ffbetania.net"
      telefono="0924 88099"
      lat={37.7167}
      lng={12.8833}
      heroImage={hero}
      heroAlt="Santuario della Madonna della Libera, Partanna"
      paragrafi={[
        t({
          it: "La fraternità di Partanna (TP) custodisce il Santuario della Madonna della Libera. L'edificio moderno in cemento armato a pianta ellittica fu progettato dall'architetto Baldassare Antonimi nel 1980, in sostituzione di una chiesa ottocentesca distrutta dal terremoto: la struttura, dalla forma di due braccia che si congiungono verso il cielo in segno di preghiera, copre 650 mq ed è sostenuta da due travi alte 36 metri, e custodisce un gruppo ligneo del 1929 dello scultore Ferdinando Stuflesser.",
          en: 'The fraternity of Partanna (TP) cares for the Shrine of the Madonna della Libera. The modern reinforced-concrete building with an elliptical plan was designed by architect Baldassare Antonimi in 1980, replacing a 19th-century church destroyed by the earthquake: the structure, shaped like two arms joining towards the sky in a gesture of prayer, covers 650 square meters and is supported by two 36-meter-high beams, and houses a 1929 wooden sculpture group by Ferdinando Stuflesser.',
          de: 'Die Fraternität von Partanna (TP) betreut das Heiligtum der Madonna della Libera. Das moderne Stahlbetongebäude mit elliptischem Grundriss wurde 1980 vom Architekten Baldassare Antonimi entworfen, als Ersatz für eine im 19. Jahrhundert erbaute, durch das Erdbeben zerstörte Kirche: Die Struktur, geformt wie zwei sich zum Himmel hin im Gebet vereinende Arme, erstreckt sich über 650 Quadratmeter und wird von zwei 36 Meter hohen Trägern gestützt; sie birgt eine 1929 entstandene Holzskulpturengruppe des Bildhauers Ferdinando Stuflesser.',
          pt: 'A fraternidade de Partanna (TP) guarda o Santuário da Madonna della Libera. O edifício moderno em concreto armado de planta elíptica foi projetado pelo arquiteto Baldassare Antonimi em 1980, em substituição a uma igreja oitocentista destruída pelo terremoto: a estrutura, com a forma de dois braços que se unem em direção ao céu em sinal de oração, cobre 650 m² e é sustentada por duas vigas de 36 metros de altura, e guarda um grupo escultórico em madeira de 1929 do escultor Ferdinando Stuflesser.',
        }),
        t({
          it: 'Il culto della Madonna della Libera si affermò nel XIX secolo a seguito di un episodio miracoloso legato alla liberazione di un mercante palermitano rapito dai briganti; la festa principale si celebra la prima domenica di ottobre con grande partecipazione di pellegrini. La comunità è composta da due sacerdoti, un fratello laico e sei sorelle che si prendono cura del santuario e dei pellegrini.',
          en: 'Devotion to the Madonna della Libera took hold in the 19th century following a miraculous event linked to the liberation of a Palermo merchant kidnapped by bandits; the main feast is celebrated on the first Sunday of October with a large gathering of pilgrims. The community is made up of two priests, one lay brother and six sisters who care for the shrine and its pilgrims.',
          de: 'Die Verehrung der Madonna della Libera setzte sich im 19. Jahrhundert nach einem wundersamen Ereignis durch, das mit der Befreiung eines von Banditen entführten Kaufmanns aus Palermo zusammenhängt; das Hauptfest wird am ersten Sonntag im Oktober mit großer Pilgerbeteiligung gefeiert. Die Gemeinschaft besteht aus zwei Priestern, einem Laienbruder und sechs Schwestern, die sich um das Heiligtum und die Pilger kümmern.',
          pt: 'O culto da Madonna della Libera afirmou-se no século XIX após um episódio milagroso ligado à libertação de um mercador palermitano raptado por bandidos; a festa principal celebra-se no primeiro domingo de outubro com grande participação de peregrinos. A comunidade é composta por dois sacerdotes, um irmão leigo e seis irmãs que cuidam do santuário e dos peregrinos.',
        }),
      ]}
      galleria={[
        { src: santuario2, alt: 'Santuario della Madonna della Libera, Partanna' },
        { src: santuario3, alt: 'Interno del Santuario della Madonna della Libera' },
        {
          src: messa,
          alt: 'Messa del 2 ottobre presieduta da Padre Pancrazio nel giorno della festa della Madonna della Libera, 2005',
        },
        { src: comunita2024, alt: 'La comunità della Casa di Partanna, settembre 2024' },
      ]}
      orari={[
        t({
          it: 'Festa patronale della Madonna della Libera — prima domenica di ottobre',
          en: 'Patronal feast of the Madonna della Libera — first Sunday of October',
          de: 'Patronatsfest der Madonna della Libera — erster Sonntag im Oktober',
          pt: 'Festa padroeira da Madonna della Libera — primeiro domingo de outubro',
        }),
      ]}
    />
  )
}
