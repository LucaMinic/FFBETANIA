import { PlaceholderForm } from '../components/PlaceholderForm'
import { PageHero } from '../components/PageHero'
import heroImg from '../../assets/cosa-facciamo/case-di-fraternita-hero.jpg'

export function ContattiPage() {
  return (
    <>
      <PageHero
        image={heroImg}
        title="Contatti"
        subtitle="Scrivici, vieni a trovarci o seguici sui social: siamo felici di ascoltarti."
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
      <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-4 text-center">
        Lasciaci un messaggio o la tua richiesta di preghiera
      </h2>
      <div className="mb-16">
        <PlaceholderForm submitLabel="Invia" contactEmail="info@ffbetania.net" />
      </div>

      <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-4 text-center">Fraternità Francescana di Betania</h2>
      <div className="grid sm:grid-cols-2 gap-6 mb-16 max-w-lg mx-auto">
        <div className="rounded-2xl border border-gray-100 p-5 text-center">
          <p className="font-bold text-[var(--deep-blue)] mb-1">Curia Generalizia</p>
          <p className="text-sm text-gray-500">Via Pasquale Fiore 143 – 70038 Terlizzi (BA)</p>
          <p className="text-sm text-gray-500">CF 93017320727</p>
          <p className="text-sm text-gray-500 mt-2">
            <a href="mailto:info@ffbetania.net" className="text-[var(--warm-orange)] font-semibold">
              info@ffbetania.net
            </a>
          </p>
          <p className="text-sm text-gray-500">
            <a href="tel:+390803517712" className="text-[var(--warm-orange)] font-semibold">
              080 351 77 12
            </a>
          </p>
        </div>
        <div className="rounded-2xl border border-gray-100 p-5 text-center">
          <p className="font-bold text-[var(--deep-blue)] mb-1">Fraternità Francescana di Betania Fondazione ETS</p>
          <p className="text-sm text-gray-500">Via Pasquale Fiore 143 – 70038 Terlizzi (BA)</p>
          <p className="text-sm text-gray-500">CF 93346130722</p>
          <p className="text-sm text-gray-500 mt-2">
            <a href="mailto:fondazione@ffbetania.net" className="text-[var(--warm-orange)] font-semibold">
              fondazione@ffbetania.net
            </a>
          </p>
        </div>
      </div>

      <div className="rounded-2xl overflow-hidden mb-16">
        <iframe
          title="Sede FFBetania - Terlizzi"
          src="https://www.google.com/maps?q=41.13272957928831,16.532682215222547&z=15&output=embed"
          className="w-full h-80 border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <h2 className="text-xl font-bold text-[var(--deep-blue)] mb-4 text-center">Seguici su</h2>
      <div className="flex items-center justify-center gap-6">
        <a
          href="https://www.facebook.com/ffbetania/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--deep-blue)] hover:text-[var(--warm-orange)] font-semibold"
        >
          Facebook
        </a>
        <a
          href="https://www.instagram.com/ffbetania/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--deep-blue)] hover:text-[var(--warm-orange)] font-semibold"
        >
          Instagram
        </a>
        <a
          href="https://www.youtube.com/channel/UC8bXgMxN36jQXagDdPpOwRA"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--deep-blue)] hover:text-[var(--warm-orange)] font-semibold"
        >
          YouTube
        </a>
      </div>
      </section>
    </>
  )
}
