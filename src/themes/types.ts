export type ThemeId = 'light' | 'dark'

export interface ThemeDefinition {
  id: ThemeId
  label: string
  description: string
}
