<script setup lang="ts">
import { computed } from 'vue'
import { createWhatsAppUrl } from '~/constants/company'
import { resolveLocale } from '~/composables/useContent'
import { getContent } from '~/locales'
import type { ErrorCopy } from '~/types/content'

const props = defineProps<{
  error: {
    statusCode?: number
    statusMessage?: string
    message?: string
    url?: string
  }
}>()

const failedPath = computed(() => {
  const url = props.error?.url
  if (!url) return '/'

  try {
    return new URL(url, 'https://phoenixtech.web.id').pathname
  } catch {
    return url
  }
})

const locale = computed(() => resolveLocale(failedPath.value))
const content = computed(() => getContent(locale.value))

const statusCode = computed(() => props.error?.statusCode ?? 500)
const statusLabel = computed(() => props.error?.statusMessage || props.error?.message || '')

const copy = computed<ErrorCopy>(() => content.value.error.byStatus(statusCode.value))

const consultationUrl = computed(() => createWhatsAppUrl(content.value.whatsapp.default))

function quickLink(href: string) {
  return locale.value === 'en' ? `/en${href}` : `/${href}`
}

const detailRows = computed(() => {
  const rows: { label: string; value: string }[] = []
  rows.push({ label: content.value.error.rows.code, value: `${statusCode.value}` })
  if (statusLabel.value) {
    rows.push({ label: content.value.error.rows.description, value: statusLabel.value })
  }
  if (props.error?.url) {
    rows.push({ label: content.value.error.rows.url, value: props.error.url })
  }
  return rows
})

const showQuickNav = computed(() => statusCode.value === 404)

useHead({
  title: computed(() => content.value.error.pageTitle(statusCode.value, copy.value.title)),
  meta: [{ name: 'robots', content: 'noindex' }],
})

function goHome() {
  clearError({ redirect: locale.value === 'en' ? '/en' : '/' })
}

function retry() {
  if (import.meta.client) window.location.reload()
}
</script>

<template>
  <div class="err">
    <div class="glow" aria-hidden="true"></div>

    <header class="err-top">
      <div class="wrap">
        <a class="brand" :href="locale === 'en' ? '/en' : '/'" aria-label="Phoenix Technologies">
          <img src="/logo-64.webp" alt="Phoenix Technologies Logo" width="30" height="27" />
          <b>PHOENIX</b>
        </a>
        <span class="tag">ERR {{ statusCode }}</span>
      </div>
    </header>

    <main class="err-main wrap">
      <div class="stage">
        <div class="orbit" aria-hidden="true">
          <span class="r" />
          <span class="r b" />
          <span class="r c" />
        </div>
        <p class="code">{{ statusCode }}</p>
      </div>

      <h1>{{ copy.title }}.</h1>
      <p class="msg">{{ copy.message }}</p>
      <p class="hint">{{ copy.hint }}</p>

      <div class="acts">
        <button v-if="copy.primary === 'home'" type="button" class="btn btn-primary" @click="goHome">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M3 11.5 12 4l9 7.5" />
            <path d="M5.5 10v9.5h13V10" />
          </svg>
          <span>{{ content.error.buttons.home }}</span>
        </button>

        <button v-else type="button" class="btn btn-primary" @click="retry">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M20.5 12a8.5 8.5 0 1 1-2.5-6" />
            <path d="M20.5 4.5V10H15" />
          </svg>
          <span>{{ content.error.buttons.retry }}</span>
        </button>

        <a v-if="copy.primary === 'home'" class="btn btn-ghost" :href="consultationUrl" target="_blank" rel="noopener">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M21 11.5a8.4 8.4 0 0 1-12.4 7.4L3 20.5l1.7-5.4A8.4 8.4 0 1 1 21 11.5Z" />
          </svg>
          <span>{{ content.error.buttons.consultation }}</span>
        </a>

        <button v-else type="button" class="btn btn-ghost" @click="goHome">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
          >
            <path d="M3 11.5 12 4l9 7.5" />
            <path d="M5.5 10v9.5h13V10" />
          </svg>
          <span>{{ content.error.buttons.home }}</span>
        </button>
      </div>

      <section class="term diag" :aria-label="content.error.detailAriaLabel">
        <div class="bar">
          <i /><i /><i />
          <span>{{ content.error.detailTerminalTitle }}</span>
        </div>
        <dl class="diag-rows">
          <div v-for="row in detailRows" :key="row.label">
            <dt>{{ row.label }}</dt>
            <dd>{{ row.value }}</dd>
          </div>
        </dl>
      </section>

      <nav v-if="showQuickNav" class="quick" :aria-label="content.error.quickNavLabel">
        <span class="quick-label">{{ content.error.quickNavLabel }}</span>
        <a v-for="item in content.nav.items" :key="item.href" :href="quickLink(item.href)">
          {{ item.label }}
        </a>
      </nav>
    </main>
  </div>
</template>

<style scoped>
.err {
  position: relative;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-bottom: clamp(2rem, 6vw, 4rem);
}

.glow {
  position: fixed;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(58% 46% at 50% -6%, var(--glow), transparent 70%);
}

.err-top {
  position: relative;
  z-index: 2;
  padding-block: 0.5rem 0;
}

.err-top .wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.err-main {
  position: relative;
  z-index: 1;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.85rem;
  padding-top: clamp(1.5rem, 4vw, 3rem);
}

.stage {
  position: relative;
  display: grid;
  place-items: center;
  margin-bottom: 0.4rem;
}

.code {
  position: relative;
  z-index: 1;
  margin: 0;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: clamp(4.2rem, 21vw, 11rem);
  line-height: 0.9;
  letter-spacing: -0.06em;
  background: linear-gradient(100deg, var(--accent) 8%, var(--accent-2) 92%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.orbit {
  position: absolute;
  top: 50%;
  left: 50%;
  width: clamp(190px, 44vw, 360px);
  aspect-ratio: 1;
  transform: translate(-50%, -50%);
  pointer-events: none;
}

.r {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 1px dashed var(--line);
  animation: spin 80s linear infinite;
}

.r.b {
  inset: 12%;
  border: 1px solid color-mix(in srgb, var(--accent) 38%, transparent);
  animation-direction: reverse;
  animation-duration: 110s;
}

.r.c {
  inset: -14%;
  border-color: color-mix(in srgb, var(--accent) 20%, transparent);
  animation-duration: 140s;
}

.r::after {
  content: "";
  position: absolute;
  top: -5px;
  left: 50%;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--accent);
  box-shadow: 0 0 20px 5px var(--glow);
}

.err-main h1 {
  font-size: clamp(1.35rem, 3.4vw, 2rem);
  max-width: 26ch;
}

.msg {
  max-width: 48ch;
  color: var(--muted);
}

.hint {
  max-width: 50ch;
  font-size: 0.9rem;
  color: var(--accent-ink);
}

.acts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
  margin-top: 0.6rem;
}

.diag {
  width: min(100%, 560px);
  margin-top: clamp(1.4rem, 4vw, 2rem);
  text-align: left;
}

.diag .bar span {
  margin-left: 0.35rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.diag-rows {
  margin: 0;
  padding: 1rem 1.2rem 1.15rem;
  display: grid;
  gap: 0.55rem;
  font-family: var(--font-mono);
  font-size: 0.78rem;
}

.diag-rows > div {
  display: grid;
  grid-template-columns: 88px minmax(0, 1fr);
  gap: 0.9rem;
}

.diag-rows dt {
  font-size: 0.66rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--accent-2);
  padding-top: 0.16rem;
}

.diag-rows dd {
  margin: 0;
  color: var(--term-fg);
  overflow-wrap: anywhere;
}

.quick {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.5rem 0.9rem;
  margin-top: clamp(1.4rem, 4vw, 2.2rem);
  padding-top: clamp(1.2rem, 3vw, 1.8rem);
  border-top: 1px solid var(--line);
  width: min(100%, 640px);
}

.quick-label {
  font-family: var(--font-mono);
  font-size: 0.68rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--muted);
}

.quick a {
  font-size: 0.9rem;
  text-decoration: none;
  color: var(--fg);
  border: 1px solid var(--line);
  border-radius: 999px;
  padding: 0.35rem 0.9rem;
  transition: color 0.25s, border-color 0.25s;
}

.quick a:hover {
  color: var(--accent-ink);
  border-color: var(--accent);
}

@media (max-width: 520px) {
  .diag-rows > div {
    grid-template-columns: 1fr;
    gap: 0.15rem;
  }
}
</style>
