import { PageHero } from '../components/PageHero'
import { Section, SectionLabel, SectionTitle } from '../components/Section'
import { useLanguage } from '../context/LanguageContext'
import { images } from '../data/images'
import { services } from '../data/services'
import { usePageMeta } from '../hooks/usePageMeta'

export function Services() {
  usePageMeta('services')
  const { t, dict } = useLanguage()

  return (
    <>
      <PageHero
        title={dict.services.heroTitle}
        subtitle={dict.services.heroSubtitle}
        image={images.pageServices}
      />

      <Section>
        <p className="max-w-3xl text-lg text-gray-400 md:text-xl">
          {dict.services.intro}
        </p>
      </Section>

      {services.map((pole, index) => (
        <Section
          key={pole.id}
          dark={index % 2 === 1}
          className={index % 2 === 0 ? 'border-t border-white/5' : ''}
        >
          <div className="mb-10 max-w-3xl">
            <SectionLabel>{pole.number}</SectionLabel>
            <SectionTitle>{t(pole.titleKey)}</SectionTitle>
            <p className="text-base leading-relaxed text-gray-400 md:text-lg">
              {t(pole.descriptionKey)}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {pole.items.map((itemKey) => (
              <div
                key={itemKey}
                className="rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4 text-sm text-gray-300"
              >
                {t(itemKey)}
              </div>
            ))}
          </div>
        </Section>
      ))}
    </>
  )
}
