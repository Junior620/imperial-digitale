import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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

const SITE_URL = (
  import.meta.env.VITE_SITE_URL || 'https://imperial-digitale.vercel.app'
).replace(/\/$/, '')

const OG_IMAGE = `${SITE_URL}/og.png`

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.content = content
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  if (!el) {
    el = document.createElement('link')
    el.rel = 'canonical'
    document.head.appendChild(el)
  }
  el.href = href
}

export function usePageMeta(page: SeoPage) {
  const { dict, locale } = useLanguage()
  const { pathname } = useLocation()

  useEffect(() => {
    const seo = dict.seo[page]
    const url = `${SITE_URL}${pathname === '/' ? '/' : pathname}`
    const ogLocale = locale === 'fr' ? 'fr_FR' : 'en_US'

    document.title = seo.title
    document.documentElement.lang = locale

    upsertMeta('name', 'description', seo.description)

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', dict.brand)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:title', seo.title)
    upsertMeta('property', 'og:description', seo.description)
    upsertMeta('property', 'og:image', OG_IMAGE)
    upsertMeta('property', 'og:image:width', '1200')
    upsertMeta('property', 'og:image:height', '630')
    upsertMeta('property', 'og:locale', ogLocale)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', seo.title)
    upsertMeta('name', 'twitter:description', seo.description)
    upsertMeta('name', 'twitter:image', OG_IMAGE)

    upsertCanonical(url)
  }, [dict, locale, page, pathname])
}
