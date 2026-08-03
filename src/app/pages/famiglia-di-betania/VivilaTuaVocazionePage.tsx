import { PlaceholderForm } from '../../components/PlaceholderForm'
import { PageHero } from '../../components/PageHero'
import vitaFraterna from '../../../assets/chi-siamo/vita-fraterna-2026.png'

export function VivilaTuaVocazionePage() {
  return (
    <>
      <PageHero
        image={vitaFraterna}
        title="Vivi la tua vocazione"
        subtitle="Lasciati interpellare dalla chiamata di Dio: scrivici per il tuo cammino di discernimento."
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
      <blockquote className="border-l-4 border-[var(--warm-orange)] pl-4 italic text-gray-600 mb-4 text-left max-w-md mx-auto">
        «Abbi la certezza che, se riconosci una chiamata di Dio e la segui, ciò sarà la cosa che darà pienezza alla
        tua vita.» — Papa Francesco
      </blockquote>
      <blockquote className="border-l-4 border-[var(--warm-orange)] pl-4 italic text-gray-600 mb-10 text-left max-w-md mx-auto">
        «Signore, cosa vuoi che io faccia per te? Va', Francesco, ripara la mia casa.» — San Francesco in dialogo con
        Gesù
      </blockquote>

      <p className="text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
        Lo Spirito Santo continua a suscitare vocazioni di speciale consacrazione al servizio suo e della Chiesa,
        nella quale è inserita e vive la nostra Fraternità. Se desideri approfondire il tuo discernimento vocazionale
        nel nostro Istituto, scrivici.
      </p>

      <PlaceholderForm submitLabel="Invia" contactEmail="info@ffbetania.net" />
      </section>
    </>
  )
}
