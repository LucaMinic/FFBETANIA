import { Link } from 'react-router'

export function ProgettiPage() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] mb-4">I nostri progetti</h1>
      <p className="text-lg text-gray-500 mb-4">
        Le campagne di raccolta fondi attive saranno presto disponibili qui, gestite tramite il nostro nuovo sistema
        di raccolta fondi.
      </p>
      <p className="text-gray-400 text-sm">
        Nel frattempo puoi scoprire{' '}
        <Link to="/progetto-brasile" className="text-[var(--warm-orange)] font-semibold">
          il Progetto Brasile
        </Link>{' '}
        o contattarci per conoscere le iniziative in corso.
      </p>
    </section>
  )
}
