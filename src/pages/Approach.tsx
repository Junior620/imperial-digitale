import { useState } from 'react'
import { PageHero } from '../components/PageHero'
import { Section, SectionLabel, SectionTitle } from '../components/Section'
import { useLanguage } from '../context/LanguageContext'
import { images } from '../data/images'
import { approachSteps } from '../data/services'
import { usePageMeta } from '../hooks/usePageMeta'

export function Approach() {
  usePageMeta('approach')
  const { t, dict } = useLanguage()
  const [active, setActive] = useState(0)

  return (
    <>
      <PageHero
        title={dict.approach.heroTitle}
        subtitle={dict.approach.heroSubtitle}
        image={images.pageApproach}
      />

      <Section>
        <p className="mb-14 max-w-3xl text-lg text-gray-400 md:text-xl">
          {dict.approach.intro}
        </p>

        {/* Desktop horizontal timeline */}
        <div className="mb-16 hidden lg:block">
          <div className="relative mb-10 flex justify-between">
            <div className="absolute top-5 right-0 left-0 h-px bg-white/15" />
            {approachSteps.map((step, i) => (
              <button
                key={step.id}
                type="button"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`relative z-10 flex w-[14%] flex-col items-center text-center transition-opacity ${
                  active === i ? 'opacity-100' : 'opacity-45 hover:opacity-80'
                }`}
              >
                <span
                  className={`mb-4 flex h-10 w-10 items-center justify-center rounded-full border text-xs ${
                    active === i
                      ? 'border-gold bg-gold text-black'
                      : 'border-white/30 bg-black text-gold'
                  }`}
                >
                  {step.number}
                </span>
                <span className="mb-2 text-sm font-medium tracking-wide">
                  {t(step.labelKey)}
                </span>
                <span className="text-xs leading-snug text-gray-500">
                  {t(step.descKey)}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <ol className="mb-16 space-y-8 border-l border-white/15 pl-6 lg:hidden">
          {approachSteps.map((step) => (
            <li key={step.id} className="relative">
              <span className="absolute top-1.5 -left-[1.7rem] h-3 w-3 rounded-full border border-gold bg-black" />
              <p className="mb-1 text-xs text-gold">{step.number}</p>
              <h3 className="mb-1 text-lg font-medium">{t(step.labelKey)}</h3>
              <p className="text-sm text-gray-400">{t(step.descKey)}</p>
            </li>
          ))}
        </ol>

        <SectionLabel>01</SectionLabel>
        <SectionTitle>{dict.approach.differTitle}</SectionTitle>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2">
          {dict.approach.differs.map((item, i) => (
            <li
              key={item}
              className="prose-justify border border-white/10 bg-white/[0.02] p-6 text-base text-gray-300"
            >
              <span className="mb-3 block text-xs text-gold">
                {String(i + 1).padStart(2, '0')}
              </span>
              {item}
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
