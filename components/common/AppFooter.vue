<script setup lang="ts">
import { COMPANY_LOCATION } from '~/constants/company'
import { useContent } from '~/composables/useContent'

const { content } = useContent()

const currentYear = 2026
</script>

<template>
  <footer>
    <div class="wrap">
      <span>{{ content.footer.rights(currentYear) }}</span>
      <span>{{ COMPANY_LOCATION.city }}, {{ COMPANY_LOCATION.region }}, {{ COMPANY_LOCATION.province }}</span>
    </div>
  </footer>
</template>

