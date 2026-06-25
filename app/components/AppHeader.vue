<script setup lang="ts">
import { club, nav } from '~/data/site'

const open = ref(false)
const route = useRoute()

// Menü nach Navigation schließen
watch(
  () => route.path,
  () => {
    open.value = false
  },
)
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur"
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
      <NuxtLink to="/" class="flex items-center gap-3">
        <LogoMark class="h-10 w-10" />
        <span class="leading-tight">
          <span class="block font-extrabold tracking-tight text-blau-900">{{
            club.shortName
          }}</span>
          <span class="block text-xs font-medium text-slate-500">{{
            club.tagline
          }}</span>
        </span>
      </NuxtLink>

      <!-- Desktop-Navigation -->
      <nav class="hidden items-center gap-1 md:flex">
        <NuxtLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          class="rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-blau-50 hover:text-blau-900"
          active-class="!text-blau-900 bg-blau-50"
        >
          {{ item.label }}
        </NuxtLink>
        <NuxtLink
          to="/mitglied"
          class="ml-2 rounded-lg bg-gelb-400 px-4 py-2 text-sm font-bold text-blau-950 transition hover:bg-gelb-300"
        >
          Jetzt mitmachen
        </NuxtLink>
      </nav>

      <!-- Mobile-Toggle -->
      <button
        class="inline-flex items-center justify-center rounded-lg p-2 text-blau-900 md:hidden"
        :aria-expanded="open"
        aria-label="Menü"
        @click="open = !open"
      >
        <svg
          v-if="!open"
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg
          v-else
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>
    </div>

    <!-- Mobile-Menü -->
    <nav v-if="open" class="border-t border-slate-200 bg-white md:hidden">
      <div class="mx-auto max-w-6xl px-4 py-2">
        <NuxtLink
          v-for="item in nav"
          :key="item.to"
          :to="item.to"
          class="block rounded-lg px-3 py-3 font-semibold text-slate-700 hover:bg-blau-50"
          active-class="!text-blau-900 bg-blau-50"
        >
          {{ item.label }}
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>
