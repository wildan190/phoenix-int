import { readPublicDocument } from '../public-content'

export default defineEventHandler((event) => {
  setResponseHeader(event, 'content-type', 'text/plain; charset=utf-8')
  return (
    readPublicDocument('llms-en.txt') ??
    '# Phoenix Technologies\n\nhttps://phoenixtech.web.id/en'
  )
})
