import type { BenefitItem, NavItem } from './company'
import type { ProcessPhase } from './process'
import type { ServiceItem } from './services'

export type Locale = 'id' | 'en'

export interface SeoContent {
  title: string
  description: string
  keywords: string
  ogLocale: string
  ogImageAlt: string
  catalogName: string
  knowsAbout: string[]
}

export interface HeroContent {
  locationLabel: string
  tagline: {
    lead: string
    accent: string
    trail: string
  }
  lead: string
  ctaWhatsApp: string
  ctaServices: string
}

export interface ServicesContent {
  tag: string
  heading: string
  description: string
  ctaLabel: string
  items: ServiceItem[]
}

export interface BenefitsContent {
  tag: string
  heading: string
  description: string
  items: BenefitItem[]
}

export interface ClientItem {
  name: string
  location: string
}

export interface ClientsContent {
  tag: string
  heading: string
  description: string
  listAriaLabel: string
  items: ClientItem[]
}

export interface PortfolioItem {
  id: string
  name: string
  category: string
  description: string
  image: string
  imageAlt: string
}

export interface PortfolioContent {
  tag: string
  heading: string
  description: string
  previewAriaLabel: (appName: string) => string
  items: PortfolioItem[]
}

export interface ProcessContent {
  tag: string
  heading: string
  activitiesLabel: string
  deliverableLabel: string
  phases: ProcessPhase[]
}

export interface CtaContent {
  heading: string
  description: string
}

export interface ContactChannelCopy {
  label: string
  actionLabel: string
  copyLabel?: string
}

export interface ContactFormContent {
  terminalTitle: string
  nameLabel: string
  namePlaceholder: string
  serviceLabel: string
  messageLabel: string
  messagePlaceholder: string
  submitLabel: string
}

export interface ContactContent {
  tag: string
  heading: string
  channels: {
    whatsapp: ContactChannelCopy
    email: ContactChannelCopy
    address: ContactChannelCopy
  }
  form: ContactFormContent
  mapTitle: string
}

export interface FooterContent {
  rights: (year: number) => string
}

export interface WhatsAppContent {
  default: string
  project: string
  consultation: string
  serviceInterest: (serviceName: string) => string
  composeMessage: (input: { name: string; service: string; notes: string }) => string
}

export interface ToastContent {
  copied: (value: string) => string
  manualCopy: (value: string) => string
}

export interface ErrorCopy {
  title: string
  message: string
  hint: string
  primary: 'home' | 'retry'
}

export interface ErrorContent {
  pageTitle: (code: number, title: string) => string
  quickNavLabel: string
  detailAriaLabel: string
  detailTerminalTitle: string
  rows: {
    code: string
    description: string
    url: string
  }
  buttons: {
    home: string
    retry: string
    consultation: string
  }
  byStatus: (code: number) => ErrorCopy
}

export interface LanguageSwitcherContent {
  ariaLabel: string
  titles: {
    id: string
    en: string
  }
}

export interface SiteContent {
  locale: Locale
  htmlLang: string
  canonicalPath: '/' | '/en'
  seo: SeoContent
  nav: {
    ariaLabel: string
    ctaLabel: string
    items: NavItem[]
  }
  hero: HeroContent
  services: ServicesContent
  benefits: BenefitsContent
  clients: ClientsContent
  portfolio: PortfolioContent
  process: ProcessContent
  cta: CtaContent
  contact: ContactContent
  footer: FooterContent
  whatsapp: WhatsAppContent
  toast: ToastContent
  error: ErrorContent
  languageSwitcher: LanguageSwitcherContent
}
