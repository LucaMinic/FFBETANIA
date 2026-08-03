import type { ReactNode, MouseEvent } from 'react'
import { Link } from 'react-router'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  to?: string
  href?: string
  className?: string
}

export function Button({ children, variant = 'primary', onClick, to, href, className: customClassName }: ButtonProps) {
  const baseStyles = 'px-8 py-3 rounded-2xl transition-all duration-500 font-medium text-base tracking-wide inline-block text-center'
  const variantStyles = {
    primary: 'bg-gradient-to-br from-[#f5b942] via-[#f7c968] to-[#f5b942] bg-size-200 bg-pos-0 hover:bg-pos-100 text-white shadow-[0_8px_30px_rgba(245,185,66,0.4)] hover:shadow-[0_12px_40px_rgba(245,185,66,0.5)] hover:-translate-y-1',
    secondary: 'bg-[var(--deep-blue)] text-white shadow-[0_8px_30px_rgba(93,112,130,0.3)] hover:shadow-[0_12px_40px_rgba(93,112,130,0.4)] hover:-translate-y-1 hover:bg-[#4d6374]',
  }

  const className = `${baseStyles} ${variantStyles[variant]} ${customClassName || ''}`

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    )
  }

  if (href) {
    const isAnchor = href.startsWith('#')

    const handleAnchorClick = (e: MouseEvent<HTMLAnchorElement>) => {
      if (!isAnchor) return
      e.preventDefault()
      const targetId = href.slice(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
        window.history.pushState(null, '', href)
      }
    }

    return (
      <a
        href={href}
        onClick={isAnchor ? handleAnchorClick : undefined}
        {...(!isAnchor && { target: '_blank', rel: 'noopener noreferrer' })}
        className={className}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {children}
    </button>
  )
}
