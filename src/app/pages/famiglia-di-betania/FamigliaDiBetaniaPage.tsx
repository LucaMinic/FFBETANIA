import { Link } from 'react-router'
import famigliari from '../../../assets/famiglia-di-betania/famigliari.jpg'

export function FamigliaDiBetaniaPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] mb-6 text-center">Famiglia di Betania</h1>

      <img src={famigliari} alt="Famiglia di Betania" className="w-full max-h-72 object-cover rounded-2xl mb-8" />

      <blockquote className="border-l-4 border-[var(--warm-orange)] pl-4 italic text-gray-600 mb-6">
        "Portatori di pace, unità, gioia e speranza, secondo lo stile della Fraternità, nella società e nella Chiesa
        dove sono chiamati a fiorire." — dallo Statuto dei Familiari
      </blockquote>

      <p className="text-gray-600 leading-relaxed mb-4">
        Insieme alla Fraternità Francescana di Betania, come Istituto di vita consacrata, è fiorita negli anni una
        grande famiglia spirituale. Sono i Familiari della Fraternità che, a diverso titolo e con modalità ed impegni
        differenti, partecipano alla vita dell'Istituto e al suo carisma.
      </p>
      <p className="text-gray-600 leading-relaxed mb-10">
        Essi vivono pienamente la realtà sociale ed ecclesiale in cui sono inseriti, attenti alle molteplici nuove
        povertà dell'uomo contemporaneo, impegnandosi a portare pace, unità e gioia nella famiglia, nel luogo di
        lavoro, nella società e nella Chiesa.
      </p>

      <div className="grid sm:grid-cols-3 gap-4 mb-12">
        <Link
          to="/famiglia-di-betania/giovani-di-betania"
          className="rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">Giovani di Betania</h3>
          <p className="text-sm text-gray-500">Ragazzi e ragazze dagli 11 ai 26 anni.</p>
        </Link>
        <Link
          to="/famiglia-di-betania/gruppo-ancilla-domini"
          className="rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">Gruppi Ancilla Domini</h3>
          <p className="text-sm text-gray-500">18 gruppi di preghiera in tutta Italia.</p>
        </Link>
        <Link
          to="/famiglia-di-betania/oblati"
          className="rounded-2xl border border-gray-100 p-5 hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">Oblati</h3>
          <p className="text-sm text-gray-500">Laici che condividono il nostro carisma.</p>
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-2">Gruppo Nazareth</h2>
          <p className="text-gray-600 leading-relaxed">
            Rivolto ai giovani adulti dai 25/26 ai 40 anni desiderosi di approfondire la conoscenza della loro fede,
            secondo lo stile della Fraternità Francescana di Betania. Si incontrano periodicamente per pregare
            insieme, vivere momenti di catechesi, riflessione e condivisione.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-2">Gruppi di famiglie</h2>
          <p className="text-gray-600 leading-relaxed">
            La nostra accoglienza specifica, unita alla preghiera e alla vita fraterna, aiuta a rigenerare singoli e
            famiglie. Si propongono progetti tematici per un percorso di formazione che aiuti i coniugi a crescere
            nella fede, come famiglia e come coppia.
          </p>
        </div>
      </div>

      <div className="text-center border-t border-gray-100 pt-10">
        <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-2">Senti una chiamata più grande?</h2>
        <p className="text-gray-500 mb-4">Scopri il percorso di discernimento vocazionale nel nostro Istituto.</p>
        <Link
          to="/famiglia-di-betania/vivi-la-tua-vocazione"
          className="inline-block px-6 py-2.5 rounded-xl bg-[var(--deep-blue)] text-white font-medium shadow-md hover:shadow-lg transition-all"
        >
          Vivi la tua vocazione
        </Link>
      </div>
    </section>
  )
}
