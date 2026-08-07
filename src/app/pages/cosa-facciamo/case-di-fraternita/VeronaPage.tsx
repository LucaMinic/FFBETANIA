import { CasaLayout } from '../../../components/CasaLayout'
import hero from '../../../../assets/case-di-fraternita/verona/convento-barana-1.jpg'
import barana2 from '../../../../assets/case-di-fraternita/verona/convento-barana-2.jpg'
import barana3 from '../../../../assets/case-di-fraternita/verona/convento-barana-3.jpg'
import mensa from '../../../../assets/case-di-fraternita/verona/mensa-convento-barana.png'
import internoChiesa from '../../../../assets/case-di-fraternita/verona/interno-chiesa-barana.png'
import comunitaGesuBambino from '../../../../assets/case-di-fraternita/verona/comunita-verona-gesu-bambino.png'
import esternoChiesa from '../../../../assets/case-di-fraternita/verona/esterno-chiesa-convento-barana.png'

export function VeronaPage() {
  return (
    <CasaLayout
      nome="Verona"
      luogo="Verona, Italia"
      anno="2013"
      note="Convento del Barana"
      indirizzo="Via Colonnello Fincato 35, 37131 Verona"
      email="verona@ffbetania.net"
      telefono="045 525374"
      lat={45.4384}
      lng={10.9916}
      heroImage={hero}
      heroAlt="Convento del Barana, Fraternità Francescana di Betania, Verona"
      paragrafi={[
        'La Fraternità Francescana di Betania si è insediata a Verona nel 2013; il convento è conosciuto in città anche come "Convento del Barana" ed era stato custodito per oltre un secolo dai Frati Cappuccini prima del suo arrivo. La comunità si trova in una zona strategica della città, a pochi chilometri dal centro storico e nei pressi della Valpantena.',
        'Una delle caratteristiche peculiari della Fraternità di Verona è il servizio ai bisognosi: gestisce la mensa del povero più importante della città, aperta tutti i giorni dell\'anno, con servizio docce, distribuzione di vestiario e di pacchi alimentari alle famiglie povere e un mercatino dell\'usato — tutto reso possibile dall\'Associazione Betania Francescana, che riunisce centinaia di volontari attivi 365 giorni l\'anno. Il convento è da sempre chiamato anche "il confessionale di Verona", per la costante disponibilità dei frati al Sacramento della Riconciliazione; la Fraternità offre inoltre percorsi spirituali attraverso i gruppi Ancilla Domini, il cammino degli Oblati, i Giovani di Betania e il Gruppo Nazareth.',
      ]}
      galleria={[
        { src: barana2, alt: 'Vita della fraternità di Verona' },
        { src: barana3, alt: 'Vita della fraternità di Verona' },
        { src: mensa, alt: 'Mensa dei poveri, Convento del Barana, Verona' },
        { src: internoChiesa, alt: 'Interno della chiesa del Convento del Barana' },
        { src: comunitaGesuBambino, alt: 'La comunità di Verona con la statuina di Gesù Bambino' },
        { src: esternoChiesa, alt: 'Veduta esterna della chiesa del Convento del Barana' },
      ]}
      orari={[
        'Mensa dei poveri — aperta tutti i giorni dell\'anno',
        'Distribuzione pacchi alimentari — due venerdì al mese',
        '"Vangelo in pillole" — rubrica quotidiana di commento al Vangelo su YouTube',
      ]}
    />
  )
}
