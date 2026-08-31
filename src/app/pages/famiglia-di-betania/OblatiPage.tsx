import { PageHero } from '../../components/PageHero'
import { PageCta } from '../../components/PageCta'
import { useT } from '../../context/LanguageContext'
import oblatiImg from '../../../assets/famiglia-di-betania/oblati-ffb-1.png'

export function OblatiPage() {
  const t = useT()
  return (
    <>
      <PageHero
        image={oblatiImg}
        title={t({ it: 'Oblati', en: 'Oblates', de: 'Oblaten', pt: 'Oblatos' })}
        subtitle={t({
          it: 'Laici che vivono il carisma della Fraternità nella loro vita quotidiana.',
          en: 'Laypeople who live the charism of the Fraternity in their daily life.',
          de: 'Laien, die das Charisma der Fraternität in ihrem Alltag leben.',
          pt: 'Leigos que vivem o carisma da Fraternidade na sua vida quotidiana.',
        })}
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3">
        {t({ it: 'Chi sono e cosa fanno', en: 'Who they are and what they do', de: 'Wer sie sind und was sie tun', pt: 'Quem são e o que fazem' })}
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        {t({
          it: 'Gli oblati sono cristiani laici di età adulta, che partecipano ed esprimono il carisma della Fraternità nel loro stato di vita e negli ambienti della loro vita quotidiana ordinaria, facendo della propria esistenza un dono di oblazione a Dio, per la santificazione propria, della stessa Fraternità, della Chiesa e del mondo.',
          en: 'The oblates are adult lay Christians who take part in and express the charism of the Fraternity in their state of life and in the settings of their ordinary daily life, making their existence a gift of oblation to God, for their own sanctification and that of the Fraternity, the Church and the world.',
          de: 'Die Oblaten sind erwachsene Laienchristen, die am Charisma der Fraternität teilhaben und es in ihrem Lebensstand und in den Bereichen ihres gewöhnlichen Alltags zum Ausdruck bringen, indem sie ihre Existenz zu einer Gabe der Hingabe an Gott machen, zur Heiligung ihrer selbst, der Fraternität, der Kirche und der Welt.',
          pt: 'Os oblatos são cristãos leigos de idade adulta, que participam e exprimem o carisma da Fraternidade no seu estado de vida e nos ambientes da sua vida quotidiana comum, fazendo da própria existência um dom de oblação a Deus, para a própria santificação, da própria Fraternidade, da Igreja e do mundo.',
        })}
      </p>
      <p className="text-gray-600 leading-relaxed mb-8">
        {t({
          it: "Rinnovano annualmente il loro impegno secondo lo Statuto dei familiari della Fraternità Francescana di Betania. L'appartenenza avviene in varie forme e modalità.",
          en: 'They renew their commitment annually according to the Statute of the Familiari of the Fraternità Francescana di Betania. Membership takes place in various forms and ways.',
          de: 'Sie erneuern ihre Verpflichtung jährlich gemäß dem Statut der Familiari der Fraternità Francescana di Betania. Die Zugehörigkeit erfolgt in verschiedenen Formen und Weisen.',
          pt: 'Renovam anualmente o seu compromisso segundo o Estatuto dos familiares da Fraternità Francescana di Betania. A pertença acontece em várias formas e modalidades.',
        })}
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        <div className="rounded-2xl border border-gray-100 p-5">
          <h3 className="font-bold text-[var(--deep-blue)] mb-2">
            {t({ it: 'Oblati esterni', en: 'External oblates', de: 'Externe Oblaten', pt: 'Oblatos externos' })}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {t({
              it: "Rappresentano una continuità del carisma oltre le mura della Fraternità, guardando alla Sacra Famiglia di Nazareth come modello. Sono testimoni del primato dell'Amore di Dio, costruttori di fraternità nella loro famiglia, promotori di collaborazione nel loro ambiente sociale e lavorativo.",
              en: 'They represent a continuation of the charism beyond the walls of the Fraternity, looking to the Holy Family of Nazareth as a model. They are witnesses of the primacy of the Love of God, builders of fraternity within their own family, promoters of collaboration in their social and work environment.',
              de: 'Sie stehen für eine Fortführung des Charismas über die Mauern der Fraternität hinaus, wobei sie sich an der Heiligen Familie von Nazareth als Vorbild orientieren. Sie sind Zeugen des Primats der Liebe Gottes, Erbauer von Fraternität in ihrer eigenen Familie, Förderer der Zusammenarbeit in ihrem sozialen und beruflichen Umfeld.',
              pt: 'Representam uma continuidade do carisma para além dos muros da Fraternidade, olhando para a Sagrada Família de Nazaré como modelo. São testemunhas do primado do Amor de Deus, construtores de fraternidade na sua família, promotores de colaboração no seu ambiente social e de trabalho.',
            })}
          </p>
        </div>
        <div className="rounded-2xl border border-gray-100 p-5">
          <h3 className="font-bold text-[var(--deep-blue)] mb-2">
            {t({ it: 'Oblati interni', en: 'Internal oblates', de: 'Interne Oblaten', pt: 'Oblatos internos' })}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {t({
              it: "Affiliati stabilmente, legati spiritualmente mediante promessa di vita evangelica semplice o con voti, vivono nelle case della Fraternità, condividendone il carisma e la missione, camminando verso la perfezione con maggiore fecondità apostolica.",
              en: 'Stably affiliated, spiritually bound through a promise of simple evangelical life or with vows, they live in the Houses of the Fraternity, sharing its charism and mission, walking towards perfection with greater apostolic fruitfulness.',
              de: 'Dauerhaft angegliedert, geistlich gebunden durch ein Versprechen des einfachen evangelischen Lebens oder durch Gelübde, leben sie in den Häusern der Fraternität, teilen deren Charisma und Sendung und gehen den Weg zur Vollkommenheit mit größerer apostolischer Fruchtbarkeit.',
              pt: 'Afiliados de forma estável, ligados espiritualmente mediante promessa de vida evangélica simples ou com votos, vivem nas casas da Fraternidade, partilhando o seu carisma e missão, caminhando rumo à perfeição com maior fecundidade apostólica.',
            })}
          </p>
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed">
        {t({
          it: 'Anche i sacerdoti diocesani legati spiritualmente alla Fraternità possono diventare oblati, vivendo lo stesso carisma nel loro contesto di vita.',
          en: 'Diocesan priests spiritually bound to the Fraternity can also become oblates, living the same charism in their own life context.',
          de: 'Auch Diözesanpriester, die geistlich mit der Fraternität verbunden sind, können Oblaten werden und dasselbe Charisma in ihrem Lebenskontext leben.',
          pt: 'Também os sacerdotes diocesanos ligados espiritualmente à Fraternidade podem tornar-se oblatos, vivendo o mesmo carisma no seu contexto de vida.',
        })}
      </p>

      <PageCta
        title={t({ it: 'Senti una chiamata più grande?', en: 'Do you feel a greater calling?', de: 'Fühlst du einen größeren Ruf?', pt: 'Sente um chamado maior?' })}
        text={t({
          it: 'Scopri il percorso di discernimento vocazionale nel nostro Istituto, o esplora le altre realtà della Famiglia di Betania.',
          en: 'Discover the path of vocational discernment in our Institute, or explore the other realities of the Family of Betania.',
          de: 'Entdecke den Weg der Berufungsunterscheidung in unserem Institut oder erkunde die anderen Realitäten der Familie von Betania.',
          pt: 'Conheça o percurso de discernimento vocacional no nosso Instituto, ou explore as outras realidades da Família de Betânia.',
        })}
        primaryLabel={t({ it: 'Vivi la tua vocazione', en: 'Live your vocation', de: 'Lebe deine Berufung', pt: 'Viva a sua vocação' })}
        primaryTo="/famiglia-di-betania/vivi-la-tua-vocazione"
        secondaryLabel={t({ it: 'Famiglia di Betania', en: 'Family of Betania', de: 'Familie von Betania', pt: 'Família de Betânia' })}
        secondaryTo="/famiglia-di-betania"
      />
      </section>
    </>
  )
}
