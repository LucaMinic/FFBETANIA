export function GiovaniDiBetaniaPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] mb-8 text-center">Giovani di Betania</h1>

      <blockquote className="border-l-4 border-[var(--warm-orange)] pl-4 italic text-gray-600 mb-6">
        "Io spero e auguro che facciate quello che non ho fatto io! Avrei voluto fare di più. Sempre di più. Sempre di
        più e sempre meglio." — Padre Pancrazio ai GdB
      </blockquote>

      <p className="text-gray-600 leading-relaxed mb-4">
        Sono ragazzi e ragazze, di età compresa fra gli 11 e i 26 anni, che intraprendono un cammino di scoperta e di
        approfondimento della fede cristiana, basato soprattutto sulla preghiera, l'amicizia, la condivisione e la
        missione, secondo la spiritualità della Fraternità Francescana di Betania.
      </p>
      <p className="text-gray-600 leading-relaxed mb-10">
        Attraverso incontri mensili nelle fraternità locali e appuntamenti nazionali annuali di preghiera, formazione,
        attività di gruppo, giochi e momenti di svago, i giovani crescono nello sperimentare la gioia e la bellezza
        dello stare insieme come amici, uniti e protesi verso la stessa meta: Gesù, nostro Amico e Signore.
      </p>

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-4">Le tre fasce d'età</h2>
      <p className="text-gray-500 text-sm mb-4">
        I gruppi prendono il nome dai personaggi della Betania evangelica: Marta, Maria e Lazzaro.
      </p>
      <div className="grid sm:grid-cols-3 gap-4 mb-10">
        <div className="rounded-2xl border border-gray-100 p-5">
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">Marta</h3>
          <p className="text-sm text-gray-500">Ragazzi dai 10 ai 14 anni</p>
        </div>
        <div className="rounded-2xl border border-gray-100 p-5">
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">Maria</h3>
          <p className="text-sm text-gray-500">Ragazzi dai 15 ai 18 anni</p>
        </div>
        <div className="rounded-2xl border border-gray-100 p-5">
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">Lazzaro</h3>
          <p className="text-sm text-gray-500">Ragazzi dai 19 ai 26 anni</p>
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed">
        Due volte all'anno tutti i giovani dell'Italia e della Svizzera italiana, ma anche oltreoceano i JB del
        Brasile, si incontrano in occasione di un campo nazionale, della durata di alcuni giorni, per condividere,
        giocare e pregare insieme, coltivando profonde relazioni di amicizia.
      </p>

      <p className="mt-10 text-center text-gray-500">
        Contatta gli animatori:{' '}
        <a href="mailto:gdb@ffbetania.net" className="text-[var(--warm-orange)] font-semibold">
          gdb@ffbetania.net
        </a>
      </p>
    </section>
  )
}
