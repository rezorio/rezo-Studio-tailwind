<script setup lang="ts">
/**
 * Drift Contact — underline inputs with labels that float on focus.
 * A soft card with a left accent stripe keeps the layout calm and editorial.
 */
</script>

<template>
  <section
    class="-mx-6 -my-6 bg-[linear-gradient(165deg,#f7fbfa_0%,#ffffff_50%,#eef5f2_100%)] px-6 py-12 sm:-mx-8 sm:-my-8 sm:px-10 sm:py-14"
  >
    <form
      class="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-studio-200/80 bg-white/90 p-8 shadow-[0_16px_48px_rgba(20,31,28,0.06)] backdrop-blur-sm"
      @submit.prevent
    >
      <!-- Accent stripe -->
      <span
        class="absolute inset-y-6 left-0 w-1 rounded-r-full bg-gradient-to-b from-accent/40 via-accent to-accent/40"
        aria-hidden="true"
      />

      <header class="pl-3">
        <p class="text-xs font-semibold tracking-[0.14em] text-accent uppercase">Get in touch</p>
        <h2 class="mt-2 font-display text-2xl font-semibold tracking-tight text-studio-950">
          Drop us a line
        </h2>
        <p class="mt-1.5 text-sm leading-relaxed text-studio-500">
          We usually reply within one business day.
        </p>
      </header>

      <div class="mt-8 space-y-7 pl-3">
        <!-- Name -->
        <div class="group relative">
          <input
            id="drift-name"
            type="text"
            name="name"
            placeholder=" "
            autocomplete="name"
            class="peer w-full border-0 border-b border-studio-200 bg-transparent py-2.5 text-sm text-studio-900 placeholder-transparent transition-colors focus:border-accent focus:outline-none"
          />
          <label
            for="drift-name"
            class="pointer-events-none absolute left-0 top-2.5 origin-left text-sm text-studio-400 transition-all duration-200 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:scale-[0.85] peer-focus:text-accent peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:scale-[0.85] peer-[&:not(:placeholder-shown)]:text-studio-500"
          >
            Your name
          </label>
          <span
            class="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-300 group-focus-within:w-full"
            aria-hidden="true"
          />
        </div>

        <!-- Email -->
        <div class="group relative">
          <input
            id="drift-email"
            type="email"
            name="email"
            placeholder=" "
            autocomplete="email"
            class="peer w-full border-0 border-b border-studio-200 bg-transparent py-2.5 text-sm text-studio-900 placeholder-transparent transition-colors focus:border-accent focus:outline-none"
          />
          <label
            for="drift-email"
            class="pointer-events-none absolute left-0 top-2.5 origin-left text-sm text-studio-400 transition-all duration-200 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:scale-[0.85] peer-focus:text-accent peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:scale-[0.85] peer-[&:not(:placeholder-shown)]:text-studio-500"
          >
            Email address
          </label>
          <span
            class="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-300 group-focus-within:w-full"
            aria-hidden="true"
          />
        </div>

        <!-- Message -->
        <div class="group relative">
          <textarea
            id="drift-message"
            name="message"
            rows="3"
            placeholder=" "
            class="peer w-full resize-none border-0 border-b border-studio-200 bg-transparent py-2.5 text-sm text-studio-900 placeholder-transparent transition-colors focus:border-accent focus:outline-none"
          />
          <label
            for="drift-message"
            class="pointer-events-none absolute left-0 top-2.5 origin-left text-sm text-studio-400 transition-all duration-200 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-focus:-top-3 peer-focus:scale-[0.85] peer-focus:text-accent peer-[&:not(:placeholder-shown)]:-top-3 peer-[&:not(:placeholder-shown)]:scale-[0.85] peer-[&:not(:placeholder-shown)]:text-studio-500"
          >
            How can we help?
          </label>
          <span
            class="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-300 group-focus-within:w-full"
            aria-hidden="true"
          />
        </div>
      </div>

      <button
        type="submit"
        class="mt-8 ml-3 inline-flex w-[calc(100%-0.75rem)] items-center justify-center gap-2 rounded-xl bg-studio-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-studio-800"
      >
        Send message
        <svg
          class="size-4 text-accent"
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
    </form>
  </section>
</template>
