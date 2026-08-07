import { CasaLayout } from '../../../components/CasaLayout'
import hero from '../../../../assets/case-di-fraternita/cella-di-noceto/casa-cella-di-noceto-esterno.jpeg'
import chiesa from '../../../../assets/case-di-fraternita/cella-di-noceto/chiesa-annunciazione.jpg'
import chiostro from '../../../../assets/case-di-fraternita/cella-di-noceto/chiostro-superiore.jpg'
import sanPio from '../../../../assets/case-di-fraternita/cella-di-noceto/statua-san-pio.jpg'
import vitaFraterna1 from '../../../../assets/case-di-fraternita/cella-di-noceto/vita-fraterna-1.jpg'
import vitaFraterna2 from '../../../../assets/case-di-fraternita/cella-di-noceto/vita-fraterna-2.jpg'

export function CellaDiNocetoPage() {
  return (
    <CasaLayout
      nome="Cella di Noceto"
      luogo="Cella di Noceto (PR), Italia"
      anno="2004"
      note="unico edificio costruito interamente dalla Fraternità"
      indirizzo="Via S. Pio da Pietrelcina 3, 43015 Cella di Noceto PR"
      email="cella.noceto@ffbetania.net"
      telefono="0521 624 052"
      lat={44.7833}
      lng={10.1167}
      heroImage={hero}
      heroAlt="Casa di Cella di Noceto"
      paragrafi={[
        'La fraternità di Cella si trova in provincia di Parma ed è stata fondata il 19 settembre 2004. È l\'unico edificio costruito interamente dalla Fraternità e ha una particolare pianta a forma di "Tau". La struttura centrale ospita la chiesa dell\'Annunciazione, dove circa duecento persone partecipano alla messa domenicale; il complesso include refettorio, sale d\'incontro, un salone e circa trenta camere per ospiti.',
        'La casa è oggi un "polo di spiritualità per la diocesi di Parma" e luogo di ritiri per gruppi e singoli. Dopo essere stata per vent\'anni casa di noviziato, dal settembre 2023 ospita la tappa di formazione dell\'aspirandato/postulato: vi risiedono circa 30 persone consacrate e formande, oltre a una famiglia oblata interna.',
      ]}
      galleria={[
        { src: chiesa, alt: 'Chiesa dell\'Annunciazione, Cella di Noceto' },
        { src: chiostro, alt: 'Chiostro superiore della Casa di Cella di Noceto' },
        { src: sanPio, alt: 'Statua di San Pio nella Casa di Cella di Noceto' },
        { src: vitaFraterna1, alt: 'Momento di vita fraterna nella Casa di Cella di Noceto' },
        { src: vitaFraterna2, alt: 'Momento di vita fraterna nella Casa di Cella di Noceto' },
      ]}
      orari={[
        'Santa Messa domenicale — con la partecipazione di circa 200 persone',
        'Ritiri spirituali per gruppi e singoli, su richiesta',
      ]}
    />
  )
}
