import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

export type PublicDocumentName = 'llms.txt' | 'llms-full.txt' | 'sitemap.xml'

export function readPublicDocument(name: PublicDocumentName): string | null {
  const candidates = [
    resolve(process.cwd(), 'public', name),
    resolve(process.cwd(), '.output', 'public', name),
  ]

  for (const path of candidates) {
    try {
      return readFileSync(path, 'utf-8')
    } catch {
      // Try the built public directory when running in production.
    }
  }

  return null
}
