import type { CompanyLocation, ContactChannel } from '../types/company'

export const SITE_URL = 'https://phoenixtech.web.id'
export const COMPANY_NAME = 'Phoenix Technologies'
export const COMPANY_PHONE_RAW = '08175200116'
export const COMPANY_PHONE_DISPLAY = '0817-5200-116'
export const COMPANY_PHONE_INTL = '628175200116'
export const COMPANY_EMAIL = 'connectphoenixtech@gmail.com'

export const COMPANY_LOCATION: CompanyLocation = {
  city: 'Rangkasbitung',
  region: 'Kab. Lebak',
  province: 'Banten',
  fullAddress:
    'Jl. Profesor Dr. Insinyur Soetami, RT/RW 001/001, Kp. Malangnengah, Cijoro Pasir, Rangkasbitung, Kab. Lebak, Banten 42316',
  coordinates: '6°21′ LS · 106°15′ BT',
  embedMapUrl:
    'https://www.google.com/maps?q=Jl.+Profesor+Dr.+Insinyur+Soetami+Cijoro+Pasir+Rangkasbitung+Lebak+Banten+42316&output=embed',
}

export function createWhatsAppUrl(customMessage: string): string {
  const encoded = encodeURIComponent(customMessage.trim())
  return `https://wa.me/${COMPANY_PHONE_INTL}?text=${encoded}`
}

export const DEFAULT_WHATSAPP_URL = createWhatsAppUrl(
  'Halo Phoenix Technologies, saya ingin konsultasi.'
)

export const PROJECT_WHATSAPP_URL = createWhatsAppUrl(
  'Halo Phoenix Technologies, saya ingin membahas proyek.'
)

export const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: COMPANY_PHONE_INTL,
    displayValue: COMPANY_PHONE_DISPLAY,
    href: `https://wa.me/${COMPANY_PHONE_INTL}`,
    actionLabel: 'Buka WhatsApp',
    canCopy: true,
    copyValue: COMPANY_PHONE_RAW,
    icon: 'whatsapp',
  },
  {
    id: 'email',
    label: 'Email',
    value: COMPANY_EMAIL,
    displayValue: COMPANY_EMAIL,
    href: `mailto:${COMPANY_EMAIL}`,
    actionLabel: 'Kirim email',
    canCopy: true,
    copyValue: COMPANY_EMAIL,
    icon: 'email',
  },
  {
    id: 'address',
    label: 'Alamat',
    value: COMPANY_LOCATION.fullAddress,
    displayValue: COMPANY_LOCATION.fullAddress,
    href: COMPANY_LOCATION.embedMapUrl,
    actionLabel: 'Lihat peta',
    canCopy: false,
    icon: 'map-pin',
  },
]

