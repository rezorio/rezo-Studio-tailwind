import type { Component } from 'vue'

/** Eager catalog metadata — safe for shell, search, and home. */
export interface ComponentItem {
  id: string
  name: string
  description: string
  /**
   * Lazy loader for Preview + Code. Must import the same `.vue` as both the
   * default SFC and `?raw` so the two tabs stay in sync.
   */
  load: () => Promise<LoadedComponent>
}

/** Resolved payload used by CategoryView / ComponentCard. */
export interface LoadedComponent {
  component: Component
  code: string
}

export interface Category {
  id: string
  name: string
  description: string
  components: ComponentItem[]
}

export type LoadedComponentItem = Omit<ComponentItem, 'load'> & LoadedComponent
