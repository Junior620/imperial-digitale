import { PageHero } from '../components/PageHero'
import { Section } from '../components/Section'
import { useLanguage } from '../context/LanguageContext'
import { images } from '../data/images'
import { projects } from '../data/projects'
import { usePageMeta } from '../hooks/usePageMeta'

export function Projects() {
  usePageMeta('projects')
  const { t, dict } = useLanguage()

  return (
    <>
      <PageHero
        title={dict.projects.heroTitle}
        subtitle={dict.projects.heroSubtitle}
        image={images.pageProjects}
      />

      <Section>
        <p className="mb-12 max-w-3xl text-lg text-gray-400 md:text-xl">
          {dict.projects.intro}
        </p>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden border border-white/10 bg-[#0a1628]/50"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.15em] text-gold backdrop-blur-sm">
                  {t('common.useCase')}
                </span>
              </div>
              <div className="p-6 md:p-8">
                <p className="mb-2 text-xs uppercase tracking-[0.15em] text-gray-500">
                  {t(project.sectorKey)}
                </p>
                <h3
                  className="mb-3 text-xl md:text-2xl"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {t(project.titleKey)}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400 md:text-base">
                  {t(project.summaryKey)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  )
}
