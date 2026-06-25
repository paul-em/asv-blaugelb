<script setup lang="ts">
import { club, contact, social } from '~/data/site'

useHead({ title: `Kontakt – ${club.name}` })

const mapQuery = encodeURIComponent(
  `${contact.street} ${contact.zip} ${contact.city}`.trim(),
)
</script>

<template>
  <PageHero
    title="Kontakt"
    subtitle="Fragen, Schnuppertraining oder Mitgliedschaft – melde dich bei uns."
  />

  <section class="mx-auto max-w-5xl px-4 py-16">
    <div class="grid gap-10 md:grid-cols-2">
      <div>
        <h2 class="text-2xl font-extrabold text-blau-900">So erreichst du uns</h2>

        <ul class="mt-6 space-y-5">
          <li class="flex items-start gap-4">
            <span
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-blau-50 text-blau-900"
            >
              <AppIcon name="pin" class="h-5 w-5" />
            </span>
            <div>
              <p class="font-bold text-slate-900">Adresse</p>
              <p class="text-slate-600">
                <template v-if="contact.street">{{ contact.street }}<br /></template>
                {{ contact.zip }} {{ contact.city }}, {{ contact.country }}
              </p>
            </div>
          </li>

          <li v-if="contact.email" class="flex items-start gap-4">
            <span
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-blau-50 text-blau-900"
            >
              <AppIcon name="mail" class="h-5 w-5" />
            </span>
            <div>
              <p class="font-bold text-slate-900">E-Mail</p>
              <a
                :href="`mailto:${contact.email}`"
                class="text-blau-700 hover:underline"
                >{{ contact.email }}</a
              >
            </div>
          </li>

          <li v-if="contact.phone" class="flex items-start gap-4">
            <span
              class="flex h-10 w-10 items-center justify-center rounded-xl bg-blau-50 text-blau-900"
            >
              <AppIcon name="phone" class="h-5 w-5" />
            </span>
            <div>
              <p class="font-bold text-slate-900">Telefon</p>
              <a :href="`tel:${contact.phone}`" class="text-blau-700 hover:underline">{{
                contact.phone
              }}</a>
            </div>
          </li>
        </ul>

        <div v-if="social.facebook || social.instagram" class="mt-8">
          <p class="font-bold text-slate-900">Folge uns</p>
          <div class="mt-3 flex gap-3">
            <a
              v-if="social.facebook"
              :href="social.facebook"
              target="_blank"
              rel="noopener"
              class="rounded-lg bg-blau-900 px-4 py-2 text-sm font-semibold text-white hover:bg-blau-800"
              >Facebook</a
            >
            <a
              v-if="social.instagram"
              :href="social.instagram"
              target="_blank"
              rel="noopener"
              class="rounded-lg bg-blau-900 px-4 py-2 text-sm font-semibold text-white hover:bg-blau-800"
              >Instagram</a
            >
          </div>
        </div>

        <p
          v-if="!contact.email && !contact.phone"
          class="mt-6 rounded-xl bg-blau-50 p-4 text-sm text-blau-900"
        >
          TODO: E-Mail-Adresse und/oder Telefonnummer ergänzen (siehe Frageliste).
        </p>
      </div>

      <!-- Karte (Link statt eingebetteter iframe – funktioniert auf jedem Host) -->
      <a
        :href="`https://www.openstreetmap.org/search?query=${mapQuery}`"
        target="_blank"
        rel="noopener"
        class="bg-grid group relative flex min-h-[320px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-blau-900 p-8 text-center text-white transition hover:bg-blau-800"
      >
        <span
          class="flex h-16 w-16 items-center justify-center rounded-full bg-gelb-400 text-blau-950"
        >
          <AppIcon name="pin" class="h-8 w-8" />
        </span>
        <p class="mt-4 text-lg font-bold">{{ contact.zip }} {{ contact.city }}</p>
        <p class="text-sm text-blau-200">{{ contact.country }}</p>
        <span
          class="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-gelb-400"
        >
          In der Karte öffnen
          <AppIcon name="arrow" class="h-4 w-4" />
        </span>
      </a>
    </div>
  </section>
</template>
