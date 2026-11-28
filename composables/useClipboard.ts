import { useContent } from './useContent'
import { useToast } from './useToast'

export function useClipboard() {
  const { showToast } = useToast()
  const { content } = useContent()

  async function copyToClipboard(text: string): Promise<boolean> {
    if (!import.meta.client) return false

    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(text)
        showToast(content.value.toast.copied(text))
        return true
      } catch (err) {
        console.warn('Clipboard API failed, trying fallback...', err)
      }
    }

    // Fallback for older browsers or non-secure contexts
    try {
      const textarea = document.createElement('textarea')
      textarea.value = text
      textarea.style.position = 'fixed'
      textarea.style.left = '-9999px'
      textarea.style.top = '-9999px'
      document.body.appendChild(textarea)
      textarea.focus()
      textarea.select()
      const successful = document.execCommand('copy')
      textarea.remove()

      if (successful) {
        showToast(content.value.toast.copied(text))
        return true
      }
      showToast(content.value.toast.manualCopy(text))
      return false
    } catch {
      showToast(content.value.toast.manualCopy(text))
      return false
    }
  }

  return {
    copyToClipboard,
  }
}

