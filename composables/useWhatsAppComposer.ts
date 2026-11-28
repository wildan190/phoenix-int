import { computed, ref } from 'vue'
import { createWhatsAppUrl } from '../constants/company'
import { useContent } from './useContent'

export function useWhatsAppComposer() {
  const { content } = useContent()

  const clientName = ref('')
  const selectedServiceName = ref(content.value.services.items[0]?.name ?? '')
  const messageNotes = ref('')

  const generatedMessage = computed(() =>
    content.value.whatsapp.composeMessage({
      name: clientName.value,
      service: selectedServiceName.value,
      notes: messageNotes.value,
    })
  )

  const whatsAppUrl = computed(() => createWhatsAppUrl(generatedMessage.value))

  function resetForm() {
    clientName.value = ''
    selectedServiceName.value = content.value.services.items[0]?.name ?? ''
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
