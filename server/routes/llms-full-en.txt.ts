import { readPublicDocument } from '../public-content'

export default defineEventHandler((event) => {
  setResponseHeader(event, 'content-type', 'text/plain; charset=utf-8')
  return (
    readPublicDocument('llms-full-en.txt') ??
    '# Phoenix Technologies - Full Context\n\nhttps://phoenixtech.web.id/en'
  )
})
