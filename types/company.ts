export interface NavItem {
  label: string
  href: string
}

export interface BenefitItem {
  title: string
  description: string
}

export interface ContactChannel {
  id: string
  label: string
  value: string
  displayValue: string
  href: string
  actionLabel: string
  canCopy: boolean
  copyValue?: string
  icon: string
}

export interface CompanyLocation {
  city: string
  region: string
  province: string
  fullAddress: string
  coordinates: string
  embedMapUrl: string
}

