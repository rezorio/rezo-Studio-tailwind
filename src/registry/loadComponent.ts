import { markRaw, type Component } from 'vue'
import type { LoadedComponent } from '@/registry/types'

type VueModule = { default: Component }
type RawModule = { default: string }

/**
 * Shared helper for registry `load()` entries.
 * Vite code-splits each pair so demos are not in the initial shell bundle.
 */
export async function loadLibraryComponent(
  componentImport: () => Promise<VueModule>,
  rawImport: () => Promise<RawModule>,
): Promise<LoadedComponent> {
  const [vueMod, rawMod] = await Promise.all([componentImport(), rawImport()])
  return {
    component: markRaw(vueMod.default),
    code: rawMod.default,
  }
}
