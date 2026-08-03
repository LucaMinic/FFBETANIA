import { useLanguage } from '../context/LanguageContext'

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()

  return (
    <div className="flex items-center gap-1.5">
      <button
        type="button"
        onClick={() => setLang('it')}
        disabled={lang === 'it'}
        className="px-2.5 py-1 text-sm font-semibold rounded-lg border border-gray-200 text-[var(--deep-blue)] transition-colors hover:border-gray-300 hover:bg-gray-50 disabled:border-[var(--warm-orange)] disabled:bg-[var(--warm-orange)] disabled:text-white disabled:cursor-default"
      >
        IT
      </button>
      <button
        type="button"
        onClick={() => setLang('en')}
        disabled={lang === 'en'}
        className="px-2.5 py-1 text-sm font-semibold rounded-lg border border-gray-200 text-[var(--deep-blue)] transition-colors hover:border-gray-300 hover:bg-gray-50 disabled:border-[var(--warm-orange)] disabled:bg-[var(--warm-orange)] disabled:text-white disabled:cursor-default"
      >
        EN
      </button>
    </div>
  )
}
