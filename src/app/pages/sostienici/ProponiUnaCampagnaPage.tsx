interface Passo {
  numero: number
  titolo: string
  descrizione: string
}

const passi: Passo[] = [
  {
    numero: 1,
    titolo: "Trova l'occasione giusta!",
    descrizione: 'Un compleanno, una laurea, un evento etc. Ogni occasione è buona per avviare una raccolta fondi.',
  },
  {
    numero: 2,
    titolo: 'Crea la tua campagna',
    descrizione:
      'È facile: registrati e personalizza la tua pagina con foto e dettagli. Per qualsiasi cosa puoi sempre contare sul nostro aiuto.',
  },
  {
    numero: 3,
    titolo: 'Invita a donare i tuoi amici, familiari e colleghi',
    descrizione: "Controlla l'andamento della raccolta e aggiornali.",
  },
]

export function ProponiUnaCampagnaPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] mb-4">Proponi la tua campagna</h1>
      <p className="text-lg text-gray-600 leading-relaxed mb-12 max-w-2xl mx-auto">
        Vuoi farti portavoce dei nostri progetti? Attivati in prima persona e crea la tua personale campagna di
        raccolta fondi. Coinvolgi familiari, amici e colleghi e invitali a partecipare alla tua iniziativa a sostegno
        di un progetto in cui credi.
      </p>

      <div className="grid sm:grid-cols-3 gap-6 text-left">
        {passi.map((p) => (
          <div key={p.numero} className="rounded-2xl border border-gray-100 p-5">
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[var(--warm-orange)] text-white font-bold text-sm mb-3">
              {p.numero}
            </span>
            <h3 className="font-bold text-[var(--deep-blue)] mb-1">{p.titolo}</h3>
            <p className="text-sm text-gray-500">{p.descrizione}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
