import { PlaceholderForm } from '../../components/PlaceholderForm'

export function DonaOraPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] mb-4">Dona ora</h1>
      <p className="text-lg text-gray-600 leading-relaxed mb-10 max-w-2xl mx-auto">
        "Insieme, con l'aiuto di Dio, possiamo fare molto per chi ha bisogno." Sostieni le attività della Fraternità
        Francescana di Betania e della Fondazione Betania ETS con una donazione libera.
      </p>

      <div className="rounded-2xl border border-dashed border-gray-300 bg-gray-50 p-6 max-w-md mx-auto mb-10">
        <p className="text-gray-500 text-sm">
          Il modulo di pagamento (carta di credito, PayPal, bonifico SEPA) sarà attivo a breve, collegato al nostro
          nuovo gestionale.
        </p>
      </div>

      <PlaceholderForm submitLabel="Voglio essere avvisato" contactEmail="info@ffbetania.net" withMessage={false} />
    </section>
  )
}
