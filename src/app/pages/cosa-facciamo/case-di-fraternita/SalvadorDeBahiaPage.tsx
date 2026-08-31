import { CasaLayout } from '../../../components/CasaLayout'
import { useT } from '../../../context/LanguageContext'
import hero from '../../../../assets/case-di-fraternita/salvador-de-bahia/convento-salvador-esterno.jpg'
import comunita from '../../../../assets/case-di-fraternita/salvador-de-bahia/comunita-salvador-1.jpg'
import preghiera from '../../../../assets/case-di-fraternita/salvador-de-bahia/momento-preghiera-salvador.jpg'
import asilo from '../../../../assets/case-di-fraternita/salvador-de-bahia/asilo-nossa-senhora-aparecida.jpg'
import giardino from '../../../../assets/case-di-fraternita/salvador-de-bahia/giardino-tropicale-convento-salvador.jpg'
import bambiniBandiera from '../../../../assets/case-di-fraternita/salvador-de-bahia/bambini-asilo-bandiera-italiana.png'
import visitaMattarella from '../../../../assets/case-di-fraternita/salvador-de-bahia/visita-presidente-mattarella.png'

export function SalvadorDeBahiaPage() {
  const t = useT()
  return (
    <CasaLayout
      nome="Salvador de Bahia"
      luogo={t({
        it: 'Salvador de Bahia, Brasile',
        en: 'Salvador de Bahia, Brazil',
        de: 'Salvador de Bahia, Brasilien',
        pt: 'Salvador da Bahia, Brasil',
      })}
      anno="2012"
      note={t({
        it: 'con Asilo Nossa Senhora Aparecida (2014)',
        en: 'with Nossa Senhora Aparecida Nursery School (2014)',
        de: 'mit Kindergarten Nossa Senhora Aparecida (2014)',
        pt: 'com Creche Nossa Senhora Aparecida (2014)',
      })}
      indirizzo="Rod. BA 526 n. 1672, Bairro São Cristóvão, 41510 Salvador de Bahia"
      email="salvador@ffbetania.net"
      telefono="+55 71 8249 1713"
      lat={-12.9777}
      lng={-38.5016}
      heroImage={hero}
      heroAlt="Fraternità Francescana di Betania a Salvador de Bahia, Brasile"
      paragrafi={[
        t({
          it: "Il 12 ottobre, festa di Nossa Senhora Aparecida, iniziò l'avventura missionaria della Fraternità Francescana di Betania in Brasile, nella regione della Bahia. Il Progetto Brasile nasce dal desiderio del fondatore, Padre Pancrazio, di realizzare un centro di accoglienza per i giovani delle favelas in gravi situazioni di disagio, offrendo loro formazione alla luce del Vangelo e nello spirito della Fraternità.",
          en: "On 12 October, feast of Nossa Senhora Aparecida, the missionary adventure of the Fraternità Francescana di Betania began in Brazil, in the Bahia region. The Brazil Project was born from the desire of the founder, Father Pancrazio, to create a welcome center for young people from favelas in serious situations of hardship, offering them formation in the light of the Gospel and in the spirit of the Fraternity.",
          de: 'Am 12. Oktober, dem Fest von Nossa Senhora Aparecida, begann das missionarische Abenteuer der Fraternità Francescana di Betania in Brasilien, in der Region Bahia. Das Brasilien-Projekt entstand aus dem Wunsch des Gründers, Pater Pancrazio, ein Aufnahmezentrum für Jugendliche aus den Favelas in schwerer Notlage zu schaffen und ihnen eine Ausbildung im Licht des Evangeliums und im Geist der Fraternität zu bieten.',
          pt: 'No dia 12 de outubro, festa de Nossa Senhora Aparecida, teve início a aventura missionária da Fraternità Francescana di Betania no Brasil, na região da Bahia. O Projeto Brasil nasce do desejo do fundador, Padre Pancrazio, de criar um centro de acolhida para os jovens das favelas em graves situações de dificuldade, oferecendo-lhes formação à luz do Evangelho e no espírito da Fraternidade.',
        }),
        t({
          it: 'La comunità è nata nella città di Salvador de Bahia, nel complesso di quartieri intorno al Bairro di São Cristóvão, vicino all\'aeroporto internazionale: una zona che ospita circa 200.000 abitanti in condizioni di disagio sociale, con una popolazione giovane — il 70% ha meno di 25 anni — segnata da povertà diffusa. Per rispondere a questa realtà è stata costruita una scuola per l\'infanzia, la "creche", che accoglie gratuitamente circa 120 bambini, sostenuta dai benefattori della Fraternità, con l\'obiettivo di offrire loro non solo un\'educazione scolastica di alto livello ma anche valori, capacità relazionali e competenze culturali, coinvolgendo anche le famiglie.',
          en: 'The community was born in the city of Salvador de Bahia, in the cluster of neighborhoods around the Bairro of São Cristóvão, near the international airport: an area home to about 200,000 residents in conditions of social hardship, with a young population — 70% under 25 — marked by widespread poverty. To respond to this reality, a nursery school, the "creche", was built, which welcomes about 120 children free of charge, supported by the Fraternity\'s benefactors, with the aim of offering them not only a high-quality education but also values, relational skills and cultural competencies, involving families too.',
          de: 'Die Gemeinschaft entstand in der Stadt Salvador de Bahia, in dem Viertelkomplex rund um den Bairro São Cristóvão, nahe dem internationalen Flughafen: ein Gebiet mit etwa 200.000 Einwohnern in sozial schwierigen Verhältnissen, mit einer jungen Bevölkerung — 70 % sind unter 25 Jahre alt — geprägt von weit verbreiteter Armut. Um dieser Realität zu begegnen, wurde ein Kindergarten, die „creche“, gebaut, der kostenlos rund 120 Kinder aufnimmt, unterstützt von den Wohltätern der Fraternität, mit dem Ziel, ihnen nicht nur eine hochwertige schulische Bildung, sondern auch Werte, Beziehungsfähigkeiten und kulturelle Kompetenzen zu vermitteln, unter Einbeziehung auch der Familien.',
          pt: 'A comunidade nasceu na cidade de Salvador da Bahia, no conjunto de bairros em torno do Bairro de São Cristóvão, perto do aeroporto internacional: uma zona que abriga cerca de 200.000 habitantes em condições de vulnerabilidade social, com uma população jovem — 70% tem menos de 25 anos — marcada por pobreza generalizada. Para responder a essa realidade, foi construída uma creche, que acolhe gratuitamente cerca de 120 crianças, sustentada pelos benfeitores da Fraternidade, com o objetivo de oferecer-lhes não só uma educação escolar de alto nível, mas também valores, capacidades relacionais e competências culturais, envolvendo também as famílias.',
        }),
      ]}
      galleria={[
        { src: comunita, alt: 'Vita della comunità FFB di Salvador de Bahia' },
        { src: preghiera, alt: 'Momento di preghiera della fraternità di Salvador de Bahia' },
        { src: asilo, alt: 'Asilo Nossa Senhora Aparecida, Salvador de Bahia' },
        { src: giardino, alt: 'Il giardino tropicale del convento di Salvador de Bahia' },
        { src: bambiniBandiera, alt: "Bambini dell'asilo con la bandiera italiana" },
        { src: visitaMattarella, alt: 'Visita del Presidente della Repubblica Sergio Mattarella alla comunità' },
      ]}
      orari={[
        t({
          it: "Asilo Nossa Senhora Aparecida — pasti dalle 7:30 alle 16:30, dal lunedì al venerdì",
          en: 'Nossa Senhora Aparecida Nursery School — meals from 7:30 am to 4:30 pm, Monday to Friday',
          de: 'Kindergarten Nossa Senhora Aparecida — Mahlzeiten von 7:30 bis 16:30 Uhr, Montag bis Freitag',
          pt: 'Creche Nossa Senhora Aparecida — refeições das 7h30 às 16h30, de segunda a sexta-feira',
        }),
      ]}
    />
  )
}
