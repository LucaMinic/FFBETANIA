import { CasaLayout } from '../../../components/CasaLayout'
import hero from '../../../../assets/case-di-fraternita/roma/esterno-casa.png'
import cappella from '../../../../assets/case-di-fraternita/roma/cappella-adorazione.png'
import ingresso from '../../../../assets/case-di-fraternita/roma/ingresso-casa.png'
import tabernacolo from '../../../../assets/case-di-fraternita/roma/tabernacolo-nuova-chiesa.png'
import esterno2 from '../../../../assets/case-di-fraternita/roma/esterno-casa-2.png'
import facciata2025 from '../../../../assets/case-di-fraternita/roma/facciata-casa-2025.png'
import inaugurazione1 from '../../../../assets/case-di-fraternita/roma/inaugurazione-chiesa-2026-1.png'
import inaugurazione3 from '../../../../assets/case-di-fraternita/roma/inaugurazione-chiesa-2026-3.png'
import inaugurazione5 from '../../../../assets/case-di-fraternita/roma/inaugurazione-chiesa-2026-5.png'

export function RomaPage() {
  return (
    <CasaLayout
      nome="Roma"
      luogo="Roma, Italia"
      anno="2004"
      indirizzo="Via M. D. Brun Barbantini 151, 00123 Roma"
      email="roma@ffbetania.net"
      telefono="06 86120934"
      lat={42.0064}
      lng={12.3961}
      heroImage={hero}
      heroAlt="Casa della Fraternità Francescana di Betania a Roma"
      paragrafi={[
        'La Fraternità Francescana di Betania a Roma si presenta come "una piccola oasi di pace e tranquillità" dove fratelli e sorelle vivono in comunità, accogliendo i visitatori come famiglia religiosa e non come struttura alberghiera. Si trova alle porte di Roma, vicino alla via Cassia, a circa quindici chilometri a nord da San Pietro, facilmente raggiungibile con i mezzi pubblici (stazioni di La Storta e La Giustiniana) pur essendo immersa nel verde della campagna romana.',
        'La casa dispone di chiesa, cappella per l\'adorazione eucaristica, refettorio, cucina, camere singole e per gruppi, sale riunioni, sala ricreativa e ampio giardino. Il 18 marzo 2026, vigilia della Solennità di San Giuseppe, la fraternità ha inaugurato la nuova chiesa della casa con una celebrazione eucaristica partecipata dalle famiglie della comunità: da allora la messa domenicale, prima ospitata dalle Suore Ministre degli Infermi, si celebra direttamente nella nuova chiesa della Casa.',
      ]}
      galleria={[
        { src: cappella, alt: 'Cappella per l\'adorazione eucaristica, Casa di Roma' },
        { src: ingresso, alt: 'Ingresso della Casa di Roma' },
        { src: tabernacolo, alt: 'Tabernacolo della nuova chiesa della Casa di Roma' },
        { src: esterno2, alt: 'Esterno della Casa di Roma, altra veduta' },
        { src: facciata2025, alt: 'Facciata della Casa di Roma, 2025' },
        { src: inaugurazione1, alt: 'Inaugurazione della nuova chiesa della Casa di Roma, 2026' },
        { src: inaugurazione3, alt: 'Celebrazione per l\'inaugurazione della nuova chiesa, 2026' },
        { src: inaugurazione5, alt: 'Momento della cerimonia di inaugurazione della nuova chiesa, 2026' },
      ]}
    />
  )
}
