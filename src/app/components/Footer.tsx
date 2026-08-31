import { Link } from 'react-router'
import { Facebook, Instagram, Youtube } from 'lucide-react'
import { useT } from '../context/LanguageContext'
import logoDark from '../../assets/logo/ffbetania-logo-dark.svg'

export function Footer() {
  const t = useT()

  return (
    <footer className="bg-[var(--deep-blue)] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 grid gap-8 sm:grid-cols-3">
        <div>
          <img src={logoDark} alt="FFBetania" className="h-10 w-auto mb-3 brightness-0 invert" />
          <p className="font-bold mb-2">Fraternità Francescana di Betania</p>
          <p className="text-sm text-white/70">Via Pasquale Fiore 143 – 70038 Terlizzi (BA)</p>
          <p className="text-sm text-white/70">CF 93017320727</p>
          <p className="text-sm text-white/70">
            <a href="mailto:info@ffbetania.net" className="hover:text-[var(--warm-orange-light)]">
              info@ffbetania.net
            </a>
            {' · '}
            <a href="tel:+390803517712" className="hover:text-[var(--warm-orange-light)]">
              080 351 77 12
            </a>
          </p>
          <p className="font-bold mt-3">Fraternità Francescana di Betania Fondazione ETS</p>
          <p className="text-sm text-white/70">CF 93346130722</p>
          <p className="text-sm text-white/70">
            <a href="mailto:fondazione@ffbetania.net" className="hover:text-[var(--warm-orange-light)]">
              fondazione@ffbetania.net
            </a>
          </p>
        </div>

        <nav className="flex flex-col gap-2">
          <Link to="/chi-siamo" className="text-sm font-semibold text-white/90 hover:text-[var(--warm-orange-light)] transition-colors">
            {t({ it: 'Chi siamo', en: 'About us', de: 'Über uns', pt: 'Quem somos' })}
          </Link>
          <Link to="/cosa-facciamo" className="text-sm font-semibold text-white/90 hover:text-[var(--warm-orange-light)] transition-colors">
            {t({ it: 'Attività di solidarietà', en: 'What we do', de: 'Unsere Aktivitäten', pt: 'O que fazemos' })}
          </Link>
          <Link to="/sostienici" className="text-sm font-semibold text-white/90 hover:text-[var(--warm-orange-light)] transition-colors">
            {t({ it: 'Sostienici', en: 'Support us', de: 'Unterstütze uns', pt: 'Apoie-nos' })}
          </Link>
          <Link to="/sostienici/5x1000" className="text-sm font-semibold text-white/90 hover:text-[var(--warm-orange-light)] transition-colors">
            5x1000
          </Link>
          <Link to="/contatti" className="text-sm font-semibold text-white/90 hover:text-[var(--warm-orange-light)] transition-colors">
            {t({ it: 'Contatti', en: 'Contact', de: 'Kontakt', pt: 'Contato' })}
          </Link>
        </nav>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/ffbetania/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[var(--warm-orange-light)]">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://www.instagram.com/ffbetania/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[var(--warm-orange-light)]">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.youtube.com/channel/UC8bXgMxN36jQXagDdPpOwRA" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-[var(--warm-orange-light)]">
              <Youtube className="w-5 h-5" />
            </a>
          </div>
          <Link to="/privacy-policy" className="text-sm text-white/70 hover:text-[var(--warm-orange-light)] transition-colors">
            {t({ it: 'Privacy Policy', en: 'Privacy Policy', de: 'Datenschutz', pt: 'Privacidade' })}
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <p className="max-w-6xl mx-auto px-4 sm:px-6 py-4 text-xs text-white/60">
          &copy; {new Date().getFullYear()} FFBetania — {t({ it: 'Tutti i diritti riservati.', en: 'All rights reserved.', de: 'Alle Rechte vorbehalten.', pt: 'Todos os direitos reservados.' })}
        </p>
      </div>
    </footer>
  )
}
