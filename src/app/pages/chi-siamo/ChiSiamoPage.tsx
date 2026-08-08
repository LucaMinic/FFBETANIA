import { Link } from 'react-router'
import { PageHero } from '../../components/PageHero'
import { PageCta } from '../../components/PageCta'
import fondatore from '../../../assets/chi-siamo/il-nostro-fondatore.jpg'
import iconMariana from '../../../assets/chi-siamo/ico-mariana.svg'
import iconTau from '../../../assets/chi-siamo/ico-tau.svg'

export function ChiSiamoPage() {
  return (
    <>
      <PageHero
        image={fondatore}
        title="Chi siamo"
        subtitle="Un Istituto di Vita Consacrata nato dalla preghiera e vissuto nell'accoglienza."
        imageAlt="Il nostro fondatore"
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <p className="text-lg text-gray-600 leading-relaxed mb-4">
        <strong>Fraternità Francescana di Betania</strong> è un Istituto di Vita Consacrata di diritto diocesano
        composto da fratelli, sia chierici che laici, e da sorelle che si consacrano a Dio mediante i voti pubblici
        di castità, povertà ed obbedienza.
      </p>
      <p className="text-lg text-gray-600 leading-relaxed mb-4">
        Questa nostra consacrazione si realizza attraverso il carisma della Fraternità Francescana di Betania, che si
        esprime nella preghiera e nell'accoglienza, elementi caratteristici della Betania evangelica (cfr. Lc
        10,38-42), vissuti in un profondo contesto di vita fraterna tipico dell'esperienza Francescana.
      </p>

      <blockquote className="border-l-4 border-[var(--warm-orange)] pl-4 italic text-gray-600 my-8">
        "Non sii talmente dedito all'attività di Marta da dimenticare il silenzio di Maria; la Vergine Madre che sì
        ben concilia l'uno e l'altro ufficio ti sia di dolce modello e di ispirazione." — San Pio a Padre Pancrazio
      </blockquote>

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3">Spiritualità mariana-francescana</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        L'icona evangelica di Betania ci guida nel vivere quotidianamente il Vangelo, guidati dalla luce della Beata
        Vergine Maria e dalla semplicità di san Francesco d'Assisi.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        <div className="flex gap-3 items-start">
          <img src={iconMariana} alt="" className="w-10 h-10 shrink-0" />
          <p className="text-gray-600 leading-relaxed">
            <strong>Mariana</strong> — La Vergine Maria che accolse nel cuore e nel corpo il Verbo di Dio è per noi
            l'icona principale della vera accoglienza.
          </p>
        </div>
        <div className="flex gap-3 items-start">
          <img src={iconTau} alt="" className="w-10 h-10 shrink-0" />
          <p className="text-gray-600 leading-relaxed">
            <strong>Francescana</strong> — Per apprendere lo stile di vita del vero discepolo di Cristo imitiamo il
            serafico padre san Francesco d'Assisi.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3">I nostri riferimenti spirituali</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Attenzione e amore particolare dedichiamo, inoltre, alla vita e agli scritti di san Pio da Pietrelcina, che ci
        è di esempio nella vita di preghiera, nell'esercizio eroico delle virtù, nello spirito di sacrificio e di
        dedizione al ministero presbiterale e nell'imitazione del Cristo crocifisso.
      </p>
      <p className="text-gray-600 leading-relaxed mb-8">
        Un altro riferimento importante nella spiritualità della Fraternità è San Giuseppe. Come Dio ha affidato a
        San Giuseppe il suo Figlio Gesù e la sua Santissima Madre, così noi ci affidiamo a lui come nostro patrono e
        protettore. Egli, custode della Santa Famiglia, è per noi modello di umiltà nel vivere i nostri doveri.
      </p>

      <div className="grid sm:grid-cols-3 gap-4">
        <Link
          to="/chi-siamo/carisma"
          className="rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">Il nostro carisma</h3>
          <p className="text-sm text-gray-500">Preghiera, Accoglienza, Vita Fraterna.</p>
        </Link>
        <Link
          to="/chi-siamo/padre-pancrazio"
          className="rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">Padre Pancrazio</h3>
          <p className="text-sm text-gray-500">La storia del nostro fondatore.</p>
        </Link>
        <Link
          to="/chi-siamo/storia"
          className="rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">La nostra storia</h3>
          <p className="text-sm text-gray-500">Cronologia e governo generale.</p>
        </Link>
      </div>

      <PageCta
        title="Vuoi conoscerci meglio?"
        text="Le nostre Case sono aperte a chi cerca preghiera, silenzio o una parola di conforto. Vieni a trovarci o scrivici."
        primaryLabel="Scopri le nostre Case"
        primaryTo="/cosa-facciamo/case-di-fraternita"
        secondaryLabel="Contattaci"
        secondaryTo="/contatti"
      />
      </section>
    </>
  )
}
