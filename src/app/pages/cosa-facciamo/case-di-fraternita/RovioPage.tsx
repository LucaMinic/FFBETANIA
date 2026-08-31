import { CasaLayout } from '../../../components/CasaLayout'
import { useT } from '../../../context/LanguageContext'
import hero from '../../../../assets/case-di-fraternita/rovio/rovio-casa-betania.jpg'
import casa2 from '../../../../assets/case-di-fraternita/rovio/rovio-casa-betania-2.jpg'
import comunita from '../../../../assets/case-di-fraternita/rovio/rovio-comunita-1.jpg'
import ordinazione from '../../../../assets/case-di-fraternita/rovio/rovio-ordinazione-diaconale-2022.png'
import panoramaLago from '../../../../assets/case-di-fraternita/rovio/rovio-panorama-lago-lugano.jpg'
import pastoraleGiovanile from '../../../../assets/case-di-fraternita/rovio/rovio-pastorale-giovanile-gruppo.png'
import ingressoComunita from '../../../../assets/case-di-fraternita/rovio/rovio-ingresso-comunita-2024.png'

export function RovioPage() {
  const t = useT()
  return (
    <CasaLayout
      nome="Casa di Rovio"
      luogo={t({ it: 'Rovio, Ticino, Svizzera', en: 'Rovio, Ticino, Switzerland', de: 'Rovio, Tessin, Schweiz', pt: 'Rovio, Ticino, Suíça' })}
      anno="2002"
      note={t({
        it: 'prima casa oltreconfine',
        en: 'first house beyond the border',
        de: 'erstes Haus jenseits der Grenze',
        pt: 'primeira casa além-fronteira',
      })}
      indirizzo="Via S. Felice 6821, Rovio – Ticino CH"
      email="rovio@ffbetania.net"
      telefono="+41 91 630 65 40"
      lat={45.9167}
      lng={8.9667}
      heroImage={hero}
      heroAlt="Casa Betania, Rovio, Ticino"
      paragrafi={[
        t({
          it: "La Casa di Rovio, in Ticino, sui pendii del Monte Generoso con vista sul Lago di Lugano, è la prima Fraternità di Betania aperta oltre i confini italiani. La ricerca di una sede in Svizzera durò diversi anni, finché nel 2000 fu individuata a Rovio la struttura che un tempo ospitava l'Istituto San Felice, dedicato all'educazione dei bambini bisognosi; dopo i lavori di ristrutturazione, la casa fu inaugurata il 5 maggio 2002.",
          en: 'The House of Rovio, in Ticino, on the slopes of Monte Generoso overlooking Lake Lugano, is the first Fraternity of Betania opened beyond Italian borders. The search for a location in Switzerland took several years, until in 2000 the building that once housed the Istituto San Felice, dedicated to the education of children in need, was identified in Rovio; after renovation works, the house was inaugurated on 5 May 2002.',
          de: 'Das Haus Rovio im Tessin, an den Hängen des Monte Generoso mit Blick auf den Luganersee, ist die erste Fraternität von Betania, die außerhalb der italienischen Grenzen eröffnet wurde. Die Suche nach einem Standort in der Schweiz dauerte mehrere Jahre, bis im Jahr 2000 in Rovio das Gebäude gefunden wurde, in dem einst das Istituto San Felice untergebracht war, das der Erziehung bedürftiger Kinder gewidmet war; nach den Renovierungsarbeiten wurde das Haus am 5. Mai 2002 eingeweiht.',
          pt: 'A Casa de Rovio, no Ticino, nas encostas do Monte Generoso com vista para o Lago de Lugano, é a primeira Fraternidade de Betânia aberta além das fronteiras italianas. A busca por uma sede na Suíça durou vários anos, até que em 2000 foi identificado em Rovio o edifício que antes abrigava o Istituto San Felice, dedicado à educação de crianças carentes; após as obras de restauração, a casa foi inaugurada em 5 de maio de 2002.',
        }),
        t({
          it: 'Situata poco sotto il centro storico del paese, in un contesto di quiete e natura, la Fraternità è oggi un punto di riferimento spirituale per le parrocchie circostanti. Da alcuni anni la comunità propone anche "Rosario Live", la trasmissione in diretta streaming, ogni sera alle 22:00, della recita del Santo Rosario e della Compieta, che permette a chi è lontano di unirsi in preghiera con i frati e le sorelle di Rovio.',
          en: 'Located just below the historic center of the village, amid quiet and nature, the Fraternity is today a spiritual point of reference for the surrounding parishes. For some years the community has also offered "Rosario Live", a live streaming broadcast, every evening at 10:00 pm, of the Holy Rosary and Compline, allowing those who are far away to join in prayer with the friars and sisters of Rovio.',
          de: 'Etwas unterhalb des historischen Dorfzentrums gelegen, inmitten von Ruhe und Natur, ist die Fraternität heute ein geistlicher Bezugspunkt für die umliegenden Pfarreien. Seit einigen Jahren bietet die Gemeinschaft auch „Rosario Live“ an, die Live-Übertragung des Rosenkranzes und der Komplet jeden Abend um 22:00 Uhr, die es Fernstehenden ermöglicht, sich im Gebet mit den Brüdern und Schwestern von Rovio zu verbinden.',
          pt: 'Situada logo abaixo do centro histórico da vila, num contexto de tranquilidade e natureza, a Fraternidade é hoje um ponto de referência espiritual para as paróquias vizinhas. Há alguns anos a comunidade também propõe o "Rosário Live", a transmissão ao vivo, todas as noites às 22h00, da recitação do Santo Rosário e das Completas, que permite a quem está longe unir-se em oração com os frades e irmãs de Rovio.',
        }),
      ]}
      galleria={[
        { src: casa2, alt: 'Casa Betania di Rovio, Ticino' },
        { src: comunita, alt: 'La comunità della Casa di Rovio' },
        { src: ordinazione, alt: 'Ordinazione diaconale alla Casa di Rovio, maggio 2022' },
        { src: panoramaLago, alt: 'Panorama del Lago di Lugano visto dalla Casa di Rovio' },
        { src: pastoraleGiovanile, alt: 'La comunità con i giovani della pastorale di Lugano' },
        { src: ingressoComunita, alt: 'Cerimonia di ingresso in comunità, autunno 2024' },
      ]}
      orari={[
        t({
          it: 'Rosario Live in diretta streaming ogni sera alle 22:00 — Santo Rosario e Compieta',
          en: 'Rosario Live streamed every evening at 10:00 pm — Holy Rosary and Compline',
          de: 'Rosario Live jeden Abend um 22:00 Uhr im Livestream — Rosenkranz und Komplet',
          pt: 'Rosário Live ao vivo todas as noites às 22h00 — Santo Rosário e Completas',
        }),
      ]}
    />
  )
}
