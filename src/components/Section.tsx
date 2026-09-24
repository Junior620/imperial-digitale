import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  id?: string
  dark?: boolean
}

export function Section({ children, className = '', id, dark }: Props) {
  return (
    <section
      id={id}
      className={`relative px-4 py-16 sm:px-6 md:px-12 md:py-24 ${
        dark ? 'bg-navy' : ''
      } ${className}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  )
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gold">
      {children}
    </p>
  )
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2
      className="mb-6 text-3xl font-normal tracking-tight sm:text-4xl md:text-5xl"
      style={{ letterSpacing: '-0.03em' }}
    >
      {children}
    </h2>
  )
}
