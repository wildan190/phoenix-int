import type { NavItem } from '../types/company'

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Layanan', href: '#layanan' },
  { label: 'Klien', href: '#klien' },
  { label: 'Portofolio', href: '#portofolio' },
  { label: 'Keunggulan', href: '#keunggulan' },
  { label: 'Proses', href: '#proses' },
  { label: 'Kontak', href: '#kontak' },
] as const
