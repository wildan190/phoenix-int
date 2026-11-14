<script setup lang="ts">
import { computed } from 'vue'
import { generateSchemaOrg } from '~/constants/seo'
import { SITE_URL } from '~/constants/company'

const route = useRoute()

// Canonical URL dynamic self-referencing (prevents duplicate content issues)
const canonicalUrl = computed(() => {
  const cleanPath = route.path === '/' ? '/' : route.path.replace(/\/+$/, '')
  return `${SITE_URL}${cleanPath}`
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl,
    },
    {
      rel: 'alternate',
      type: 'text/markdown',
      href: `${SITE_URL}/llms.txt`,
      title: 'LLMs Context',
    },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(generateSchemaOrg()),
    },
  ],
})
</script>

<template>
  <div>
    <AppHeader />
    <NuxtPage />
    <AppFooter />
    <AppToast />
  </div>
</template>
