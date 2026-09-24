import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { navigation } from '../data/navigation'

export function Navbar() {
  const { t, toggleLocale, brand } = useNavBrand()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="absolute top-0 right-0 left-0 z-50 flex items-center justify-between px-4 py-4 sm:px-6 md:px-12 md:py-6">
        <Link
          to="/"
          className="animate-blur-fade-up flex items-center"
          style={{ animationDelay: '0ms' }}
          onClick={() => setMenuOpen(false)}
          aria-label={brand}
        >
          <img
            src="/logo.png"
            alt={brand}
            className="h-16 w-auto object-contain sm:h-20 md:h-24"
          />
        </Link>

        <div className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-5 xl:flex xl:gap-7">
          {navigation.map((item, i) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `animate-blur-fade-up text-sm transition-colors hover:text-gray-300 ${
                  isActive ? 'text-white' : 'text-white/80'
                }`
              }
              style={{ animationDelay: `${100 + i * 40}ms` }}
            >
              {t(item.labelKey)}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={toggleLocale}
            className="liquid-glass animate-blur-fade-up hidden rounded-full px-4 py-2 text-sm sm:inline-flex"
            style={{ animationDelay: '350ms' }}
            aria-label="Toggle language"
          >
            {t('nav.lang')}
          </button>

          <Link
            to="/contact"
            className="liquid-glass animate-blur-fade-up hidden rounded-full px-4 py-2 text-sm md:inline-flex md:px-6"
            style={{ animationDelay: '400ms' }}
          >
            {t('nav.contact')}
          </Link>

          <button
            type="button"
            className="liquid-glass animate-blur-fade-up relative flex h-10 w-10 items-center justify-center rounded-full xl:hidden"
            style={{ animationDelay: '350ms' }}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <Menu
              size={18}
              className={`absolute transition-all duration-500 ease-out ${
                menuOpen
                  ? 'rotate-180 scale-50 opacity-0'
                  : 'rotate-0 scale-100 opacity-100'
              }`}
            />
            <X
              size={18}
              className={`absolute transition-all duration-500 ease-out ${
                menuOpen
                  ? 'rotate-0 scale-100 opacity-100'
                  : '-rotate-180 scale-50 opacity-0'
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        className={`fixed top-[72px] right-0 left-0 z-40 border-t border-b border-gray-800 bg-gray-900/95 shadow-2xl backdrop-blur-lg transition-all duration-500 ease-out xl:hidden ${
          menuOpen
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-4 opacity-0'
        }`}
      >
        <div className="flex flex-col px-4 py-4 sm:px-6">
          {navigation.map((item, i) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={`rounded-lg px-3 py-3 transition-all duration-500 ease-out hover:bg-gray-800/50 ${
                menuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
              style={{ transitionDelay: menuOpen ? `${i * 50}ms` : '0ms' }}
              onClick={() => setMenuOpen(false)}
            >
              {t(item.labelKey)}
            </NavLink>
          ))}
          <div className="mt-3 flex gap-3 border-t border-gray-800 pt-4 sm:hidden">
            <button
              type="button"
              onClick={() => {
                toggleLocale()
                setMenuOpen(false)
              }}
              className="liquid-glass flex flex-1 items-center justify-center rounded-full px-4 py-2.5 text-sm"
            >
              {t('nav.lang')}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

function useNavBrand() {
  const { t, toggleLocale, dict } = useLanguage()
  return { t, toggleLocale, brand: dict.brand }
}
