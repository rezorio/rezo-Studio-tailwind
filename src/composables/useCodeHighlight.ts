import { computed, type MaybeRefOrGetter, toValue } from 'vue'
import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import css from 'highlight.js/lib/languages/css'
import type { CodeLanguage } from '@/types/component-viewer'

let registered = false

function ensureLanguages() {
  if (registered) return
  hljs.registerLanguage('xml', xml)
  hljs.registerLanguage('html', xml)
  hljs.registerLanguage('vue', xml)
  hljs.registerLanguage('javascript', javascript)
  hljs.registerLanguage('typescript', typescript)
  hljs.registerLanguage('css', css)
  registered = true
}

export function useCodeHighlight(
  code: MaybeRefOrGetter<string>,
  language: MaybeRefOrGetter<CodeLanguage> = 'vue',
) {
  ensureLanguages()

  const highlightedHtml = computed(() => {
    const source = toValue(code)
    const lang = toValue(language)

    try {
      return hljs.highlight(source, { language: lang }).value
    } catch {
      return hljs.highlightAuto(source).value
    }
  })

  return { highlightedHtml }
}
