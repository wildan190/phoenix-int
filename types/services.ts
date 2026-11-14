export interface ServiceItem {
  id: string
  name: string
  description: string
  tags: string[]
  iconSvg: string
  /**
   * Calculated percentage coordinates on the dial circle (0-100)
   */
  x?: number
  y?: number
}

