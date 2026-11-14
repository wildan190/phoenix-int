import { ref } from 'vue'

const toastMessage = ref('')
const isToastVisible = ref(false)
let toastTimeout: ReturnType<typeof setTimeout> | null = null

export function useToast() {
  function showToast(message: string, durationMs = 1800) {
    toastMessage.value = message
    isToastVisible.value = true

    if (toastTimeout) {
      clearTimeout(toastTimeout)
    }

    toastTimeout = setTimeout(() => {
      isToastVisible.value = false
    }, durationMs)
  }

  return {
    toastMessage,
    isToastVisible,
    showToast,
  }
}

