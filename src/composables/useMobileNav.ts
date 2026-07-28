import { onMounted, onUnmounted, ref, watch, type Ref } from 'vue'
import { useRoute } from 'vue-router'

const isOpen: Ref<boolean> = ref(false)
const isDesktop: Ref<boolean> = ref(
  typeof window !== 'undefined' ? window.matchMedia('(min-width: 1024px)').matches : false,
)

let mediaQuery: MediaQueryList | null = null
let mediaListener: ((event: MediaQueryListEvent) => void) | null = null
let subscriberCount = 0

function syncDesktop(matches: boolean): void {
  isDesktop.value = matches
  if (matches) {
    isOpen.value = false
  }
}

function bindMediaQuery(): void {
  if (typeof window === 'undefined' || mediaQuery) return

  mediaQuery = window.matchMedia('(min-width: 1024px)')
  mediaListener = (event: MediaQueryListEvent) => {
    syncDesktop(event.matches)
  }
  syncDesktop(mediaQuery.matches)
  mediaQuery.addEventListener('change', mediaListener)
}

function unbindMediaQuery(): void {
  if (!mediaQuery || !mediaListener) return
  mediaQuery.removeEventListener('change', mediaListener)
  mediaQuery = null
  mediaListener = null
}

export function useMobileNav() {
  function open(): void {
    if (!isDesktop.value) {
      isOpen.value = true
    }
  }

  function close(): void {
    isOpen.value = false
  }

  function toggle(): void {
    if (isDesktop.value) return
    isOpen.value = !isOpen.value
  }

  return {
    isOpen,
    isDesktop,
    open,
    close,
    toggle,
  }
}

/** Call once from the catalog shell to sync route, viewport, and body scroll. */
export function useMobileNavEffects(): void {
  const route = useRoute()
  const { isOpen, close } = useMobileNav()

  onMounted(() => {
    subscriberCount += 1
    bindMediaQuery()
  })

  onUnmounted(() => {
    subscriberCount = Math.max(0, subscriberCount - 1)
    if (subscriberCount === 0) {
      unbindMediaQuery()
      document.body.style.overflow = ''
    }
  })

  watch(
    () => route.fullPath,
    () => {
      close()
    },
  )

  watch(
    isOpen,
    (open) => {
      document.body.style.overflow = open ? 'hidden' : ''
    },
    { immediate: true },
  )
}
