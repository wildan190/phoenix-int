import {
  SITE_URL,
  COMPANY_NAME,
  COMPANY_PHONE_RAW,
  COMPANY_EMAIL,
  COMPANY_LOCATION,
} from './company'
import { SERVICES_DATA } from './services'

export const SITE_META = {
  domain: 'phoenixtech.web.id',
  siteUrl: SITE_URL,
  siteName: COMPANY_NAME,
  title: 'Phoenix Technologies | POS, Enterprise & Custom Software',
  description:
    'Solusi POS, software enterprise, ticketing digital, maintenance aplikasi & server, serta custom software dari Rangkasbitung, Banten untuk bisnis di seluruh Indonesia.',
  keywords:
    'Phoenix Technologies, solusi POS Indonesia, software POS multi-cabang, aplikasi kasir, solusi enterprise, enterprise software Indonesia, custom software Indonesia, jasa pembuatan aplikasi, aplikasi ticketing, ticketing QR, maintenance aplikasi, maintenance server, manajemen server, server cloud, infrastruktur server, software house Indonesia, software house Rangkasbitung, solusi IT Banten',
  ogImage: `${SITE_URL}/og-image.png`,
  locale: 'id_ID',
}

export function generateSchemaOrg() {
  const organizationId = `${SITE_URL}/#organization`
  const serviceEntities = SERVICES_DATA.map((service) => ({
    '@type': 'Service',
    '@id': `${SITE_URL}/#service-${service.id}`,
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
    url: `${SITE_URL}/#layanan`,
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
        image: [SITE_META.ogImage, `${SITE_URL}/logo.png`],
        description: SITE_META.description,
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
        knowsAbout: [
          'Sistem point of sale (POS)',
          'Enterprise software',
          'Custom software',
          'Sistem ticketing digital',
          'Maintenance aplikasi dan server',
          'Infrastruktur server dan cloud',
        ],
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
          name: 'Katalog Layanan Phoenix Technologies',
          itemListElement: serviceOffers,
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: COMPANY_NAME,
        alternateName: SITE_META.domain,
        description: SITE_META.description,
        publisher: {
          '@id': organizationId,
        },
        inLanguage: 'id-ID',
      },
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/#webpage`,
        url: `${SITE_URL}/`,
        name: SITE_META.title,
        isPartOf: {
          '@id': `${SITE_URL}/#website`,
        },
        about: {
          '@id': organizationId,
        },
        mainEntity: {
          '@id': organizationId,
        },
        description: SITE_META.description,
        keywords: SITE_META.keywords,
        inLanguage: 'id-ID',
      },
      ...serviceEntities,
    ],
  }
}
