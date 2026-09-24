import en from './en'
import fr, { type TranslationDict } from './fr'

export type Locale = 'fr' | 'en'

export const dictionaries: Record<Locale, TranslationDict> = {
  fr,
  en,
}

type PathValue = string | readonly string[] | { readonly [key: string]: PathValue }

function getByPath(obj: PathValue, path: string): unknown {
  return path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object' && key in (acc as object)) {
      return (acc as Record<string, unknown>)[key]
    }
    return undefined
  }, obj)
}

export function translate(locale: Locale, key: string): string {
  const value = getByPath(dictionaries[locale] as unknown as PathValue, key)
  if (typeof value === 'string') return value
  return key
}

export function translateList(locale: Locale, key: string): string[] {
  const value = getByPath(dictionaries[locale] as unknown as PathValue, key)
  if (Array.isArray(value) && value.every((v) => typeof v === 'string')) {
    return value as string[]
  }
  return []
}

export type { TranslationDict }
