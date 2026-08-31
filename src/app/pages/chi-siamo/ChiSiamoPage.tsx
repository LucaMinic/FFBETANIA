import { Link } from 'react-router'
import { PageHero } from '../../components/PageHero'
import { PageCta } from '../../components/PageCta'
import { useT } from '../../context/LanguageContext'
import fondatore from '../../../assets/chi-siamo/il-nostro-fondatore.jpg'
import iconMariana from '../../../assets/chi-siamo/ico-mariana.svg'
import iconTau from '../../../assets/chi-siamo/ico-tau.svg'

export function ChiSiamoPage() {
  const t = useT()
  return (
    <>
      <PageHero
        image={fondatore}
        title={t({ it: 'Chi siamo', en: 'About us', de: 'Über uns', pt: 'Quem somos' })}
        subtitle={t({
          it: "Un Istituto di Vita Consacrata nato dalla preghiera e vissuto nell'accoglienza.",
          en: 'An Institute of Consecrated Life born from prayer and lived through hospitality.',
          de: 'Ein Institut des geweihten Lebens, geboren aus dem Gebet und gelebt in Gastfreundschaft.',
          pt: 'Um Instituto de Vida Consagrada nascido da oração e vivido no acolhimento.',
        })}
        imageAlt="Il nostro fondatore"
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <p className="text-lg text-gray-600 leading-relaxed mb-4">
        {t({
          it: 'Fraternità Francescana di Betania è un Istituto di Vita Consacrata di diritto diocesano composto da fratelli, sia chierici che laici, e da sorelle che si consacrano a Dio mediante i voti pubblici di castità, povertà ed obbedienza.',
          en: 'Fraternità Francescana di Betania is an Institute of Consecrated Life of diocesan right, made up of brothers, both clergy and lay, and sisters who consecrate themselves to God through the public vows of chastity, poverty and obedience.',
          de: 'Die Fraternità Francescana di Betania ist ein Institut des geweihten Lebens diözesanen Rechts, bestehend aus Brüdern, sowohl Klerikern als auch Laien, sowie Schwestern, die sich Gott durch die öffentlichen Gelübde der Keuschheit, Armut und des Gehorsams weihen.',
          pt: 'A Fraternità Francescana di Betania é um Instituto de Vida Consagrada de direito diocesano, composto por irmãos, tanto clérigos como leigos, e por irmãs que se consagram a Deus através dos votos públicos de castidade, pobreza e obediência.',
        })}
      </p>
      <p className="text-lg text-gray-600 leading-relaxed mb-4">
        {t({
          it: "Questa nostra consacrazione si realizza attraverso il carisma della Fraternità Francescana di Betania, che si esprime nella preghiera e nell'accoglienza, elementi caratteristici della Betania evangelica (cfr. Lc 10,38-42), vissuti in un profondo contesto di vita fraterna tipico dell'esperienza Francescana.",
          en: 'This consecration of ours is realized through the charism of the Fraternità Francescana di Betania, which is expressed in prayer and hospitality, characteristic elements of the Gospel Bethany (cf. Lk 10:38-42), lived out within the deep fraternal life typical of the Franciscan experience.',
          de: 'Diese unsere Weihe verwirklicht sich durch das Charisma der Fraternità Francescana di Betania, das sich im Gebet und in der Gastfreundschaft ausdrückt, charakteristischen Elementen des biblischen Betanien (vgl. Lk 10,38-42), gelebt in einem tiefen brüderlichen Kontext, wie er für die franziskanische Erfahrung typisch ist.',
          pt: 'A nossa consagração realiza-se através do carisma da Fraternità Francescana di Betania, que se exprime na oração e no acolhimento, elementos característicos da Betânia evangélica (cf. Lc 10,38-42), vividos num profundo contexto de vida fraterna típico da experiência franciscana.',
        })}
      </p>

      <blockquote className="border-l-4 border-[var(--warm-orange)] pl-4 italic text-gray-600 my-8">
        {t({
          it: '"Non sii talmente dedito all\'attività di Marta da dimenticare il silenzio di Maria; la Vergine Madre che sì ben concilia l\'uno e l\'altro ufficio ti sia di dolce modello e di ispirazione." — San Pio a Padre Pancrazio',
          en: '"Do not be so devoted to the activity of Martha that you forget the silence of Mary; may the Virgin Mother, who so well reconciles the one office with the other, be your sweet model and inspiration." — St. Pio to Father Pancrazio',
          de: '„Sei nicht so sehr der Tätigkeit der Marta hingegeben, dass du das Schweigen der Maria vergisst; die Jungfrau und Mutter, die beide Ämter so gut vereint, sei dir liebevolles Vorbild und Inspiration.“ — Pater Pio zu Pater Pancrazio',
          pt: '"Não sejas tão dedicado à atividade de Marta a ponto de esqueceres o silêncio de Maria; a Virgem Mãe, que tão bem concilia um e outro ofício, seja para ti doce modelo e inspiração." — São Pio ao Padre Pancrazio',
        })}
      </blockquote>

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3">
        {t({
          it: 'Spiritualità mariana-francescana',
          en: 'Marian-Franciscan spirituality',
          de: 'Marianisch-franziskanische Spiritualität',
          pt: 'Espiritualidade mariano-franciscana',
        })}
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        {t({
          it: "L'icona evangelica di Betania ci guida nel vivere quotidianamente il Vangelo, guidati dalla luce della Beata Vergine Maria e dalla semplicità di san Francesco d'Assisi.",
          en: 'The Gospel icon of Bethany guides us in living the Gospel each day, guided by the light of the Blessed Virgin Mary and the simplicity of St. Francis of Assisi.',
          de: 'Die Evangeliums-Ikone von Betanien leitet uns dabei, das Evangelium täglich zu leben, geführt vom Licht der seligen Jungfrau Maria und der Einfachheit des heiligen Franziskus von Assisi.',
          pt: 'O ícone evangélico de Betânia guia-nos a viver o Evangelho no dia a dia, guiados pela luz da Bem-Aventurada Virgem Maria e pela simplicidade de São Francisco de Assis.',
        })}
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        <div className="flex gap-3 items-start">
          <img src={iconMariana} alt="" className="w-10 h-10 shrink-0" />
          <p className="text-gray-600 leading-relaxed">
            <strong>{t({ it: 'Mariana', en: 'Marian', de: 'Marianisch', pt: 'Mariana' })}</strong> —{' '}
            {t({
              it: "La Vergine Maria che accolse nel cuore e nel corpo il Verbo di Dio è per noi l'icona principale della vera accoglienza.",
              en: 'The Virgin Mary, who welcomed the Word of God in her heart and body, is for us the principal icon of true hospitality.',
              de: 'Die Jungfrau Maria, die das Wort Gottes in Herz und Leib aufnahm, ist für uns die wichtigste Ikone wahrer Gastfreundschaft.',
              pt: 'A Virgem Maria, que acolheu no coração e no corpo o Verbo de Deus, é para nós o ícone principal do verdadeiro acolhimento.',
            })}
          </p>
        </div>
        <div className="flex gap-3 items-start">
          <img src={iconTau} alt="" className="w-10 h-10 shrink-0" />
          <p className="text-gray-600 leading-relaxed">
            <strong>{t({ it: 'Francescana', en: 'Franciscan', de: 'Franziskanisch', pt: 'Franciscana' })}</strong> —{' '}
            {t({
              it: 'Per apprendere lo stile di vita del vero discepolo di Cristo imitiamo il serafico padre san Francesco d\'Assisi.',
              en: 'To learn the lifestyle of the true disciple of Christ, we imitate the seraphic father St. Francis of Assisi.',
              de: 'Um den Lebensstil des wahren Jüngers Christi zu erlernen, ahmen wir den seraphischen Vater, den heiligen Franziskus von Assisi, nach.',
              pt: 'Para aprender o estilo de vida do verdadeiro discípulo de Cristo, imitamos o seráfico pai São Francisco de Assis.',
            })}
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3">
        {t({
          it: 'I nostri riferimenti spirituali',
          en: 'Our spiritual references',
          de: 'Unsere geistlichen Vorbilder',
          pt: 'Nossas referências espirituais',
        })}
      </h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        {t({
          it: "Attenzione e amore particolare dedichiamo, inoltre, alla vita e agli scritti di san Pio da Pietrelcina, che ci è di esempio nella vita di preghiera, nell'esercizio eroico delle virtù, nello spirito di sacrificio e di dedizione al ministero presbiterale e nell'imitazione del Cristo crocifisso.",
          en: 'We also dedicate special attention and love to the life and writings of St. Pio of Pietrelcina, who is an example to us in the life of prayer, in the heroic exercise of virtue, in the spirit of sacrifice and dedication to priestly ministry, and in the imitation of the crucified Christ.',
          de: 'Besondere Aufmerksamkeit und Liebe widmen wir zudem dem Leben und den Schriften des heiligen Pio von Pietrelcina, der uns Vorbild ist im Gebetsleben, in der heroischen Tugendübung, im Geist der Aufopferung und Hingabe an den priesterlichen Dienst und in der Nachahmung des gekreuzigten Christus.',
          pt: 'Dedicamos também atenção e amor particular à vida e aos escritos de São Pio de Pietrelcina, que nos é exemplo na vida de oração, no exercício heroico das virtudes, no espírito de sacrifício e dedicação ao ministério presbiteral e na imitação de Cristo crucificado.',
        })}
      </p>
      <p className="text-gray-600 leading-relaxed mb-8">
        {t({
          it: 'Un altro riferimento importante nella spiritualità della Fraternità è San Giuseppe. Come Dio ha affidato a San Giuseppe il suo Figlio Gesù e la sua Santissima Madre, così noi ci affidiamo a lui come nostro patrono e protettore. Egli, custode della Santa Famiglia, è per noi modello di umiltà nel vivere i nostri doveri.',
          en: 'Another important reference in the spirituality of the Fraternity is St. Joseph. Just as God entrusted his Son Jesus and his Most Holy Mother to St. Joseph, so we entrust ourselves to him as our patron and protector. He, guardian of the Holy Family, is for us a model of humility in living out our duties.',
          de: 'Ein weiteres wichtiges Vorbild in der Spiritualität der Fraternität ist der heilige Josef. So wie Gott dem heiligen Josef seinen Sohn Jesus und seine allerheiligste Mutter anvertraute, so vertrauen wir uns ihm als unserem Patron und Beschützer an. Er, Hüter der Heiligen Familie, ist für uns Vorbild der Demut in der Erfüllung unserer Pflichten.',
          pt: 'Outra referência importante na espiritualidade da Fraternidade é São José. Assim como Deus confiou a São José o seu Filho Jesus e a sua Santíssima Mãe, também nós nos confiamos a ele como nosso patrono e protetor. Ele, guardião da Sagrada Família, é para nós modelo de humildade no cumprimento dos nossos deveres.',
        })}
      </p>

      <div className="grid sm:grid-cols-3 gap-4">
        <Link
          to="/chi-siamo/carisma"
          className="rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">
            {t({ it: 'Il nostro carisma', en: 'Our charism', de: 'Unser Charisma', pt: 'Nosso carisma' })}
          </h3>
          <p className="text-sm text-gray-500">
            {t({
              it: 'Preghiera, Accoglienza, Vita Fraterna.',
              en: 'Prayer, Hospitality, Fraternal Life.',
              de: 'Gebet, Gastfreundschaft, brüderliches Leben.',
              pt: 'Oração, Acolhimento, Vida Fraterna.',
            })}
          </p>
        </Link>
        <Link
          to="/chi-siamo/padre-pancrazio"
          className="rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">
            {t({ it: 'Padre Pancrazio', en: 'Father Pancrazio', de: 'Pater Pancrazio', pt: 'Padre Pancrazio' })}
          </h3>
          <p className="text-sm text-gray-500">
            {t({
              it: 'La storia del nostro fondatore.',
              en: 'The story of our founder.',
              de: 'Die Geschichte unseres Gründers.',
              pt: 'A história do nosso fundador.',
            })}
          </p>
        </Link>
        <Link
          to="/chi-siamo/storia"
          className="rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">
            {t({ it: 'La nostra storia', en: 'Our history', de: 'Unsere Geschichte', pt: 'Nossa história' })}
          </h3>
          <p className="text-sm text-gray-500">
            {t({
              it: 'Cronologia e governo generale.',
              en: 'Timeline and general governance.',
              de: 'Zeitleiste und Generalleitung.',
              pt: 'Cronologia e governo geral.',
            })}
          </p>
        </Link>
      </div>

      <PageCta
        title={t({
          it: 'Vuoi conoscerci meglio?',
          en: 'Want to get to know us better?',
          de: 'Möchtest du uns besser kennenlernen?',
          pt: 'Quer nos conhecer melhor?',
        })}
        text={t({
          it: 'Le nostre Case sono aperte a chi cerca preghiera, silenzio o una parola di conforto. Vieni a trovarci o scrivici.',
          en: 'Our Houses are open to those seeking prayer, silence or a word of comfort. Come visit us or write to us.',
          de: 'Unsere Häuser stehen allen offen, die Gebet, Stille oder ein tröstendes Wort suchen. Besuche uns oder schreib uns.',
          pt: 'As nossas Casas estão abertas a quem procura oração, silêncio ou uma palavra de conforto. Venha nos visitar ou escreva-nos.',
        })}
        primaryLabel={t({ it: 'Scopri le nostre Case', en: 'Discover our Houses', de: 'Entdecke unsere Häuser', pt: 'Conheça nossas Casas' })}
        primaryTo="/cosa-facciamo/case-di-fraternita"
        secondaryLabel={t({ it: 'Contattaci', en: 'Contact us', de: 'Kontaktiere uns', pt: 'Contate-nos' })}
        secondaryTo="/contatti"
      />
      </section>
    </>
  )
}
