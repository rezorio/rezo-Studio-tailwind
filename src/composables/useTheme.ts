import { computed, readonly, ref, watch } from 'vue'
import {
  DEFAULT_THEME,
  THEME_STORAGE_KEY,
  getThemeById,
  resolveThemeId,
  themes,
  type ThemeId,
} from '@/themes'

const themeId = ref<ThemeId>(DEFAULT_THEME)
let bootstrapped = false

function readStoredTheme(): ThemeId {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    const resolved = resolveThemeId(stored)
    if (resolved) return resolved
  } catch {
    /* ignore storage errors */
  }
  return DEFAULT_THEME
}

function applyTheme(id: ThemeId) {
  document.documentElement.setAttribute('data-theme', id)
  document.documentElement.style.colorScheme = id
}

function persistTheme(id: ThemeId) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, id)
  } catch {
    /* ignore storage errors */
  }
}

function bootstrapThemeWatch() {
  if (bootstrapped) return
  bootstrapped = true

  watch(themeId, (id) => {
    applyTheme(id)
    persistTheme(id)
  })
}

/** Call once before app mount to avoid a flash of the wrong theme. */
export function initTheme() {
  themeId.value = readStoredTheme()
  applyTheme(themeId.value)
  bootstrapThemeWatch()
}

export function useTheme() {
  bootstrapThemeWatch()

  const theme = computed(() => getThemeById(themeId.value))
  const isDark = computed(() => themeId.value === 'dark')

  function setTheme(id: ThemeId) {
    themeId.value = id
  }

  function toggleTheme() {
    themeId.value = themeId.value === 'light' ? 'dark' : 'light'
  }

  return {
    themes,
    themeId: readonly(themeId),
    theme,
    isDark,
    setTheme,
    toggleTheme,
  }
}
