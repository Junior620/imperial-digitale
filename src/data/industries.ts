import { images } from './images'

export type MosaicSpan = 'large' | 'tall' | 'normal'

export const industries = [
  {
    id: 'public',
    titleKey: 'industries.items.public',
    image: images.industryPublic,
    span: 'large' as MosaicSpan,
  },
  {
    id: 'private',
    titleKey: 'industries.items.private',
    image: images.industryPrivate,
    span: 'normal' as MosaicSpan,
  },
  {
    id: 'sme',
    titleKey: 'industries.items.sme',
    image: images.industrySme,
    span: 'normal' as MosaicSpan,
  },
  {
    id: 'health',
    titleKey: 'industries.items.health',
    image: images.industryHealth,
    span: 'tall' as MosaicSpan,
  },
  {
    id: 'education',
    titleKey: 'industries.items.education',
    image: images.industryEducation,
    span: 'normal' as MosaicSpan,
  },
  {
    id: 'logistics',
    titleKey: 'industries.items.logistics',
    image: images.industryLogistics,
    span: 'normal' as MosaicSpan,
  },
  {
    id: 'media',
    titleKey: 'industries.items.media',
    image: images.industryMedia,
    span: 'normal' as MosaicSpan,
  },
] as const
