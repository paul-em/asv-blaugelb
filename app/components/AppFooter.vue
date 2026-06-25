<script setup lang="ts">
import { club, contact, nav, social } from '~/data/site'

const year = 2026
const socials = computed(() =>
  Object.entries(social).filter(
    ([key, val]) => key !== 'website' && val,
  ),
)
</script>

<template>
  <footer class="mt-24 bg-blau-950 text-blau-100">
    <div class="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-3">
      <div>
        <div class="flex items-center gap-3">
          <LogoMark class="h-10 w-10" />
          <span class="font-extrabold text-white">{{ club.shortName }}</span>
        </div>
        <p class="mt-4 max-w-xs text-sm text-blau-200">
          {{ club.tagline }} aus {{ contact.zip }} {{ contact.city }}.
          {{ club.claim }}
        </p>
      </div>

      <div>
        <h3 class="text-sm font-bold uppercase tracking-wider text-gelb-400">
          Navigation
        </h3>
        <ul class="mt-4 space-y-2 text-sm">
          <li v-for="item in nav" :key="item.to">
            <NuxtLink :to="item.to" class="hover:text-white">{{
              item.label
            }}</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/impressum" class="hover:text-white">Impressum</NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-sm font-bold uppercase tracking-wider text-gelb-400">
          Kontakt
        </h3>
        <address class="mt-4 space-y-1 text-sm not-italic text-blau-200">
          <p v-if="contact.street">{{ contact.street }}</p>
          <p>{{ contact.zip }} {{ contact.city }}</p>
          <p v-if="contact.email">
            <a :href="`mailto:${contact.email}`" class="hover:text-white">{{
              contact.email
            }}</a>
          </p>
        </address>
        <div v-if="socials.length" class="mt-4 flex gap-3">
          <a
            v-for="[key, url] in socials"
            :key="key"
            :href="url"
            target="_blank"
            rel="noopener"
            class="rounded-lg bg-blau-900 px-3 py-1 text-xs font-semibold capitalize hover:bg-blau-800"
            >{{ key }}</a
          >
        </div>
      </div>
    </div>

    <div class="border-t border-blau-900">
      <div
        class="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-blau-300"
      >
        © {{ year }} {{ club.name }}. Alle Rechte vorbehalten.
      </div>
    </div>
  </footer>
</template>
