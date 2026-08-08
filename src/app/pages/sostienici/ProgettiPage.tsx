import { Link } from 'react-router'
import { PageHero } from '../../components/PageHero'
import { PageCta } from '../../components/PageCta'
import progettoScuola from '../../../assets/progetto-brasile/progetto-scuola.jpg'

export function ProgettiPage() {
  return (
    <>
      <PageHero
        image={progettoScuola}
        title="I nostri progetti"
        subtitle="Le campagne di raccolta fondi della Fraternità Francescana di Betania."
      />
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
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

      <PageCta
        title="Non aspettare, il bisogno è oggi"
        text="Anche senza una campagna attiva, ogni donazione sostiene subito il nostro servizio quotidiano di solidarietà."
        primaryLabel="Dona ora"
        primaryTo="/sostienici/dona-ora"
        secondaryLabel="Progetto Brasile"
        secondaryTo="/progetto-brasile"
      />
      </section>
    </>
  )
}
