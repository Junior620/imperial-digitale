import { PageHero } from '../components/PageHero'
import { Section, SectionLabel, SectionTitle } from '../components/Section'
import { useLanguage } from '../context/LanguageContext'
import { images } from '../data/images'
import { usePageMeta } from '../hooks/usePageMeta'

export function About() {
  usePageMeta('about')
  const { dict } = useLanguage()
  const a = dict.about

  return (
    <>
      <PageHero
        title={a.heroTitle}
        subtitle={a.heroSubtitle}
        image={images.pageAbout}
      />

      <Section>
        <p
          className="max-w-4xl text-2xl leading-snug text-white sm:text-3xl md:text-4xl"
          style={{ letterSpacing: '-0.03em' }}
        >
          {a.declaration}
        </p>
      </Section>

      <Section dark>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <SectionLabel>01</SectionLabel>
            <SectionTitle>{a.visionTitle}</SectionTitle>
            <p className="text-base leading-relaxed text-gray-400 md:text-lg">
              {a.visionBody}
            </p>
          </div>
          <div>
            <SectionLabel>02</SectionLabel>
            <SectionTitle>{a.storyTitle}</SectionTitle>
            <p className="text-base leading-relaxed text-gray-400 md:text-lg">
              {a.storyBody}
            </p>
          </div>
        </div>
        <div className="mt-14 aspect-[21/9] overflow-hidden">
          <img
            src={images.aboutStory}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
      </Section>

      <Section>
        <SectionLabel>{a.founderLabel}</SectionLabel>
        <SectionTitle>{a.teamTitle}</SectionTitle>
        <p className="mb-12 max-w-3xl text-base leading-relaxed text-gray-400 md:text-lg">
          {a.teamIntro}
        </p>

        {/* Founder Spotlight */}
        <div className="grid overflow-hidden border border-white/10 lg:grid-cols-[minmax(280px,2fr)_3fr]">
          <div className="relative min-h-[360px]">
            <img
              src={images.founder}
              alt={a.founderName}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-[#0a1628] p-8 md:p-12">
            <p className="mb-2 text-xs uppercase tracking-[0.2em] text-gold">
              {a.founderLabel}
            </p>
            <h3
              className="mb-1 text-3xl md:text-4xl"
              style={{ letterSpacing: '-0.03em' }}
            >
              {a.founderName}
            </h3>
            <p className="mb-6 text-gray-400">{a.founderRole}</p>
            <div className="space-y-4 text-sm leading-relaxed text-gray-300 md:text-base">
              <p>{a.founderBio1}</p>
              <p>{a.founderBio2}</p>
              <p>{a.founderBio3}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section dark>
        <SectionLabel>03</SectionLabel>
        <SectionTitle>{a.principlesTitle}</SectionTitle>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {a.principles.map((principle, i) => (
            <li
              key={principle}
              className="prose-justify border-l border-gold/40 py-2 pl-5 text-base text-gray-300"
            >
              <span className="mr-3 text-xs text-gold">
                {String(i + 1).padStart(2, '0')}
              </span>
              {principle}
            </li>
          ))}
        </ul>
      </Section>
    </>
  )
}
