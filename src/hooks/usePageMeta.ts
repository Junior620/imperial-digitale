import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext'

type SeoPage =
  | 'home'
  | 'about'
  | 'services'
  | 'industries'
  | 'approach'
  | 'projects'
  | 'contact'
  | 'notFound'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

export function usePageMeta(page: SeoPage) {
  const { dict, locale } = useLanguage()

  useEffect(() => {
    const seo = dict.seo[page]
    document.title = seo.title
    document.documentElement.lang = locale
    upsertMeta('name', 'description', seo.description)
    upsertMeta('property', 'og:title', seo.title)
    upsertMeta('property', 'og:description', seo.description)
  }, [dict, locale, page])
}
