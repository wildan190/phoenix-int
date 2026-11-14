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
  title: 'Phoenix Technologies | Solusi Custom Software, IoT & Sistem Digital Terpadu',
  description:
    'Phoenix Technologies menghadirkan solusi teknologi terpercaya: Custom Software, IoT, POS, Reservasi, Ticketing, Sistem Keuangan, dan Otomasi Bisnis di Rangkasbitung, Banten & seluruh Indonesia.',
  keywords:
    'Phoenix Technologies, Custom Software Indonesia, Solusi IoT, POS Kasir Multi-outlet, Sistem Reservasi Online, Aplikasi Ticketing QR, Sistem Informasi Keuangan, Otomasi Bisnis, Software House Banten, Software House Rangkasbitung, Konsultan IT Lebak',
  ogImage: `${SITE_URL}/og-image.png`,
  locale: 'id_ID',
}

export function generateSchemaOrg() {
  const serviceOffers = SERVICES_DATA.map((service, index) => ({
    '@type': 'Offer',
    itemOffered: {
      '@type': 'Service',
      name: service.name,
      description: service.description,
      serviceType: service.tags.join(', '),
    },
    position: index + 1,
  }))

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['ProfessionalService', 'Organization'],
        '@id': `${SITE_URL}/#organization`,
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
        image: `${SITE_URL}/og-image.png`,
        description: SITE_META.description,
        telephone: `+62${COMPANY_PHONE_RAW.replace(/^0/, '')}`,
        email: COMPANY_EMAIL,
        priceRange: '$$',
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
        description: SITE_META.description,
        publisher: {
          '@id': `${SITE_URL}/#organization`,
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
          '@id': `${SITE_URL}/#organization`,
        },
        description: SITE_META.description,
        inLanguage: 'id-ID',
      },
    ],
  }
}
