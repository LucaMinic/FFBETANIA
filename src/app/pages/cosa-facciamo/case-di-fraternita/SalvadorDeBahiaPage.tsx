import { CasaLayout } from '../../../components/CasaLayout'
import hero from '../../../../assets/case-di-fraternita/salvador-de-bahia/convento-salvador-esterno.jpg'
import comunita from '../../../../assets/case-di-fraternita/salvador-de-bahia/comunita-salvador-1.jpg'
import preghiera from '../../../../assets/case-di-fraternita/salvador-de-bahia/momento-preghiera-salvador.jpg'
import asilo from '../../../../assets/case-di-fraternita/salvador-de-bahia/asilo-nossa-senhora-aparecida.jpg'
import giardino from '../../../../assets/case-di-fraternita/salvador-de-bahia/giardino-tropicale-convento-salvador.jpg'
import bambiniBandiera from '../../../../assets/case-di-fraternita/salvador-de-bahia/bambini-asilo-bandiera-italiana.png'
import visitaMattarella from '../../../../assets/case-di-fraternita/salvador-de-bahia/visita-presidente-mattarella.png'

export function SalvadorDeBahiaPage() {
  return (
    <CasaLayout
      nome="Salvador de Bahia"
      luogo="Salvador de Bahia, Brasile"
      anno="2012"
      note="con Asilo Nossa Senhora Aparecida (2014)"
      indirizzo="Rod. BA 526 n. 1672, Bairro São Cristóvão, 41510 Salvador de Bahia"
      email="salvador@ffbetania.net"
      telefono="+55 71 8249 1713"
      lat={-12.9777}
      lng={-38.5016}
      heroImage={hero}
      heroAlt="Fraternità Francescana di Betania a Salvador de Bahia, Brasile"
      paragrafi={[
        'Il 12 ottobre, festa di Nossa Senhora Aparecida, iniziò l\'avventura missionaria della Fraternità Francescana di Betania in Brasile, nella regione della Bahia. Il Progetto Brasile nasce dal desiderio del fondatore, Padre Pancrazio, di realizzare un centro di accoglienza per i giovani delle favelas in gravi situazioni di disagio, offrendo loro formazione alla luce del Vangelo e nello spirito della Fraternità.',
        'La comunità è nata nella città di Salvador de Bahia, nel complesso di quartieri intorno al Bairro di São Cristóvão, vicino all\'aeroporto internazionale: una zona che ospita circa 200.000 abitanti in condizioni di disagio sociale, con una popolazione giovane — il 70% ha meno di 25 anni — segnata da povertà diffusa. Per rispondere a questa realtà è stata costruita una scuola per l\'infanzia, la "creche", che accoglie gratuitamente circa 120 bambini, sostenuta dai benefattori della Fraternità, con l\'obiettivo di offrire loro non solo un\'educazione scolastica di alto livello ma anche valori, capacità relazionali e competenze culturali, coinvolgendo anche le famiglie.',
      ]}
      galleria={[
        { src: comunita, alt: 'Vita della comunità FFB di Salvador de Bahia' },
        { src: preghiera, alt: 'Momento di preghiera della fraternità di Salvador de Bahia' },
        { src: asilo, alt: 'Asilo Nossa Senhora Aparecida, Salvador de Bahia' },
        { src: giardino, alt: 'Il giardino tropicale del convento di Salvador de Bahia' },
        { src: bambiniBandiera, alt: 'Bambini dell\'asilo con la bandiera italiana' },
        { src: visitaMattarella, alt: 'Visita del Presidente della Repubblica Sergio Mattarella alla comunità' },
      ]}
      orari={['Asilo Nossa Senhora Aparecida — pasti dalle 7:30 alle 16:30, dal lunedì al venerdì']}
    />
  )
}
