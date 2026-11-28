const SITE_URL = 'https://phoenixtech.web.id'

// Canonical, indexable page URLs. Each locale page declares itself here so
// crawlers get an unambiguous canonical signal both in HTML and in the
// `Link` response header.
const CANONICAL_PATHS: Record<string, string> = {
  '/': `${SITE_URL}/`,
  '/en': `${SITE_URL}/en`,
}

export default defineEventHandler((event) => {
  const method = getMethod(event)
  if (method !== 'GET' && method !== 'HEAD') return

  const url = getRequestURL(event)
  const path = url.pathname

  // Collapse duplicate slashes and drop the trailing slash (root stays "/").
  let normalized = path.replace(/\/{2,}/g, '/')
  if (normalized.length > 1) normalized = normalized.replace(/\/+$/, '')
  if (normalized === '') normalized = '/'

  if (normalized !== path) {
    // Relative Location keeps the client's scheme/domain, so crawlers resolve
    // it against the URL they already requested.
    setResponseStatus(event, 301)
    setResponseHeader(event, 'location', `${normalized}${url.search}`)
    return ''
  }

  const canonical = CANONICAL_PATHS[path]
  if (canonical) {
    setResponseHeader(event, 'Link', `<${canonical}>; rel="canonical"`)
  }
})
