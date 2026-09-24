import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { useLanguage } from '../context/LanguageContext'
import { images } from '../data/images'
import { industries } from '../data/industries'
import { usePageMeta } from '../hooks/usePageMeta'

function spanClass(span: string) {
  if (span === 'large') return 'md:col-span-2 md:row-span-2 min-h-[280px] md:min-h-[420px]'
  if (span === 'tall') return 'md:row-span-2 min-h-[220px] md:min-h-[420px]'
  return 'min-h-[200px] md:min-h-[200px]'
}

export function Industries() {
  usePageMeta('industries')
  const { t, dict } = useLanguage()

  return (
    <>
      <PageHero
        title={dict.industries.heroTitle}
        subtitle={dict.industries.heroSubtitle}
        image={images.pageIndustries}
      />

      <Section>
        <p className="mb-12 max-w-3xl text-lg text-gray-400 md:text-xl">
          {dict.industries.intro}
        </p>

        <div className="grid auto-rows-fr gap-3 md:grid-cols-3 md:grid-rows-3">
          {industries.map((item) => (
            <div
              key={item.id}
              className={`group relative overflow-hidden ${spanClass(item.span)}`}
            >
              <img
                src={item.image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
                <h3
                  className="text-xl text-white md:text-2xl"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {t(item.titleKey)}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
