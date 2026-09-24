import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  delay?: number
}

export function LiquidCard({ children, className = '', delay = 0 }: Props) {
  return (
    <div
      className={`liquid-glass rounded-2xl p-6 md:p-8 animate-blur-fade-up ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
