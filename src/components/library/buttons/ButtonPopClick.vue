<script setup lang="ts">
import { ref } from 'vue'

/**
 * Pop click button — satisfying spring bounce with a ripple burst on every click.
 */
const popping = ref(false)
const ripples = ref<{ id: number; x: number; y: number }[]>([])
let rippleId = 0

function handleClick(event: MouseEvent): void {
  const target = event.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()
  const x = event.clientX - rect.left
  const y = event.clientY - rect.top

  ripples.value.push({ id: ++rippleId, x, y })

  popping.value = false
  requestAnimationFrame(() => {
    popping.value = true
  })

  setTimeout(() => {
    ripples.value = ripples.value.filter((r) => r.id !== rippleId)
  }, 600)

  setTimeout(() => {
    popping.value = false
  }, 450)
}
</script>

<template>
  <div class="-mx-6 -my-6 bg-[linear-gradient(180deg,#f7fbfa_0%,#eef5f2_100%)] px-6 py-14 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-16">
    <div class="mx-auto max-w-md text-center">
      <p class="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Interactive</p>
      <h3 class="mt-2 font-display text-xl font-semibold tracking-tight text-studio-950">
        Pop on click
      </h3>
      <p class="mt-2 text-sm text-studio-600">
        Click it — a spring bounce and ripple burst give instant tactile feedback.
      </p>

      <div class="mt-10 flex flex-col items-center gap-4">
        <button
          type="button"
          class="btn-pop relative overflow-hidden rounded-2xl bg-accent px-8 py-3.5 text-base font-bold text-white shadow-[0_10px_30px_rgba(26,122,102,0.35)]"
          :class="{ 'btn-pop--active': popping }"
          @click="handleClick"
        >
          <span
            v-for="ripple in ripples"
            :key="ripple.id"
            class="btn-pop__ripple"
            :style="{ left: `${ripple.x}px`, top: `${ripple.y}px` }"
            aria-hidden="true"
          />
          <span class="relative z-10 flex items-center gap-2">
            <svg
              class="size-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
            Confirm action
          </span>
        </button>

        <p class="text-xs text-studio-500">Try clicking multiple times</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn-pop {
  transition: box-shadow 0.3s ease;
}

.btn-pop:hover {
  box-shadow: 0 14px 36px rgba(26, 122, 102, 0.42);
}

.btn-pop--active {
  animation: pop-spring 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.btn-pop__ripple {
  position: absolute;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.45);
  transform: translate(-50%, -50%);
  animation: pop-ripple 0.6s ease-out forwards;
  pointer-events: none;
}

@keyframes pop-spring {
  0% {
    transform: scale(1);
  }
  30% {
    transform: scale(0.88);
  }
  55% {
    transform: scale(1.1);
  }
  75% {
    transform: scale(0.97);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes pop-ripple {
  0% {
    width: 0;
    height: 0;
    opacity: 0.6;
  }
  100% {
    width: 200px;
    height: 200px;
    opacity: 0;
  }
}
</style>
