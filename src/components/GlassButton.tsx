import { Link } from 'react-router-dom'
import type { ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'glass'

type Props = {
  children: ReactNode
  variant?: Variant
  to?: string
  className?: string
  delay?: number
} & ButtonHTMLAttributes<HTMLButtonElement>

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium px-6 sm:px-8 py-2.5 sm:py-3 transition-colors animate-blur-fade-up'

export function GlassButton({
  children,
  variant = 'glass',
  to,
  className = '',
  delay = 0,
  ...rest
}: Props) {
  const styles =
    variant === 'primary'
      ? 'bg-white text-black hover:bg-gray-200'
      : 'liquid-glass text-white hover:bg-white/5'

  const style = { animationDelay: `${delay}ms` }
  const classes = `${base} ${styles} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} style={style}>
        {children}
      </Link>
    )
  }

  const { type = 'button', ...buttonProps } = rest

  return (
    <button type={type} className={classes} style={style} {...buttonProps}>
      {children}
    </button>
  )
}
