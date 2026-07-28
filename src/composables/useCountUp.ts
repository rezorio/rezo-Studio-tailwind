import { onMounted, ref, type Ref } from 'vue'

export function useCountUp(
  target: number,
  durationMs = 1200,
): { value: Ref<number>; isComplete: Ref<boolean> } {
  const value = ref(0)
  const isComplete = ref(false)

  onMounted(() => {
    if (target === 0) {
      isComplete.value = true
      return
    }

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      value.value = target
      isComplete.value = true
      return
    }

    const start = performance.now()

    function tick(now: number): void {
      const elapsed = now - start
      const progress = Math.min(elapsed / durationMs, 1)
      const eased = 1 - (1 - progress) ** 3
      value.value = Math.round(eased * target)

      if (progress < 1) {
        requestAnimationFrame(tick)
      } else {
        isComplete.value = true
      }
    }

    requestAnimationFrame(tick)
  })

  return { value, isComplete }
}
