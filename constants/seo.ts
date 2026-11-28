import {
  COMPANY_EMAIL,
  COMPANY_LOCATION,
  COMPANY_NAME,
  COMPANY_PHONE_RAW,
  SITE_URL,
} from './company'
import type { SiteContent } from '../types/content'

export function pageUrlFor(content: SiteContent): string {
  return content.canonicalPath === '/' ? `${SITE_URL}/` : `${SITE_URL}${content.canonicalPath}`
}

export function generateSchemaOrg(content: SiteContent) {
  const organizationId = `${SITE_URL}/#organization`
  const websiteId = `${SITE_URL}/#website`
  const pageUrl = pageUrlFor(content)

  const serviceEntities = content.services.items.map((service) => ({
    '@type': 'Service',
    '@id': `${pageUrl}#service-${service.id}`,
    name: service.name,
    description: service.description,
    serviceType: service.tags,
    provider: {
      '@id': organizationId,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Indonesia',
    },
    url: `${pageUrl}#layanan`,
  }))

  const serviceOffers = serviceEntities.map((service) => ({
    '@type': 'Offer',
    itemOffered: {
      '@id': service['@id'],
    },
  }))

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['LocalBusiness', 'ProfessionalService'],
        '@id': organizationId,
        name: COMPANY_NAME,
        alternateName: 'Phoenix Tech',
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          '@id': `${SITE_URL}/#logo`,
          url: `${SITE_URL}/logo.png`,
          contentUrl: `${SITE_URL}/logo.png`,
          caption: COMPANY_NAME,
        },
        image: [`${SITE_URL}/og-image.png`, `${SITE_URL}/logo.png`],
        description: content.seo.description,
        telephone: `+62${COMPANY_PHONE_RAW.replace(/^0/, '')}`,
        email: COMPANY_EMAIL,
        address: {
          '@type': 'PostalAddress',
          streetAddress:
            'Jl. Profesor Dr. Insinyur Soetami, RT/RW 001/001, Kp. Malangnengah, Cijoro Pasir',
          addressLocality: COMPANY_LOCATION.city,
          addressRegion: `${COMPANY_LOCATION.region}, ${COMPANY_LOCATION.province}`,
          postalCode: '42316',
          addressCountry: 'ID',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: -6.35,
          longitude: 106.25,
        },
        areaServed: {
          '@type': 'Country',
          name: 'Indonesia',
        },
        knowsAbout: content.seo.knowsAbout,
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
            opens: '08:00',
            closes: '18:00',
          },
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: content.seo.catalogName,
          itemListElement: serviceOffers,
        },
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: SITE_URL,
        name: COMPANY_NAME,
        alternateName: content.seo.title,
        description: content.seo.description,
        publisher: {
          '@id': organizationId,
        },
        inLanguage: content.htmlLang,
      },
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: content.seo.title,
        isPartOf: {
          '@id': websiteId,
        },
        about: {
          '@id': organizationId,
        },
        mainEntity: {
          '@id': organizationId,
        },
        description: content.seo.description,
        keywords: content.seo.keywords,
        inLanguage: content.htmlLang,
      },
      ...serviceEntities,
    ],
  }
}
