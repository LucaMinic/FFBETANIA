import { CasaLayout } from '../../../components/CasaLayout'
import { useT } from '../../../context/LanguageContext'
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
  const t = useT()
  return (
    <CasaLayout
      nome="Roma"
      luogo={t({ it: 'Roma, Italia', en: 'Rome, Italy', de: 'Rom, Italien', pt: 'Roma, Itália' })}
      anno="2004"
      indirizzo="Via M. D. Brun Barbantini 151, 00123 Roma"
      email="roma@ffbetania.net"
      telefono="06 86120934"
      lat={42.0064}
      lng={12.3961}
      heroImage={hero}
      heroAlt="Casa della Fraternità Francescana di Betania a Roma"
      paragrafi={[
        t({
          it: 'La Fraternità Francescana di Betania a Roma si presenta come "una piccola oasi di pace e tranquillità" dove fratelli e sorelle vivono in comunità, accogliendo i visitatori come famiglia religiosa e non come struttura alberghiera. Si trova alle porte di Roma, vicino alla via Cassia, a circa quindici chilometri a nord da San Pietro, facilmente raggiungibile con i mezzi pubblici (stazioni di La Storta e La Giustiniana) pur essendo immersa nel verde della campagna romana.',
          en: 'The Fraternità Francescana di Betania in Rome presents itself as "a small oasis of peace and tranquility" where brothers and sisters live in community, welcoming visitors as a religious family rather than as a hotel facility. It is located on the outskirts of Rome, near Via Cassia, about fifteen kilometers north of St. Peter\'s, easily reachable by public transport (La Storta and La Giustiniana stations) while being immersed in the greenery of the Roman countryside.',
          de: 'Die Fraternità Francescana di Betania in Rom versteht sich als „kleine Oase des Friedens und der Ruhe“, in der Brüder und Schwestern in Gemeinschaft leben und Besucher als religiöse Familie und nicht als Hotelbetrieb empfangen. Sie liegt am Stadtrand von Rom, nahe der Via Cassia, etwa fünfzehn Kilometer nördlich von St. Peter, mit öffentlichen Verkehrsmitteln gut erreichbar (Bahnhöfe La Storta und La Giustiniana), und dennoch im Grün der römischen Landschaft eingebettet.',
          pt: 'A Fraternità Francescana di Betania em Roma apresenta-se como "um pequeno oásis de paz e tranquilidade" onde irmãos e irmãs vivem em comunidade, acolhendo os visitantes como família religiosa e não como estrutura hoteleira. Situa-se nos arredores de Roma, perto da via Cassia, a cerca de quinze quilômetros ao norte de São Pedro, facilmente acessível por transporte público (estações de La Storta e La Giustiniana), embora imersa no verde do campo romano.',
        }),
        t({
          it: "La casa dispone di chiesa, cappella per l'adorazione eucaristica, refettorio, cucina, camere singole e per gruppi, sale riunioni, sala ricreativa e ampio giardino. Il 18 marzo 2026, vigilia della Solennità di San Giuseppe, la fraternità ha inaugurato la nuova chiesa della casa con una celebrazione eucaristica partecipata dalle famiglie della comunità: da allora la messa domenicale, prima ospitata dalle Suore Ministre degli Infermi, si celebra direttamente nella nuova chiesa della Casa.",
          en: 'The house has a church, a chapel for eucharistic adoration, a refectory, a kitchen, single and group rooms, meeting rooms, a recreation room and a large garden. On 18 March 2026, the eve of the Solemnity of St. Joseph, the fraternity inaugurated the house\'s new church with a Eucharistic celebration attended by the community\'s families: since then Sunday Mass, previously hosted by the Sisters Ministers of the Sick, has been celebrated directly in the House\'s new church.',
          de: 'Das Haus verfügt über eine Kirche, eine Kapelle für die eucharistische Anbetung, ein Refektorium, eine Küche, Einzel- und Gruppenzimmer, Versammlungsräume, einen Freizeitraum und einen großen Garten. Am 18. März 2026, dem Vorabend des Hochfests des heiligen Josef, weihte die Fraternität die neue Hauskirche mit einer Eucharistiefeier ein, an der die Familien der Gemeinschaft teilnahmen: Seitdem wird die Sonntagsmesse, die zuvor bei den Dienerinnen der Kranken gefeiert wurde, direkt in der neuen Kirche des Hauses gefeiert.',
          pt: 'A casa dispõe de igreja, capela para adoração eucarística, refeitório, cozinha, quartos individuais e para grupos, salas de reunião, sala de recreação e amplo jardim. Em 18 de março de 2026, véspera da Solenidade de São José, a fraternidade inaugurou a nova igreja da casa com uma celebração eucarística com a participação das famílias da comunidade: desde então, a missa dominical, antes acolhida pelas Irmãs Ministras dos Enfermos, celebra-se diretamente na nova igreja da Casa.',
        }),
      ]}
      galleria={[
        { src: cappella, alt: "Cappella per l'adorazione eucaristica, Casa di Roma" },
        { src: ingresso, alt: 'Ingresso della Casa di Roma' },
        { src: tabernacolo, alt: 'Tabernacolo della nuova chiesa della Casa di Roma' },
        { src: esterno2, alt: 'Esterno della Casa di Roma, altra veduta' },
        { src: facciata2025, alt: 'Facciata della Casa di Roma, 2025' },
        { src: inaugurazione1, alt: 'Inaugurazione della nuova chiesa della Casa di Roma, 2026' },
        { src: inaugurazione3, alt: "Celebrazione per l'inaugurazione della nuova chiesa, 2026" },
        { src: inaugurazione5, alt: 'Momento della cerimonia di inaugurazione della nuova chiesa, 2026' },
      ]}
    />
  )
}
