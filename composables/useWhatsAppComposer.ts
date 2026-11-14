import { ref, computed } from 'vue'
import { createWhatsAppUrl } from '../constants/company'
import { SERVICES_DATA } from '../constants/services'

export function useWhatsAppComposer() {
  const clientName = ref('')
  const selectedServiceName = ref(SERVICES_DATA[0]?.name || 'Tech Solutions')
  const messageNotes = ref('')

  const generatedMessage = computed(() => {
    const greeting = 'Halo Phoenix Technologies, '
    const namePart = clientName.value.trim() ? `saya ${clientName.value.trim()}. ` : ''
    const servicePart = `Saya tertarik dengan layanan ${selectedServiceName.value}.`
    const notesPart = messageNotes.value.trim() ? ` ${messageNotes.value.trim()}` : ''

    return `${greeting}${namePart}${servicePart}${notesPart}`
  })

  const whatsAppUrl = computed(() => {
    return createWhatsAppUrl(generatedMessage.value)
  })

  function resetForm() {
    clientName.value = ''
    selectedServiceName.value = SERVICES_DATA[0]?.name || 'Tech Solutions'
    messageNotes.value = ''
  }

  return {
    clientName,
    selectedServiceName,
    messageNotes,
    generatedMessage,
    whatsAppUrl,
    resetForm,
  }
}

