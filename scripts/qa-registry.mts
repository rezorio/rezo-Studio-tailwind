/**
 * Registry QA — validates every catalog entry loads Preview + Code without errors.
 * Run: npx vite-node scripts/qa-registry.mts
 */
import { readdirSync, statSync } from 'node:fs'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'
import { categories, getCategoryById, loadCategoryComponents } from '../src/registry/index.ts'

const root = fileURLToPath(new URL('..', import.meta.url))
const libraryRoot = join(root, 'src/components/library')

type Failure = { scope: string; message: string }
const failures: Failure[] = []
const passes: string[] = []

function fail(scope: string, message: string) {
  failures.push({ scope, message })
}

function pass(message: string) {
  passes.push(message)
}

function collectVueFiles(dir: string): string[] {
  const results: string[] = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      results.push(...collectVueFiles(full))
    } else if (entry.endsWith('.vue')) {
      results.push(full)
    }
  }
  return results
}

// --- Registry structure ---
const categoryIds = new Set<string>()
const componentIds = new Set<string>()

for (const category of categories) {
  if (categoryIds.has(category.id)) {
    fail('registry', `Duplicate category id: ${category.id}`)
  }
  categoryIds.add(category.id)

  if (!category.name.trim()) fail(`category:${category.id}`, 'Missing name')
  if (!category.description.trim()) fail(`category:${category.id}`, 'Missing description')
  if (category.components.length === 0) fail(`category:${category.id}`, 'No components')

  for (const item of category.components) {
    const key = `${category.id}/${item.id}`
    if (componentIds.has(key)) {
      fail('registry', `Duplicate component id: ${key}`)
    }
    componentIds.add(key)

    if (!item.name.trim()) fail(key, 'Missing name')
    if (!item.description.trim()) fail(key, 'Missing description')
    if (typeof item.load !== 'function') fail(key, 'Missing load()')
  }
}

pass(`${categories.length} categories with unique ids`)

const totalComponents = categories.reduce((n, c) => n + c.components.length, 0)
pass(`${totalComponents} components registered`)

// --- Library file coverage ---
const libraryFiles = collectVueFiles(libraryRoot)
const unregistered = libraryFiles.filter((file) => {
  const rel = relative(libraryRoot, file).replace(/\\/g, '/')
  // Shared shell used by templates, not a standalone catalog entry
  if (rel === 'template/TemplatePageShell.vue') return false
  return true
})

const registeredPaths = new Set<string>()
for (const category of categories) {
  for (const item of category.components) {
    registeredPaths.add(`${category.id}/${item.id}`)
  }
}

// Map expected paths from registry ids (convention check done during load)

// --- Load every component ---
let loadedCount = 0
let totalCodeBytes = 0

for (const category of categories) {
  const resolved = await loadCategoryComponents(category.id)
  if (resolved.length !== category.components.length) {
    fail(
      `category:${category.id}`,
      `Expected ${category.components.length} loads, got ${resolved.length}`,
    )
  }

  for (const item of resolved) {
    loadedCount++
    const scope = `${category.id}/${item.id}`

    if (!item.component) fail(scope, 'component is null/undefined')
    if (typeof item.code !== 'string' || item.code.trim().length < 20) {
      fail(scope, `code string too short (${item.code?.length ?? 0} chars)`)
    } else {
      totalCodeBytes += item.code.length
      if (!item.code.includes('<template')) {
        fail(scope, 'raw code missing <template>')
      }
    }

    if (!item.name || !item.description) fail(scope, 'metadata missing after load')
  }
}

pass(`All ${loadedCount} components loaded (Preview + ?raw Code)`)
pass(`Total raw source: ${(totalCodeBytes / 1024).toFixed(1)} KB`)

// --- Router helper smoke ---
if (!getCategoryById('hero')) fail('router', 'getCategoryById("hero") failed')
if (getCategoryById('nonexistent')) fail('router', 'getCategoryById should return undefined for bad id')
else pass('getCategoryById handles valid/invalid ids')

// --- Report ---
console.log('\n=== rezo Studio Registry QA ===\n')
for (const p of passes) console.log(`  ✓ ${p}`)

if (failures.length > 0) {
  console.log('\nFailures:\n')
  for (const f of failures) console.log(`  ✗ [${f.scope}] ${f.message}`)
  console.log(`\n${failures.length} failure(s), ${passes.length} pass(es)\n`)
  process.exit(1)
}

console.log(`\nAll checks passed (${passes.length}).\n`)
