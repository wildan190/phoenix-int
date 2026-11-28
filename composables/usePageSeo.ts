import { SITE_URL } from '~/constants/company'
import { generateSchemaOrg, pageUrlFor } from '~/constants/seo'
import type { SiteContent } from '~/types/content'

/**
 * Applies locale-aware SEO tags, hreflang alternates, and structured data
 * for the current page. Call once per page during setup.
 */
export function usePageSeo(content: SiteContent) {
  const canonical = pageUrlFor(content)
  const llmsFile = content.locale === 'en' ? 'llms-en.txt' : 'llms.txt'
  const llmsFullFile = content.locale === 'en' ? 'llms-full-en.txt' : 'llms-full.txt'

  useHead({
    htmlAttrs: {
      lang: content.htmlLang,
    },
    title: content.seo.title,
    meta: [
      { name: 'description', content: content.seo.description },
      { name: 'keywords', content: content.seo.keywords },
      { property: 'og:url', content: canonical },
      { property: 'og:title', content: content.seo.title },
      { property: 'og:description', content: content.seo.description },
      { property: 'og:locale', content: content.seo.ogLocale },
      { property: 'og:image:alt', content: content.seo.ogImageAlt },
      { name: 'twitter:url', content: canonical },
      { name: 'twitter:title', content: content.seo.title },
      { name: 'twitter:description', content: content.seo.description },
    ],
    link: [
      { rel: 'canonical', href: canonical },
      { rel: 'alternate', hreflang: 'id', href: `${SITE_URL}/` },
      { rel: 'alternate', hreflang: 'en', href: `${SITE_URL}/en` },
      { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}/` },
      { rel: 'alternate', type: 'text/plain', href: `${SITE_URL}/${llmsFile}` },
      { rel: 'alternate', type: 'text/plain', href: `${SITE_URL}/${llmsFullFile}` },
    ],
    script: [
      {
        type: 'application/ld+json',
        innerHTML: JSON.stringify(generateSchemaOrg(content)),
      },
    ],
  })
}
