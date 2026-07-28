import { ref, onUnmounted } from 'vue'

interface UseClipboardOptions {
  resetMs?: number
}

export function useClipboard(options: UseClipboardOptions = {}) {
  const { resetMs = 2000 } = options
  const copied = ref(false)
  const error = ref<string | null>(null)
  let resetTimer: ReturnType<typeof setTimeout> | null = null

  function clearTimer() {
    if (resetTimer) {
      clearTimeout(resetTimer)
      resetTimer = null
    }
  }

  async function copy(text: string): Promise<boolean> {
    error.value = null
    clearTimer()

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text)
      } else {
        fallbackCopy(text)
      }

      copied.value = true
      resetTimer = setTimeout(() => {
        copied.value = false
        resetTimer = null
      }, resetMs)

      return true
    } catch {
      error.value = 'Failed to copy'
      copied.value = false
      return false
    }
  }

  onUnmounted(clearTimer)

  return { copied, error, copy }
}

function fallbackCopy(text: string) {
  const textarea = document.createElement('textarea')
  textarea.value = text
  textarea.setAttribute('readonly', '')
  textarea.style.position = 'fixed'
  textarea.style.left = '-9999px'
  document.body.appendChild(textarea)
  textarea.select()
  const ok = document.execCommand('copy')
  document.body.removeChild(textarea)
  if (!ok) {
    throw new Error('execCommand copy failed')
  }
}
