import { CasaLayout } from '../../../components/CasaLayout'
import hero from '../../../../assets/case-di-fraternita/partanna/santuario-madonna-libera-1.jpg'
import santuario2 from '../../../../assets/case-di-fraternita/partanna/santuario-madonna-libera-2.jpg'
import santuario3 from '../../../../assets/case-di-fraternita/partanna/santuario-madonna-libera-3.jpg'
import messa from '../../../../assets/case-di-fraternita/partanna/messa-festa-madonna-della-libera.jpg'
import comunita2024 from '../../../../assets/case-di-fraternita/partanna/comunita-settembre-2024.png'

export function PartannaPage() {
  return (
    <CasaLayout
      nome="Partanna"
      luogo="Partanna (TP), Italia"
      anno="2005"
      note="custodia del Santuario Madonna della Libera"
      indirizzo="Via Rocco Parisi Asaro 46/B, Partanna TP (Santuario Madonna della Libera)"
      email="partanna@ffbetania.net"
      telefono="0924 88099"
      lat={37.7167}
      lng={12.8833}
      heroImage={hero}
      heroAlt="Santuario della Madonna della Libera, Partanna"
      paragrafi={[
        'La fraternità di Partanna (TP) custodisce il Santuario della Madonna della Libera. L\'edificio moderno in cemento armato a pianta ellittica fu progettato dall\'architetto Baldassare Antonimi nel 1980, in sostituzione di una chiesa ottocentesca distrutta dal terremoto: la struttura, dalla forma di due braccia che si congiungono verso il cielo in segno di preghiera, copre 650 mq ed è sostenuta da due travi alte 36 metri, e custodisce un gruppo ligneo del 1929 dello scultore Ferdinando Stuflesser.',
        'Il culto della Madonna della Libera si affermò nel XIX secolo a seguito di un episodio miracoloso legato alla liberazione di un mercante palermitano rapito dai briganti; la festa principale si celebra la prima domenica di ottobre con grande partecipazione di pellegrini. La comunità è composta da due sacerdoti, un fratello laico e sei sorelle che si prendono cura del santuario e dei pellegrini.',
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
      orari={['Festa patronale della Madonna della Libera — prima domenica di ottobre']}
    />
  )
}
