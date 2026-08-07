import { CasaLayout } from '../../../components/CasaLayout'
import hero from '../../../../assets/case-di-fraternita/loreto/loreto-casa-1.jpg'
import cupola from '../../../../assets/case-di-fraternita/loreto/loreto-casa-cupola-santuario.jpg'
import membri from '../../../../assets/case-di-fraternita/loreto/loreto-tutti-i-membri.jpg'
import messa from '../../../../assets/case-di-fraternita/loreto/loreto-santa-messa.jpg'
import fratelliCappuccini from '../../../../assets/case-di-fraternita/loreto/loreto-comunita-fratelli-cappuccini.jpg'
import consiglioPastorale from '../../../../assets/case-di-fraternita/loreto/loreto-consiglio-pastorale.jpg'

export function LoretoPage() {
  return (
    <CasaLayout
      nome="Loreto"
      luogo="Loreto (AN), Italia"
      anno="2002"
      note="presso la Parrocchia Santa Casa"
      indirizzo="Piazza Porta Marina 3, 60025 Loreto AN"
      email="loreto@ffbetania.net"
      telefono="350 040 7489"
      lat={43.4396}
      lng={13.6106}
      heroImage={hero}
      heroAlt="Casa della Fraternità Francescana di Betania a Loreto"
      paragrafi={[
        'La presenza della Fraternità Francescana di Betania a Loreto (AN) inizia nel 2002, con un servizio svolto presso la canonica della Parrocchia della Santa Casa. La casa sorge alle spalle del Santuario che custodisce il tesoro della Santa Casa, affidato alla cura dei frati Cappuccini — "fratelli maggiori" particolarmente cari alla Fraternità, poiché appartenenti allo stesso ordine del fondatore, padre Pancrazio — e occupa parte di un complesso di edifici delle Suore della Carità di Nostra Signora, Rifugio di San Giuseppe.',
        'La giornata della comunità è scandita da un\'intensa vita di preghiera: Rosario e Ufficio delle Letture al mattino, le Lodi, il Rosario e i Vespri nel pomeriggio presso la Parrocchia della Natività, la Santa Messa delle 19:00 e, a chiudere la giornata, il Rosario e la Compieta delle 22:00, cui si aggiungono veglie notturne il mercoledì, il venerdì e la domenica. Ogni anno, inoltre, Loreto accoglie il Convegno dei Familiari di Betania, un appuntamento a cui padre Pancrazio era particolarmente legato proprio per la presenza della Santa Casa.',
      ]}
      galleria={[
        { src: cupola, alt: 'Casa di Loreto con la cupola del Santuario sullo sfondo' },
        { src: membri, alt: 'La comunità di Loreto al completo' },
        { src: messa, alt: 'Santa Messa della comunità di Loreto' },
        { src: fratelliCappuccini, alt: 'La comunità di Loreto con i frati Cappuccini' },
        { src: consiglioPastorale, alt: 'Incontro del Consiglio Pastorale nella Casa di Loreto' },
      ]}
      orari={[
        'Rosario e Ufficio delle Letture — al mattino',
        'Lodi, Rosario e Vespri — nel pomeriggio, presso la Parrocchia della Natività',
        'Santa Messa — ore 19:00',
        'Rosario e Compieta — ore 22:00',
        'Veglia notturna — mercoledì, venerdì e domenica',
      ]}
    />
  )
}
