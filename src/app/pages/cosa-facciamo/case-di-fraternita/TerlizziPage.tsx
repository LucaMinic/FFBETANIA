import { CasaLayout } from '../../../components/CasaLayout'
import hero from '../../../../assets/case-di-fraternita/terlizzi/casa-madre-terlizzi-panoramica.jpg'
import sanPio from '../../../../assets/case-di-fraternita/terlizzi/casa-madre-terlizzi-statua-san-pio-giardino.jpg'
import comunita from '../../../../assets/case-di-fraternita/terlizzi/casa-madre-terlizzi-comunita.jpg'
import storica from '../../../../assets/case-di-fraternita/terlizzi/casa-madre-terlizzi-2005-storica.jpg'
import vistaAerea from '../../../../assets/case-di-fraternita/terlizzi/casa-madre-terlizzi-vista-aerea-cortile.jpg'
import comunitaMare from '../../../../assets/case-di-fraternita/terlizzi/casa-madre-terlizzi-comunita-mare-2025.png'

export function TerlizziPage() {
  return (
    <CasaLayout
      nome="Casa Madre"
      luogo="Terlizzi (BA), Italia"
      anno="1982"
      note="Curia Generalizia, sede legale"
      indirizzo="Via Pasquale Fiore 143, 70038 Terlizzi BA"
      email="terlizzi@ffbetania.net"
      telefono="080 351 77 12"
      lat={41.1327}
      lng={16.5327}
      heroImage={hero}
      heroAlt="Casa Madre della Fraternità Francescana di Betania, Terlizzi"
      paragrafi={[
        'Terlizzi (BA) è la Casa Madre della Fraternità Francescana di Betania: qui, il 30 maggio 1982, giorno di Pentecoste, padre Pancrazio Nicola Gaudioso diede inizio alla vita comune insieme alle prime quattro sorelle. Oggi, a oltre quarant\'anni da quella prima Pentecoste, la casa ospita una sessantina di persone tra consacrati e laici ed è sede della Curia Generalizia dell\'Istituto.',
        'Le giornate sono scandite da momenti di preghiera comunitaria e personale che trovano il loro culmine nella celebrazione della Santa Messa, per concludersi con il Santo Rosario, la Compieta e, in alcuni giorni, la veglia notturna. Le porte della Fraternità restano sempre aperte a chi desidera condividere momenti di preghiera, lavoro e vita fraterna.',
        'Accanto alla vita spirituale, la comunità è quotidianamente impegnata in attività di solidarietà: la gestione di una mensa per i più bisognosi, il sostegno alle famiglie in difficoltà e la raccolta e distribuzione di generi di prima necessità, proseguite negli anni anche attraverso il progetto "Accoglienza in Dispensa".',
      ]}
      galleria={[
        { src: sanPio, alt: 'Statua di San Pio nel giardino della Casa Madre di Terlizzi' },
        { src: comunita, alt: 'La comunità della Casa Madre di Terlizzi' },
        { src: storica, alt: 'Foto storica del 2005 della Casa Madre di Terlizzi' },
        { src: vistaAerea, alt: 'Vista aerea del cortile della Casa Madre di Terlizzi' },
        { src: comunitaMare, alt: 'La comunità della Casa Madre in gita al mare, 2025' },
      ]}
      orari={[
        'Preghiera comunitaria e Santa Messa quotidiana',
        'Santo Rosario e Compieta',
        'Veglia di preghiera notturna, in alcuni giorni della settimana',
      ]}
    />
  )
}
