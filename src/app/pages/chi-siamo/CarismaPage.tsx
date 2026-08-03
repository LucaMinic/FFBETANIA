export function CarismaPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] mb-8 text-center">Carisma</h1>

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3">Preghiera</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Le parole del nostro fondatore ci indicano che nell'intimo rapporto con Dio viviamo la nostra consacrazione e
        generiamo la fraternità. Dedichiamo, quotidianamente, ampio tempo alla preghiera personale e a quella
        comunitaria, arricchita da varie forme di preghiera cristiana.
      </p>
      <blockquote className="border-l-4 border-[var(--warm-orange)] pl-4 italic text-gray-600 my-6">
        "La preghiera è il primo pilastro del nostro carisma perché precede gli altri e in un certo senso li genera.
        [...] è l'alimento indispensabile per mantenere vivo il fuoco dell'amore vero che ci rende capaci di
        un'autentica vita fraterna e di una vera accoglienza." — Padre Pancrazio Gaudioso
      </blockquote>

      <div className="grid sm:grid-cols-2 gap-6 mb-8">
        <div>
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">Celebrazione Eucaristica</h3>
          <p className="text-sm text-gray-600">
            "Fonte e culmine di tutta la vita cristiana" (LG 11). Vertice della preghiera comunitaria, centro della
            spiritualità di fede e fonte della nostra missione.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">Liturgia delle Ore</h3>
          <p className="text-sm text-gray-600">
            Scandisce il ritmo della giornata: Ufficio delle letture, Lodi al mattino, Vespri la sera, Compieta.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">Preghiera notturna</h3>
          <p className="text-sm text-gray-600">
            Almeno tre volte alla settimana ci alziamo di notte a rendere lode al Signore, per crescere nella purezza
            del cuore.
          </p>
        </div>
        <div>
          <h3 className="font-bold text-[var(--deep-blue)] mb-1">Santo Rosario</h3>
          <p className="text-sm text-gray-600">
            Esprime il nostro culto speciale alla Vergine Madre di Dio, unendo meditazione e preghiera del cuore.
          </p>
        </div>
      </div>
      <p className="text-gray-600 leading-relaxed mb-12">
        <strong>Altre forme di preghiera</strong> — L'Adorazione Eucaristica, la meditazione della Parola di Dio e la
        Lode Spontanea sono altre forme presenti nella nostra vita di preghiera.
      </p>

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3">Accoglienza</h2>
      <blockquote className="border-l-4 border-[var(--warm-orange)] pl-4 italic text-gray-600 my-6">
        Cristo è per eccellenza il testimone di un Dio accogliente. Gesù a Betania è accolto come Signore e Maestro,
        come un amico e come un fratello (cfr. Lc 10,38-42; Gv 11,1-44; 12,1-3).
      </blockquote>
      <p className="text-gray-600 leading-relaxed mb-4">
        Condividendo i diversi momenti della nostra giornata, chi viene nelle nostre Case può trovare nella preghiera,
        nei sacramenti e nella vita fraterna, un incontro vero e vivificante con Gesù.
      </p>
      <p className="font-semibold text-[var(--deep-blue)] mb-2">La nostra accoglienza è rivolta a:</p>
      <ul className="list-disc list-inside text-gray-600 space-y-1 mb-12">
        <li>Chi cerca e vuole fare un'esperienza più profonda di Dio</li>
        <li>Chi sta percorrendo un cammino di discernimento vocazionale</li>
        <li>Sacerdoti e consacrati affaticati dagli impegni apostolici</li>
        <li>Giovani disorientati e chi sente il bisogno di ritirarsi dalla frenesia quotidiana</li>
        <li>Famiglie che intendono riscoprire la bellezza di questa vocazione</li>
      </ul>

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3">Vita Fraterna</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        La Betania evangelica era la casa di Marta, Maria e Lazzaro: due sorelle e un fratello che godevano della
        presenza di Gesù di Nazareth e della sua amicizia vissuta in un clima di famiglia. La nostra Betania è la casa
        di fratelli e sorelle che condividono la stessa vita invocando ogni giorno la presenza di Cristo.
      </p>
      <blockquote className="border-l-4 border-[var(--warm-orange)] pl-4 italic text-gray-600">
        "È meglio avere la sensazione di camminare poco insieme che l'illusione di camminare di più da soli, perché a
        quell'«insieme» c'è Lui, Gesù, che ha garantito la sua presenza, senza la quale non possiamo fare nulla di
        buono." — Padre Pancrazio Gaudioso
      </blockquote>
    </section>
  )
}
