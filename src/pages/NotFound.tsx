import { GlassButton } from '../components/GlassButton'
import { useLanguage } from '../context/LanguageContext'
import { usePageMeta } from '../hooks/usePageMeta'

export function NotFound() {
  usePageMeta('notFound')
  const { dict } = useLanguage()

  return (
    <div className="flex min-h-[70svh] flex-col items-center justify-center px-4 pt-28 pb-16 text-center">
      <p className="mb-4 text-xs uppercase tracking-[0.2em] text-gold">404</p>
      <h1
        className="mb-4 text-4xl md:text-5xl"
        style={{ letterSpacing: '-0.04em' }}
      >
        {dict.notFound.title}
      </h1>
      <p className="mb-8 max-w-md text-gray-400">{dict.notFound.body}</p>
      <GlassButton to="/" variant="primary">
        {dict.common.backHome}
      </GlassButton>
    </div>
  )
}
