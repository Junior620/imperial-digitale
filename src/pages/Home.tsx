import { useEffect, useState } from 'react'
import { GlassButton } from '../components/GlassButton'
import { LiquidCard } from '../components/LiquidCard'
import { Section, SectionLabel, SectionTitle } from '../components/Section'
import { useLanguage } from '../context/LanguageContext'
import { images, VIDEO_URL } from '../data/images'
import { usePageMeta } from '../hooks/usePageMeta'

export function Home() {
  usePageMeta('home')
  const { dict } = useLanguage()
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const update = () => setIsDesktop(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return (
    <>
      {/* 01 HERO */}
      <section className="home-hero relative flex flex-col overflow-hidden">
        {isDesktop ? (
          <video
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
            src={VIDEO_URL}
            poster={images.heroPoster}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <img
            src={images.heroMobile}
            alt=""
            className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover"
          />
        )}
        <div className="blur-mask-overlay pointer-events-none absolute inset-0 z-[1]" />

        <div className="relative z-10 flex flex-1 flex-col justify-end px-4 pb-10 pt-28 sm:px-6 md:px-12 md:pb-16">
          <div className="mx-auto w-full max-w-7xl">
            <p
              className="animate-blur-fade-up mb-3 text-xs font-medium uppercase tracking-[0.2em] text-gold"
              style={{ animationDelay: '100ms' }}
            >
              {dict.contact.locationValue}
            </p>
            <h1
              className="animate-blur-fade-up mb-4 text-4xl font-normal sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl"
              style={{ animationDelay: '200ms', letterSpacing: '-0.04em' }}
            >
              {dict.brand}
            </h1>
            <p
              className="animate-blur-fade-up mb-4 max-w-2xl text-base text-gray-300 sm:text-lg md:text-xl"
              style={{ animationDelay: '300ms' }}
            >
              {dict.hero.tagline}
            </p>
            <p
              className="animate-blur-fade-up mb-8 max-w-2xl text-sm leading-relaxed text-gray-400 md:mb-10 md:text-base"
              style={{ animationDelay: '400ms' }}
            >
              {dict.hero.p2}
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <GlassButton to="/services" variant="primary" delay={500}>
                {dict.hero.ctaServices}
              </GlassButton>
              <GlassButton to="/contact" delay={600}>
                {dict.hero.ctaConsult}
              </GlassButton>
              <GlassButton to="/contact" delay={700}>
                {dict.hero.ctaContact}
              </GlassButton>
            </div>
          </div>
        </div>
      </section>

      {/* 02 STATEMENT */}
      <Section className="border-t border-white/5">
        <div className="max-w-4xl">
          <SectionLabel>{dict.home.statementLabel}</SectionLabel>
          <SectionTitle>{dict.home.statementTitle}</SectionTitle>
          <p className="text-lg leading-relaxed text-gray-400 md:text-xl md:leading-relaxed">
            {dict.home.statementBody}
          </p>
        </div>
      </Section>

      {/* Intro editorial */}
      <Section dark>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionTitle>{dict.home.introTitle}</SectionTitle>
            <p className="mb-5 text-base leading-relaxed text-gray-400 md:text-lg">
              {dict.home.introP1}
            </p>
            <p className="text-base leading-relaxed text-gray-400 md:text-lg">
              {dict.home.introP2}
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
            <img
              src={images.statement}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      {/* 03 EXPERTISE — cards */}
      <Section>
        <SectionLabel>01</SectionLabel>
        <SectionTitle>{dict.home.whatWeDoTitle}</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {dict.home.whatWeDo.map((item, i) => (
            <LiquidCard key={item} delay={i * 80}>
              <p className="mb-3 text-xs text-gold">{String(i + 1).padStart(2, '0')}</p>
              <p className="text-base leading-snug text-gray-200">{item}</p>
            </LiquidCard>
          ))}
        </div>
      </Section>

      {/* 04 VALUE — editorial + image */}
      <Section dark>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-2 aspect-[3/4] overflow-hidden lg:order-1 lg:aspect-[4/5]">
            <img
              src={images.value}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionLabel>02</SectionLabel>
            <SectionTitle>{dict.home.whyTitle}</SectionTitle>
            <p className="mb-8 text-lg leading-relaxed text-gray-300">
              {dict.home.whyLead}
            </p>
            <div className="space-y-6">
              {dict.home.whyPoints.map((point) => (
                <div key={point.title} className="border-l border-gold/40 pl-5">
                  <h3 className="mb-1 text-lg font-medium">{point.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-400">
                    {point.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 05 IMPACT — large phrases */}
      <Section>
        <SectionLabel>03</SectionLabel>
        <SectionTitle>{dict.home.outcomesTitle}</SectionTitle>
        <ul className="mt-10 space-y-6 md:space-y-8">
          {dict.home.outcomes.map((outcome, i) => (
            <li
              key={outcome}
              className="flex items-baseline gap-4 border-b border-white/10 pb-6 md:gap-8 md:pb-8"
            >
              <span className="text-sm text-gold">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span
                className="text-xl font-normal text-white sm:text-2xl md:text-3xl"
                style={{ letterSpacing: '-0.02em' }}
              >
                {outcome}
              </span>
            </li>
          ))}
        </ul>
      </Section>

      {/* 06 WHY US — 3 horizontal premium blocks */}
      <Section dark>
        <SectionLabel>04</SectionLabel>
        <SectionTitle>{dict.home.whyUsTitle}</SectionTitle>
        <div className="mt-10 divide-y divide-white/10 border-t border-b border-white/10">
          {dict.home.whyUs.map((block, i) => (
            <div
              key={block.title}
              className="grid gap-4 py-10 md:grid-cols-[80px_1fr] md:gap-10"
            >
              <span className="text-sm text-gold">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3
                  className="mb-3 text-xl md:text-2xl"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {block.title}
                </h3>
                <p className="max-w-3xl text-base leading-relaxed text-gray-400">
                  {block.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 07 CTA */}
      <Section className="border-t border-white/5">
        <div className="max-w-3xl">
          <SectionTitle>{dict.home.ctaTitle}</SectionTitle>
          <p className="mb-8 text-lg leading-relaxed text-gray-400">
            {dict.home.ctaBody}
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <GlassButton to="/contact" variant="primary">
              {dict.home.ctaMeet}
            </GlassButton>
            <GlassButton to="/contact">{dict.home.ctaProposal}</GlassButton>
            <GlassButton to="/contact">{dict.home.ctaContact}</GlassButton>
          </div>
        </div>
      </Section>
    </>
  )
}
