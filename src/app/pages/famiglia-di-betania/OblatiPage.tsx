import oblatiImg from '../../../assets/famiglia-di-betania/oblati-ffb-1.png'

export function OblatiPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h1 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] mb-8 text-center">Oblati</h1>

      <img src={oblatiImg} alt="Oblati FFB" className="w-full max-h-80 object-cover rounded-2xl mb-8" />

      <h2 className="text-2xl font-bold text-[var(--deep-blue)] mb-3">Chi sono e cosa fanno</h2>
      <p className="text-gray-600 leading-relaxed mb-4">
        Gli oblati sono cristiani laici di età adulta, che partecipano ed esprimono il carisma della Fraternità nel
        loro stato di vita e negli ambienti della loro vita quotidiana ordinaria, facendo della propria esistenza un
        dono di oblazione a Dio, per la santificazione propria, della stessa Fraternità, della Chiesa e del mondo.
      </p>
      <p className="text-gray-600 leading-relaxed mb-8">
        Rinnovano annualmente il loro impegno secondo lo Statuto dei familiari della Fraternità Francescana di
        Betania. L'appartenenza avviene in varie forme e modalità.
      </p>

      <div className="grid sm:grid-cols-2 gap-6 mb-10">
        <div className="rounded-2xl border border-gray-100 p-5">
          <h3 className="font-bold text-[var(--deep-blue)] mb-2">Oblati esterni</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Rappresentano una continuità del carisma oltre le mura della Fraternità, guardando alla Sacra Famiglia di
            Nazareth come modello. Sono testimoni del primato dell'Amore di Dio, costruttori di fraternità nella loro
            famiglia, promotori di collaborazione nel loro ambiente sociale e lavorativo.
          </p>
        </div>
        <div className="rounded-2xl border border-gray-100 p-5">
          <h3 className="font-bold text-[var(--deep-blue)] mb-2">Oblati interni</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Affiliati stabilmente, legati spiritualmente mediante promessa di vita evangelica semplice o con voti,
            vivono nelle case della Fraternità, condividendone il carisma e la missione, camminando verso la
            perfezione con maggiore fecondità apostolica.
          </p>
        </div>
      </div>

      <p className="text-gray-600 leading-relaxed">
        Anche i sacerdoti diocesani legati spiritualmente alla Fraternità possono diventare oblati, vivendo lo stesso
        carisma nel loro contesto di vita.
      </p>
    </section>
  )
}
