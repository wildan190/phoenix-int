import type { Locale, SiteContent } from '../types/content'
import { enContent } from './en'
import { idContent } from './id'

export const CONTENT: Record<Locale, SiteContent> = {
  id: idContent,
  en: enContent,
}

export function getContent(locale: Locale): SiteContent {
  return CONTENT[locale]
}
