import banner from '../../../assets/sostienici/5x1000-banner.png'
import plasticoScuola from '../../../assets/sostienici/5x1000-plastico-scuola.png'
import locandinaPdf from '../../../assets/sostienici/locandina-5x1000-2026.pdf'

export function CinqueXMillePage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] mb-6">5x1000</h1>

      <img src={banner} alt="5x1000 Fondazione Betania ETS" className="w-full max-h-72 object-cover rounded-2xl mb-8" />

      <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
        Destina il tuo 5x1000 alla Fondazione Betania Onlus/ETS: non ti costa nulla, ma per noi fa una grande
        differenza. Basta indicare il nostro codice fiscale nella tua dichiarazione dei redditi.
      </p>

      <div className="inline-block rounded-2xl bg-[var(--beige)] px-8 py-6 mb-10">
        <p className="text-sm text-gray-500 mb-1">Codice Fiscale</p>
        <p className="text-2xl font-bold text-[var(--deep-blue)] tracking-wide">93346130722</p>
        <p className="text-sm text-gray-500 mt-1">Fondazione Betania Onlus</p>
      </div>

      <img
        src={plasticoScuola}
        alt="Progetto scuola Brasile - esempio di utilizzo dei fondi"
        className="w-full max-h-96 object-cover rounded-2xl mb-4"
      />
      <p className="text-sm text-gray-500 mb-10">
        Un esempio concreto: i fondi del 5x1000 contribuiscono anche alla realizzazione della scuola per il Progetto
        Brasile a Salvador de Bahia.
      </p>

      <a
        href={locandinaPdf}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2.5 rounded-xl bg-[var(--deep-blue)] text-white font-medium shadow-md hover:shadow-lg transition-all"
      >
        Scarica la locandina 5x1000
      </a>
    </section>
  )
}
