<script setup lang="ts">
import { generateSchemaOrg } from '~/constants/seo'

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(generateSchemaOrg()),
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
