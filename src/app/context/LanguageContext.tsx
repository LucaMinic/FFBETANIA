import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

export type Lang = 'it' | 'en' | 'de' | 'pt'

const SUPPORTED_LANGS: Lang[] = ['it', 'en', 'de', 'pt']

interface LanguageContextType {
  lang: Lang
  setLang: (lang: Lang) => void
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'it',
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem('lang')
    if (saved && SUPPORTED_LANGS.includes(saved as Lang)) return saved as Lang

    const browserLang = navigator.language.slice(0, 2)
    return SUPPORTED_LANGS.includes(browserLang as Lang) ? (browserLang as Lang) : 'it'
  })

  const setLang = (newLang: Lang) => {
    setLangState(newLang)
    localStorage.setItem('lang', newLang)
  }

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

export function useT() {
  const { lang } = useLanguage()
  return (strings: { it: string; en: string; de: string; pt: string }) => strings[lang]
}
