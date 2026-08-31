import { ChevronDown } from 'lucide-react'
import { useLanguage, useT, type Lang } from '../context/LanguageContext'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from './ui/dropdown-menu'

const FLAG_STYLE = { width: '1.25rem', height: '0.9rem' }

function FlagIT({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 60" style={FLAG_STYLE} className={className} role="img" aria-label="Italiano">
      <rect width="30" height="60" x="0" fill="#009246" />
      <rect width="30" height="60" x="30" fill="#FFFFFF" />
      <rect width="30" height="60" x="60" fill="#CE2B37" />
    </svg>
  )
}

function FlagGB({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 60" style={FLAG_STYLE} className={className} role="img" aria-label="English" preserveAspectRatio="xMidYMid slice">
      <rect width="90" height="60" fill="#00247D" />
      <path d="M0,0 L90,60 M90,0 L0,60" stroke="#FFFFFF" strokeWidth="12" />
      <path d="M0,0 L90,60 M90,0 L0,60" stroke="#CF142B" strokeWidth="4" />
      <path d="M45,0 V60 M0,30 H90" stroke="#FFFFFF" strokeWidth="20" />
      <path d="M45,0 V60 M0,30 H90" stroke="#CF142B" strokeWidth="12" />
    </svg>
  )
}

function FlagDE({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 60" style={FLAG_STYLE} className={className} role="img" aria-label="Deutsch">
      <rect width="90" height="20" y="0" fill="#000000" />
      <rect width="90" height="20" y="20" fill="#DD0000" />
      <rect width="90" height="20" y="40" fill="#FFCE00" />
    </svg>
  )
}

function FlagBR({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 90 60" style={FLAG_STYLE} className={className} role="img" aria-label="Português (Brasil)">
      <rect width="90" height="60" fill="#009739" />
      <polygon points="45,8 82,30 45,52 8,30" fill="#FEDD00" />
      <circle cx="45" cy="30" r="13" fill="#012169" />
    </svg>
  )
}

interface LangOption {
  code: Lang
  label: string
  Flag: typeof FlagIT
}

const options: LangOption[] = [
  { code: 'it', label: 'Italiano', Flag: FlagIT },
  { code: 'en', label: 'English', Flag: FlagGB },
  { code: 'de', label: 'Deutsch', Flag: FlagDE },
  { code: 'pt', label: 'Português (BR)', Flag: FlagBR },
]

export function LanguageSwitcher() {
  const { lang, setLang } = useLanguage()
  const t = useT()
  const current = options.find((o) => o.code === lang) ?? options[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          type="button"
          aria-label={t({ it: 'Seleziona lingua', en: 'Select language', de: 'Sprache auswählen', pt: 'Selecionar idioma' })}
          className="flex items-center gap-1.5 pl-2 pr-1.5 py-1.5 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-colors"
        >
          <current.Flag className="rounded-xs" />
          <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {options.map((o) => (
          <DropdownMenuItem key={o.code} onSelect={() => setLang(o.code)}>
            <o.Flag className="rounded-xs mr-2" />
            {o.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
