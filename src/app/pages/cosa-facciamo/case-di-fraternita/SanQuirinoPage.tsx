import { CasaLayout } from '../../../components/CasaLayout'
import hero from '../../../../assets/case-di-fraternita/san-quirino/san-quirino-chiesa.jpg'
import giovani from '../../../../assets/case-di-fraternita/san-quirino/san-quirino-giovani-di-betania.jpg'
import casa4 from '../../../../assets/case-di-fraternita/san-quirino/san-quirino-casa-4.jpg'
import anniversario from '../../../../assets/case-di-fraternita/san-quirino/san-quirino-25-anni-gruppo.jpg'
import vistaEvento from '../../../../assets/case-di-fraternita/san-quirino/san-quirino-vista-aerea-evento-cerchio.png'
import vistaComplesso from '../../../../assets/case-di-fraternita/san-quirino/san-quirino-vista-aerea-complesso.jpg'
import vistaChiesa from '../../../../assets/case-di-fraternita/san-quirino/san-quirino-vista-aerea-chiesa-fedeli.jpg'

export function SanQuirinoPage() {
  return (
    <CasaLayout
      nome="Casa San Quirino"
      luogo="San Quirino (PN), Italia"
      anno="1998"
      indirizzo="Via Aprilis 23, 33080 San Quirino PN"
      email="sanquirino@ffbetania.net"
      telefono="0434 91409"
      lat={45.9833}
      lng={12.6167}
      heroImage={hero}
      heroAlt="Chiesa della Fraternità Francescana di Betania, San Quirino"
      paragrafi={[
        'Nata il 30 maggio 1998, la Casa di San Quirino (PN), tra Pordenone e il Monte Cavallo, al confine tra Friuli e Veneto bellunese, è stata la prima Fraternità aperta dopo la Casa Madre di Terlizzi. Da un\'iniziale villa privata con orto, la struttura si è ampliata nel tempo con una nuova chiesa, una foresteria e un refettorio, fino a diventare "un insieme armonico e sobrio, una sorta di piccolo e grazioso villaggio" immerso nel verde.',
        'Oggi la casa è un punto di riferimento per il territorio, che accoglie ritiri e incontri di gruppi parrocchiali, movimenti ecclesiali, gruppi di preghiera, famiglie e quanti cercano silenzio e pace. Nel 2023 la comunità ha festeggiato i 25 anni di presenza, ricordando come tutto sia partito da un piccolo gruppo di 7 consacrati giunti da Terlizzi, e la nascita, proprio a San Quirino, dei "Giovani di Betania", il movimento giovanile della Fraternità.',
      ]}
      galleria={[
        { src: giovani, alt: 'Attività dei Giovani di Betania a San Quirino' },
        { src: casa4, alt: 'Scorcio della Casa di San Quirino' },
        { src: anniversario, alt: '25 anni della Casa di San Quirino, festeggiamenti 2023' },
        { src: vistaEvento, alt: 'Vista aerea di un evento comunitario a San Quirino' },
        { src: vistaComplesso, alt: 'Vista aerea del complesso della Casa di San Quirino' },
        { src: vistaChiesa, alt: 'Vista aerea della chiesa con i fedeli a San Quirino' },
      ]}
    />
  )
}
