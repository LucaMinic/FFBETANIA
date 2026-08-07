import { CasaLayout } from '../../../components/CasaLayout'
import hero from '../../../../assets/case-di-fraternita/rovio/rovio-casa-betania.jpg'
import casa2 from '../../../../assets/case-di-fraternita/rovio/rovio-casa-betania-2.jpg'
import comunita from '../../../../assets/case-di-fraternita/rovio/rovio-comunita-1.jpg'
import ordinazione from '../../../../assets/case-di-fraternita/rovio/rovio-ordinazione-diaconale-2022.png'
import panoramaLago from '../../../../assets/case-di-fraternita/rovio/rovio-panorama-lago-lugano.jpg'
import pastoraleGiovanile from '../../../../assets/case-di-fraternita/rovio/rovio-pastorale-giovanile-gruppo.png'
import ingressoComunita from '../../../../assets/case-di-fraternita/rovio/rovio-ingresso-comunita-2024.png'

export function RovioPage() {
  return (
    <CasaLayout
      nome="Casa di Rovio"
      luogo="Rovio, Ticino, Svizzera"
      anno="2002"
      note="prima casa oltreconfine"
      indirizzo="Via S. Felice 6821, Rovio – Ticino CH"
      email="rovio@ffbetania.net"
      telefono="+41 91 630 65 40"
      lat={45.9167}
      lng={8.9667}
      heroImage={hero}
      heroAlt="Casa Betania, Rovio, Ticino"
      paragrafi={[
        'La Casa di Rovio, in Ticino, sui pendii del Monte Generoso con vista sul Lago di Lugano, è la prima Fraternità di Betania aperta oltre i confini italiani. La ricerca di una sede in Svizzera durò diversi anni, finché nel 2000 fu individuata a Rovio la struttura che un tempo ospitava l\'Istituto San Felice, dedicato all\'educazione dei bambini bisognosi; dopo i lavori di ristrutturazione, la casa fu inaugurata il 5 maggio 2002.',
        'Situata poco sotto il centro storico del paese, in un contesto di quiete e natura, la Fraternità è oggi un punto di riferimento spirituale per le parrocchie circostanti. Da alcuni anni la comunità propone anche "Rosario Live", la trasmissione in diretta streaming, ogni sera alle 22:00, della recita del Santo Rosario e della Compieta, che permette a chi è lontano di unirsi in preghiera con i frati e le sorelle di Rovio.',
      ]}
      galleria={[
        { src: casa2, alt: 'Casa Betania di Rovio, Ticino' },
        { src: comunita, alt: 'La comunità della Casa di Rovio' },
        { src: ordinazione, alt: 'Ordinazione diaconale alla Casa di Rovio, maggio 2022' },
        { src: panoramaLago, alt: 'Panorama del Lago di Lugano visto dalla Casa di Rovio' },
        { src: pastoraleGiovanile, alt: 'La comunità con i giovani della pastorale di Lugano' },
        { src: ingressoComunita, alt: 'Cerimonia di ingresso in comunità, autunno 2024' },
      ]}
      orari={['Rosario Live in diretta streaming ogni sera alle 22:00 — Santo Rosario e Compieta']}
    />
  )
}
