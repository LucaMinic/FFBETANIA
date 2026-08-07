import { CasaLayout } from '../../../components/CasaLayout'
import hero from '../../../../assets/case-di-fraternita/aschaffenburg/convento-aschaffenburg-1.jpg'
import convento2 from '../../../../assets/case-di-fraternita/aschaffenburg/convento-aschaffenburg-2.jpg'
import convento3 from '../../../../assets/case-di-fraternita/aschaffenburg/convento-aschaffenburg-3.jpg'
import klosterfest from '../../../../assets/case-di-fraternita/aschaffenburg/festa-400-anni-klosterfest.jpg'
import passeggiataSchloss from '../../../../assets/case-di-fraternita/aschaffenburg/frati-passeggiata-schloss-johannisburg.jpg'
import vedutaAutunnale from '../../../../assets/case-di-fraternita/aschaffenburg/veduta-autunnale-schloss-e-meno.jpg'
import celebrazioneChiesa from '../../../../assets/case-di-fraternita/aschaffenburg/celebrazione-in-chiesa-aschaffenburg.jpg'

export function AschaffenburgPage() {
  return (
    <CasaLayout
      nome="Aschaffenburg"
      luogo="Aschaffenburg, Germania"
      anno="2013"
      note="ex convento dei Frati Minori Cappuccini"
      indirizzo="Kapuzinerplatz 8, D-63739 Aschaffenburg"
      email="aschaffenburg@ffbetania.net"
      telefono="+49 (0)6021 583920"
      lat={49.9769}
      lng={9.15}
      heroImage={hero}
      heroAlt="Convento della Fraternità Francescana di Betania, Aschaffenburg"
      paragrafi={[
        'Aschaffenburg è una città di circa 70.000 abitanti nella Bassa Franconia, in Baviera settentrionale, situata sulla riva destra del Meno. Il 14 agosto 1622 il principe elettore Johannes Schweickart invitò i Cappuccini di Magonza a stabilirsi in città; la comunità cappuccina custodì il convento fino al 2010 e, dopo un lavoro di ristrutturazione, nel 2013 vi si insediò la Fraternità Francescana di Betania.',
        'La chiesa del convento, dedicata a Santa Elisabetta di Turingia ma da sempre conosciuta come "la Chiesa dei Cappuccini", resta un punto di riferimento per la città: le celebrazioni domenicali sono molto frequentate, con un numero crescente di coppie di sposi che vi riscoprono il proprio sacramento. Fin dall\'inizio la diocesi ha affidato alla Fraternità la cura pastorale della Comunità Cattolica Italiana di Würzburg e Aschaffenburg, e dal 2022 anche la conduzione di due parrocchie cittadine, nelle zone di Obernau e Gailbach. Nel luglio 2022 il convento ha festeggiato i 400 anni di storia con la tradizionale festa del Klosterfest, richiamando circa 800 persone.',
      ]}
      galleria={[
        { src: convento2, alt: 'Vita della fraternità di Aschaffenburg' },
        { src: convento3, alt: 'Vita della fraternità di Aschaffenburg' },
        { src: klosterfest, alt: 'Festa dei 400 anni del convento, Klosterfest 2022' },
        { src: passeggiataSchloss, alt: 'Due frati passeggiano lungo il Meno, con lo Schloss Johannisburg sullo sfondo' },
        { src: vedutaAutunnale, alt: 'Veduta autunnale del castello e del fiume Meno dal convento' },
        { src: celebrazioneChiesa, alt: 'Celebrazione nella chiesa del convento di Aschaffenburg' },
      ]}
      orari={[
        'Celebrazioni domenicali molto partecipate',
        'Cura pastorale della Comunità Cattolica Italiana di Würzburg e Aschaffenburg',
        'Klosterfest — festa annuale del convento, luglio',
      ]}
    />
  )
}
