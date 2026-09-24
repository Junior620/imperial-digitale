import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { footerLinks } from '../data/navigation'

export function Footer() {
  const { t, dict } = useLanguage()

  return (
    <footer className="border-t border-white/10 bg-black px-4 py-14 sm:px-6 md:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <Link to="/" className="mb-4 inline-block" aria-label={dict.brand}>
            <img
              src="/logo.png"
              alt={dict.brand}
              className="h-24 w-auto object-contain sm:h-28"
            />
          </Link>
          <p className="mb-4 text-sm leading-relaxed text-gray-400">
            {t('footer.pillars')}
          </p>
          <p className="text-sm text-gray-500">{t('contact.locationValue')}</p>
          <p className="text-sm text-gray-500">{t('contact.emailValue')}</p>
          <p className="text-sm text-gray-500">{t('contact.phoneValue')}</p>
        </div>

        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-gold">
            {t('footer.links')}
          </p>
          <ul className="space-y-2">
            {footerLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  {t(link.labelKey)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm leading-relaxed text-gray-400">
            {t('footer.message')}
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6">
        <p className="text-xs text-gray-600">{t('footer.rights')}</p>
      </div>
    </footer>
  )
}
