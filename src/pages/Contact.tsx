import { useState, type FormEvent } from 'react'
import { GlassButton } from '../components/GlassButton'
import { PageHero } from '../components/PageHero'
import { Section, SectionTitle } from '../components/Section'
import { useLanguage } from '../context/LanguageContext'
import { images } from '../data/images'
import { usePageMeta } from '../hooks/usePageMeta'

export function Contact() {
  usePageMeta('contact')
  const { dict } = useLanguage()
  const c = dict.contact
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        title={c.heroTitle}
        subtitle={c.heroSubtitle}
        image={images.pageContact}
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-2 text-lg font-medium">{dict.brand}</p>
            <p className="mb-10 max-w-md text-gray-400">{c.tagline}</p>

            <dl className="space-y-6 text-sm">
              <div>
                <dt className="mb-1 text-xs uppercase tracking-[0.15em] text-gold">
                  {c.email}
                </dt>
                <dd>
                  <a
                    href={`mailto:${c.emailValue}`}
                    className="text-gray-300 transition-colors hover:text-white"
                  >
                    {c.emailValue}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="mb-1 text-xs uppercase tracking-[0.15em] text-gold">
                  {c.phone}
                </dt>
                <dd className="text-gray-300">{c.phoneValue}</dd>
              </div>
              <div>
                <dt className="mb-1 text-xs uppercase tracking-[0.15em] text-gold">
                  {c.location}
                </dt>
                <dd className="text-gray-300">{c.locationValue}</dd>
              </div>
              <div>
                <dt className="mb-1 text-xs uppercase tracking-[0.15em] text-gold">
                  {c.availability}
                </dt>
                <dd className="text-gray-300">{c.availabilityValue}</dd>
              </div>
            </dl>
          </div>

          <div>
            <SectionTitle>{c.heroSubtitle}</SectionTitle>
            {sent ? (
              <div className="liquid-glass rounded-2xl p-8 text-lg text-gray-200">
                {c.success}
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="liquid-glass space-y-4 rounded-2xl p-6 md:p-8"
              >
                <Field label={c.formName} name="name" required />
                <Field label={c.formEmail} name="email" type="email" required />
                <Field label={c.formOrg} name="organization" />
                <label className="block">
                  <span className="mb-2 block text-xs uppercase tracking-[0.15em] text-gray-500">
                    {c.formMessage}
                  </span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full resize-y rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-gold/50"
                  />
                </label>
                <GlassButton type="submit" variant="primary" className="w-full sm:w-auto">
                  {c.formSubmit}
                </GlassButton>
              </form>
            )}
          </div>
        </div>
      </Section>
    </>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[0.15em] text-gray-500">
        {label}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none focus:border-gold/50"
      />
    </label>
  )
}
