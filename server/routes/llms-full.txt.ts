import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

export default defineEventHandler((event) => {
  setResponseHeader(event, 'content-type', 'text/plain; charset=utf-8')
  try {
    const filePath = resolve(process.cwd(), 'public/llms-full.txt')
    return readFileSync(filePath, 'utf-8')
  } catch {
    return '# Phoenix Technologies - Full Context\n\nhttps://phoenixtech.web.id'
  }
})
