import { CasaLayout } from '../../../components/CasaLayout'
import hero from '../../../../assets/case-di-fraternita/leggiuno/eremo-santa-caterina-del-sasso-1.jpg'
import eremo3 from '../../../../assets/case-di-fraternita/leggiuno/eremo-santa-caterina-del-sasso-3.jpg'
import componenti from '../../../../assets/case-di-fraternita/leggiuno/componenti-fraternita-eremo.jpg'
import veduta from '../../../../assets/case-di-fraternita/leggiuno/veduta-eremo-lago-maggiore.jpg'

export function LeggiunoPage() {
  return (
    <CasaLayout
      nome="Leggiuno"
      luogo="Leggiuno (VA), Italia"
      anno="2019"
      note="custodia dell'Eremo di Santa Caterina del Sasso"
      indirizzo="Via Santa Caterina, 21038 Leggiuno VA"
      email="santacaterina@ffbetania.net"
      telefono="0332 647 172"
      lat={45.8381}
      lng={8.6167}
      heroImage={hero}
      heroAlt="Eremo di Santa Caterina del Sasso, Leggiuno"
      paragrafi={[
        'Dal 1° aprile 2019 la Fraternità Francescana di Betania custodisce l\'Eremo di Santa Caterina del Sasso a Leggiuno (VA), affidato alla comunità dalla Provincia di Varese, proprietaria dell\'edificio, d\'intesa con la Diocesi di Milano. L\'eremo, incastonato nella roccia a picco sul Lago Maggiore di fronte alle Isole Borromee, sorge su un insediamento monastico che secondo la tradizione risale alla fine del XII secolo, fondato dal beato eremita Alberto Besozzi; le strutture attuali risalgono in gran parte al XIV secolo e sono state oggetto di numerosi restauri a partire dagli anni Settanta del Novecento.',
        'La fraternità vive in questo luogo il proprio carisma di preghiera e ospitalità, nel silenzio dei periodi invernali e nell\'accoglienza semplice dei visitatori che d\'estate giungono numerosi ad ammirare il complesso monastico. La comunità celebra ogni giorno la Santa Messa alle ore 18:00 ed è disponibile per le confessioni e il dialogo sulla vita spirituale.',
      ]}
      galleria={[
        { src: eremo3, alt: 'Eremo di Santa Caterina del Sasso, veduta sul Lago Maggiore' },
        { src: componenti, alt: 'I componenti della Fraternità all\'Eremo di Santa Caterina del Sasso' },
        { src: veduta, alt: 'Veduta dell\'Eremo di Santa Caterina del Sasso sul Lago Maggiore' },
      ]}
      orari={[
        'Santa Messa — ogni giorno alle ore 18:00',
        'Confessioni e colloqui di vita spirituale, su richiesta',
        'Ingresso: 5€, gratuito per chi partecipa alle celebrazioni liturgiche',
      ]}
    />
  )
}
