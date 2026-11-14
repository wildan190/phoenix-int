<script setup lang="ts">
import { useToast } from '~/composables/useToast'

const { toastMessage, isToastVisible } = useToast()
</script>

<template>
  <div
    class="toast"
    :class="{ on: isToastVisible }"
    role="status"
    aria-live="polite"
  >
    {{ toastMessage }}
  </div>
</template>

