import type { ThemeDefinition, ThemeId } from '@/themes/types'

export type { ThemeDefinition, ThemeId }

export const THEME_STORAGE_KEY = 'rezo-studio-theme'

export const DEFAULT_THEME: ThemeId = 'light'

export const themes: ThemeDefinition[] = [
  {
    id: 'light',
    label: 'Light',
    description: 'Light catalog shell',
  },
  {
    id: 'dark',
    label: 'Dark',
    description: 'Dark catalog shell',
  },
]

/** Maps legacy theme ids from earlier mist/charcoal naming. */
const LEGACY_THEME_MAP: Record<string, ThemeId> = {
  mist: 'light',
  charcoal: 'dark',
}

export function isThemeId(value: string): value is ThemeId {
  return themes.some((theme) => theme.id === value)
}

export function resolveThemeId(value: string | null): ThemeId | null {
  if (!value) return null
  if (isThemeId(value)) return value
  return LEGACY_THEME_MAP[value] ?? null
}

export function getThemeById(id: ThemeId): ThemeDefinition {
  return themes.find((theme) => theme.id === id) ?? themes[0]!
}
