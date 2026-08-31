import { CasaLayout } from '../../../components/CasaLayout'
import { useT } from '../../../context/LanguageContext'
import hero from '../../../../assets/case-di-fraternita/aschaffenburg/convento-aschaffenburg-1.jpg'
import convento2 from '../../../../assets/case-di-fraternita/aschaffenburg/convento-aschaffenburg-2.jpg'
import convento3 from '../../../../assets/case-di-fraternita/aschaffenburg/convento-aschaffenburg-3.jpg'
import klosterfest from '../../../../assets/case-di-fraternita/aschaffenburg/festa-400-anni-klosterfest.jpg'
import passeggiataSchloss from '../../../../assets/case-di-fraternita/aschaffenburg/frati-passeggiata-schloss-johannisburg.jpg'
import vedutaAutunnale from '../../../../assets/case-di-fraternita/aschaffenburg/veduta-autunnale-schloss-e-meno.jpg'
import celebrazioneChiesa from '../../../../assets/case-di-fraternita/aschaffenburg/celebrazione-in-chiesa-aschaffenburg.jpg'

export function AschaffenburgPage() {
  const t = useT()
  return (
    <CasaLayout
      nome="Aschaffenburg"
      luogo={t({
        it: 'Aschaffenburg, Germania',
        en: 'Aschaffenburg, Germany',
        de: 'Aschaffenburg, Deutschland',
        pt: 'Aschaffenburg, Alemanha',
      })}
      anno="2013"
      note={t({
        it: 'ex convento dei Frati Minori Cappuccini',
        en: 'former convent of the Capuchin Friars Minor',
        de: 'ehemaliges Kloster der Kapuzinerbrüder',
        pt: 'antigo convento dos Frades Menores Capuchinhos',
      })}
      indirizzo="Kapuzinerplatz 8, D-63739 Aschaffenburg"
      email="aschaffenburg@ffbetania.net"
      telefono="+49 (0)6021 583920"
      lat={49.9769}
      lng={9.15}
      heroImage={hero}
      heroAlt="Convento della Fraternità Francescana di Betania, Aschaffenburg"
      paragrafi={[
        t({
          it: 'Aschaffenburg è una città di circa 70.000 abitanti nella Bassa Franconia, in Baviera settentrionale, situata sulla riva destra del Meno. Il 14 agosto 1622 il principe elettore Johannes Schweickart invitò i Cappuccini di Magonza a stabilirsi in città; la comunità cappuccina custodì il convento fino al 2010 e, dopo un lavoro di ristrutturazione, nel 2013 vi si insediò la Fraternità Francescana di Betania.',
          en: 'Aschaffenburg is a city of about 70,000 inhabitants in Lower Franconia, in northern Bavaria, located on the right bank of the Main. On 14 August 1622 the Prince-Elector Johannes Schweickart invited the Capuchins of Mainz to settle in the city; the Capuchin community kept the convent until 2010 and, after renovation works, the Fraternità Francescana di Betania settled there in 2013.',
          de: 'Aschaffenburg ist eine Stadt mit etwa 70.000 Einwohnern in Unterfranken, im nördlichen Bayern, am rechten Ufer des Mains gelegen. Am 14. August 1622 lud Kurfürst Johann Schweikard die Kapuziner aus Mainz ein, sich in der Stadt niederzulassen; die Kapuzinergemeinschaft hütete das Kloster bis 2010, und nach Renovierungsarbeiten ließ sich 2013 die Fraternità Francescana di Betania dort nieder.',
          pt: 'Aschaffenburg é uma cidade de cerca de 70.000 habitantes na Baixa Francônia, no norte da Baviera, situada na margem direita do rio Meno. Em 14 de agosto de 1622, o príncipe-eleitor Johannes Schweickart convidou os Capuchinhos de Mainz a se estabelecerem na cidade; a comunidade capuchinha guardou o convento até 2010 e, após obras de restauração, em 2013 ali se instalou a Fraternità Francescana di Betania.',
        }),
        t({
          it: 'La chiesa del convento, dedicata a Santa Elisabetta di Turingia ma da sempre conosciuta come "la Chiesa dei Cappuccini", resta un punto di riferimento per la città: le celebrazioni domenicali sono molto frequentate, con un numero crescente di coppie di sposi che vi riscoprono il proprio sacramento. Fin dall\'inizio la diocesi ha affidato alla Fraternità la cura pastorale della Comunità Cattolica Italiana di Würzburg e Aschaffenburg, e dal 2022 anche la conduzione di due parrocchie cittadine, nelle zone di Obernau e Gailbach. Nel luglio 2022 il convento ha festeggiato i 400 anni di storia con la tradizionale festa del Klosterfest, richiamando circa 800 persone.',
          en: 'The convent church, dedicated to St. Elizabeth of Thuringia but always known as "the Capuchin Church", remains a point of reference for the city: Sunday celebrations are very well attended, with a growing number of married couples rediscovering their sacrament there. From the very beginning, the diocese entrusted the Fraternity with the pastoral care of the Italian Catholic Community of Würzburg and Aschaffenburg, and since 2022 also the leadership of two city parishes, in the areas of Obernau and Gailbach. In July 2022 the convent celebrated 400 years of history with the traditional Klosterfest, drawing around 800 people.',
          de: 'Die Klosterkirche, die heiligen Elisabeth von Thüringen geweiht, aber seit jeher als „Kapuzinerkirche“ bekannt, bleibt ein Bezugspunkt für die Stadt: Die Sonntagsgottesdienste sind sehr gut besucht, mit einer wachsenden Zahl von Ehepaaren, die dort ihr Sakrament neu entdecken. Von Anfang an vertraute die Diözese der Fraternität die Seelsorge der Italienischen Katholischen Gemeinde von Würzburg und Aschaffenburg an, und seit 2022 auch die Leitung zweier Stadtpfarreien in den Gebieten Obernau und Gailbach. Im Juli 2022 feierte das Kloster mit dem traditionellen Klosterfest sein 400-jähriges Bestehen und zog rund 800 Menschen an.',
          pt: 'A igreja do convento, dedicada a Santa Isabel da Turíngia, mas sempre conhecida como "a Igreja dos Capuchinhos", continua a ser um ponto de referência para a cidade: as celebrações dominicais são muito concorridas, com um número crescente de casais que ali redescobrem o seu sacramento. Desde o início, a diocese confiou à Fraternidade o cuidado pastoral da Comunidade Católica Italiana de Würzburg e Aschaffenburg, e desde 2022 também a condução de duas paróquias da cidade, nas zonas de Obernau e Gailbach. Em julho de 2022, o convento celebrou 400 anos de história com a tradicional festa do Klosterfest, reunindo cerca de 800 pessoas.',
        }),
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
        t({
          it: 'Celebrazioni domenicali molto partecipate',
          en: 'Well-attended Sunday celebrations',
          de: 'Gut besuchte Sonntagsgottesdienste',
          pt: 'Celebrações dominicais muito concorridas',
        }),
        t({
          it: 'Cura pastorale della Comunità Cattolica Italiana di Würzburg e Aschaffenburg',
          en: 'Pastoral care of the Italian Catholic Community of Würzburg and Aschaffenburg',
          de: 'Seelsorge der Italienischen Katholischen Gemeinde von Würzburg und Aschaffenburg',
          pt: 'Cuidado pastoral da Comunidade Católica Italiana de Würzburg e Aschaffenburg',
        }),
        t({
          it: 'Klosterfest — festa annuale del convento, luglio',
          en: 'Klosterfest — annual convent festival, July',
          de: 'Klosterfest — jährliches Klosterfest im Juli',
          pt: 'Klosterfest — festa anual do convento, em julho',
        }),
      ]}
    />
  )
}
