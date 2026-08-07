import { CasaLayout } from '../../../components/CasaLayout'
import hero from '../../../../assets/case-di-fraternita/monte-san-savino/casa-struttura.jpg'
import struttura2 from '../../../../assets/case-di-fraternita/monte-san-savino/casa-struttura-2.jpg'
import interno from '../../../../assets/case-di-fraternita/monte-san-savino/interno-santuario-vertighe.jpg'
import dipinto from '../../../../assets/case-di-fraternita/monte-san-savino/dipinto-madonna-delle-vertighe.jpg'
import struttura3 from '../../../../assets/case-di-fraternita/monte-san-savino/casa-struttura-3.jpg'

export function MonteSanSavinoPage() {
  return (
    <CasaLayout
      nome="Monte San Savino"
      luogo="Monte San Savino (AR), Italia"
      anno="2007"
      note="custodia del Santuario Santa Maria delle Vertighe"
      indirizzo="Via S. Pio da Pietrelcina 3, 52048 Monte San Savino AR"
      email="vertighe@ffbetania.net"
      telefono="0575 849 326"
      lat={43.3333}
      lng={11.7167}
      heroImage={hero}
      heroAlt="Fraternità delle Vertighe, Monte San Savino"
      paragrafi={[
        'La Fraternità delle Vertighe di Monte San Savino (AR) è stata inaugurata il 5 maggio 2007. Su invito dell\'arcivescovo Bassetti, padre Pancrazio ha accolto il compito di custodire pastoralmente e materialmente il Santuario di Santa Maria delle Vertighe, luogo di pellegrinaggio e di riconciliazione con Dio. La comunità svolge accoglienza spirituale, sostegno alle famiglie in difficoltà e collaborazione con le realtà sociali del territorio, condividendo il cammino con laici della "Famiglia di Betania" e volontari.',
        'Il santuario, il più antico santuario mariano della diocesi di Arezzo-Cortona-Sansepolcro, ha origini datate tra il 1000 e il 1100: la tradizione narra la traslazione miracolosa di un\'intera cappella dal comune di Asciano il 7 luglio 1100. La chiesa attuale, a tre navate, risale all\'inizio del \'500 e custodisce opere di Margaritone d\'Arezzo, Lorenzo Monaco e Ridolfo del Ghirlandaio; nel 1964 la Madonna delle Vertighe è stata proclamata Patrona dell\'Autostrada del Sole.',
      ]}
      galleria={[
        { src: struttura2, alt: 'Fraternità delle Vertighe, Monte San Savino' },
        { src: interno, alt: 'Interno del Santuario di Santa Maria delle Vertighe' },
        { src: dipinto, alt: 'Dipinto della Madonna delle Vertighe' },
        { src: struttura3, alt: 'La struttura della Fraternità delle Vertighe' },
      ]}
    />
  )
}
