import { Link } from 'react-router'
import { AnimatedSection } from './AnimatedSection'

interface PageCtaProps {
  title: string
  text: string
  primaryLabel: string
  primaryTo: string
  secondaryLabel?: string
  secondaryTo?: string
}

export function PageCta({ title, text, primaryLabel, primaryTo, secondaryLabel, secondaryTo }: PageCtaProps) {
  return (
    <AnimatedSection>
      <div className="rounded-[2rem] bg-gradient-to-br from-[var(--deep-blue)] to-[#4a5a69] p-8 sm:p-12 mt-4 mb-16 sm:mb-20 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{title}</h2>
        <p className="text-white/80 max-w-xl mx-auto mb-6 leading-relaxed">{text}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            to={primaryTo}
            className="inline-block px-6 py-2.5 rounded-xl bg-gradient-to-br from-[#f5b942] via-[#f7c968] to-[#f5b942] text-white font-medium shadow-md hover:shadow-lg transition-all"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryTo && (
            <Link
              to={secondaryTo}
              className="inline-block px-6 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/40 text-white font-medium hover:bg-white/20 transition-all"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </AnimatedSection>
  )
}
