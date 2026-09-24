import { images } from './images'

export const projects = [
  {
    id: 'public-digital',
    titleKey: 'projects.items.public.title',
    summaryKey: 'projects.items.public.summary',
    sectorKey: 'projects.items.public.sector',
    image: images.project1,
  },
  {
    id: 'brand-identity',
    titleKey: 'projects.items.brand.title',
    summaryKey: 'projects.items.brand.summary',
    sectorKey: 'projects.items.brand.sector',
    image: images.project2,
  },
  {
    id: 'sme-platform',
    titleKey: 'projects.items.platform.title',
    summaryKey: 'projects.items.platform.summary',
    sectorKey: 'projects.items.platform.sector',
    image: images.project3,
  },
  {
    id: 'impact-smart',
    titleKey: 'projects.items.impact.title',
    summaryKey: 'projects.items.impact.summary',
    sectorKey: 'projects.items.impact.sector',
    image: images.project4,
  },
] as const
