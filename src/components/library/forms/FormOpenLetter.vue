<script setup lang="ts">
import brandLogo from '@/assets/brand/logo.png'

/**
 * Open Letter — a contact form styled like a short note.
 * Message first, signature fields below — minimal chrome, generous whitespace.
 * On hover: letter lifts, divider draws in, and the brand logo stamps the corner.
 */
</script>

<template>
  <section class="-mx-6 -my-6 bg-studio-50 px-6 py-12 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-14">
    <form
      class="letter-card group relative mx-auto max-w-md overflow-hidden rounded-2xl border border-studio-200/90 bg-white px-7 py-8 shadow-[0_12px_40px_rgba(20,31,28,0.05)] sm:px-9 sm:py-10"
      @submit.prevent
    >
      <!-- Brand logo stamp — slams in on hover -->
      <div class="postmark" aria-hidden="true">
        <div class="postmark__stamp">
          <img
            :src="brandLogo"
            alt=""
            class="postmark__logo"
            width="88"
            height="24"
          />
        </div>
      </div>

      <p class="font-display text-lg font-medium text-studio-950 transition-colors duration-300 group-hover:text-accent">
        Dear team,
      </p>

      <div class="mt-3">
        <label for="letter-message" class="sr-only">Message</label>
        <textarea
          id="letter-message"
          name="message"
          rows="3"
          placeholder="I wanted to reach out about…"
          class="w-full resize-none border-0 bg-transparent p-0 text-base leading-normal text-studio-800 placeholder:text-studio-300 focus:outline-none focus:ring-0"
        />
      </div>

      <div class="relative mt-6 pt-6">
        <div class="ink-divider" aria-hidden="true" />

        <p class="text-[11px] font-semibold tracking-[0.12em] text-studio-400 uppercase">
          Yours sincerely
        </p>

        <div class="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
          <div class="flex-1">
            <label for="letter-name" class="sr-only">Name</label>
            <input
              id="letter-name"
              type="text"
              name="name"
              placeholder="Your name"
              autocomplete="name"
              class="w-full border-0 border-b border-studio-200 bg-transparent py-1.5 text-sm text-studio-900 placeholder:text-studio-300 focus:border-accent focus:outline-none"
            />
          </div>
          <span class="hidden text-studio-300 sm:inline" aria-hidden="true">·</span>
          <div class="flex-1">
            <label for="letter-email" class="sr-only">Email</label>
            <input
              id="letter-email"
              type="email"
              name="email"
              placeholder="you@email.com"
              autocomplete="email"
              class="w-full border-0 border-b border-studio-200 bg-transparent py-1.5 text-sm text-studio-900 placeholder:text-studio-300 focus:border-accent focus:outline-none"
            />
          </div>
        </div>

        <div class="mt-6 flex justify-end">
          <button
            type="submit"
            class="inline-flex items-center gap-2 rounded-full border border-studio-200 bg-studio-50 px-5 py-2 text-sm font-semibold text-studio-800 transition hover:border-accent hover:bg-accent-muted/50 hover:text-accent"
          >
            Send letter
            <svg
              class="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </form>
  </section>
</template>

<style scoped>
.letter-card {
  transition:
    transform 0.4s cubic-bezier(0.34, 1.2, 0.64, 1),
    box-shadow 0.4s ease;
}

.letter-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 24px 52px rgba(20, 31, 28, 0.1);
}

/* Dashed divider draws left → right on hover */
.ink-divider {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 0;
  border-top: 1px dashed #c8d9d3;
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1);
}

.letter-card:hover .ink-divider {
  transform: scaleX(1);
}

/* Logo rubber-stamp */
.postmark {
  position: absolute;
  top: 1rem;
  right: 1rem;
  z-index: 10;
  pointer-events: none;
  opacity: 0;
  transform: scale(2.4) rotate(-16deg);
  transition:
    opacity 0.2s ease 0.05s,
    transform 0.38s cubic-bezier(0.22, 1.65, 0.36, 1) 0.05s;
}

.letter-card:hover .postmark {
  opacity: 1;
  transform: scale(1) rotate(-11deg);
}

.postmark__stamp {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  border: 2px dashed rgba(26, 122, 102, 0.45);
  border-radius: 9999px;
  background: radial-gradient(circle, rgba(216, 239, 232, 0.35) 0%, rgba(216, 239, 232, 0.08) 70%);
  padding: 0.65rem;
  box-shadow: inset 0 0 0 1px rgba(26, 122, 102, 0.08);
}

.postmark__logo {
  width: 2.85rem;
  height: auto;
  object-fit: contain;
  opacity: 0.72;
  /* Teal ink-stamp tint on the black wordmark */
  filter: brightness(0) saturate(100%) invert(28%) sepia(52%) saturate(864%) hue-rotate(122deg)
    brightness(92%) contrast(92%);
  mix-blend-mode: multiply;
}

@media (prefers-reduced-motion: reduce) {
  .letter-card,
  .ink-divider,
  .postmark {
    transition: none;
  }

  .letter-card:hover {
    transform: none;
    box-shadow: 0 12px 40px rgba(20, 31, 28, 0.05);
  }

  .letter-card:hover .ink-divider {
    transform: scaleX(1);
  }

  .postmark {
    opacity: 0.75;
    transform: scale(1) rotate(-11deg);
  }
}
</style>
