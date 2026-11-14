<script setup lang="ts">
import { COMPANY_NAME, COMPANY_LOCATION } from '~/constants/company'

const currentYear = 2026
</script>

<template>
  <footer>
    <div class="wrap">
      <span>© {{ currentYear }} {{ COMPANY_NAME }}. Seluruh hak cipta dilindungi.</span>
      <span>{{ COMPANY_LOCATION.city }}, {{ COMPANY_LOCATION.region }}, {{ COMPANY_LOCATION.province }}</span>
    </div>
  </footer>
</template>

