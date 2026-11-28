import { computed } from 'vue'
import { getContent } from '~/locales'
import type { Locale, SiteContent } from '~/types/content'

const EN_PREFIX = '/en'

export function resolveLocale(path: string): Locale {
  return path === EN_PREFIX || path.startsWith(`${EN_PREFIX}/`) ? 'en' : 'id'
}

/**
 * Resolves the active locale from the current route and exposes its content.
 * Content stays reactive so language switches update every section in place.
 */
export function useContent() {
  const route = useRoute()
  const locale = computed<Locale>(() => resolveLocale(route.path))
  const content = computed<SiteContent>(() => getContent(locale.value))

  return { locale, content }
}
