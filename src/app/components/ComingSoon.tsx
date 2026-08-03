interface ComingSoonProps {
  title: string
}

export function ComingSoon({ title }: ComingSoonProps) {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] mb-4">{title}</h1>
      <p className="text-lg text-gray-500">Contenuto in arrivo.</p>
    </section>
  )
}
