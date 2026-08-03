import { useT } from '../context/LanguageContext'
import { Button } from '../components/Button'

export function HomePage() {
  const t = useT()

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24 text-center">
      <h1 className="text-3xl sm:text-4xl font-bold text-[var(--deep-blue)] mb-4">
        {t({ it: 'Benvenuto', en: 'Welcome' })}
      </h1>
      <p className="text-lg text-gray-500 mb-10">
        {t({
          it: 'Questo è il punto di partenza del tuo nuovo progetto React.',
          en: 'This is the starting point of your new React project.',
        })}
      </p>
      <Button to="/chi-siamo">{t({ it: 'Scopri di più', en: 'Learn more' })}</Button>
    </section>
  )
}
