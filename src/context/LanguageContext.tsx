import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  dictionaries,
  translate,
  translateList,
  type Locale,
  type TranslationDict,
} from '../i18n'

type LanguageContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
  t: (key: string) => string
  tList: (key: string) => string[]
  dict: TranslationDict
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'imperial-digitale-locale'

function readInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'fr'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'en' || stored === 'fr' ? stored : 'fr'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(readInitialLocale)

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
    document.documentElement.lang = next
  }, [])

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'fr' ? 'en' : 'fr')
  }, [locale, setLocale])

  const t = useCallback((key: string) => translate(locale, key), [locale])
  const tList = useCallback((key: string) => translateList(locale, key), [locale])

  const value = useMemo(
    () => ({
      locale,
      setLocale,
      toggleLocale,
      t,
      tList,
      dict: dictionaries[locale],
    }),
    [locale, setLocale, toggleLocale, t, tList],
  )

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
