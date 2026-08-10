<script setup lang="ts">
import { club, contact, seasons, social } from '~/data/site'

useHead({ title: `Kontakt – ${club.name}` })

const mapQuery = encodeURIComponent(
  (contact.mapQuery || `${contact.street} ${contact.zip} ${contact.city}`).trim(),
)
const socials = computed(() =>
  Object.entries(social).filter(([key, val]) => key !== 'website' && val),
)
</script>

<template>
  <PageHero
    title="Kontakt"
    subtitle="Fragen, Schnuppertraining oder Mitgliedschaft – melde dich bei uns."
  />

  <section class="mx-auto max-w-4xl px-4 py-16">
    <!-- Kanäle -->
    <div class="grid gap-6 sm:grid-cols-2">
      <div
        class="rounded-2xl border border-slate-200 border-t-4 border-t-blau-900 bg-white p-6"
      >
        <div
          class="flex h-11 w-11 items-center justify-center rounded-xl bg-blau-50 text-blau-900"
        >
          <AppIcon name="mail" class="h-6 w-6" />
        </div>
        <h2 class="mt-4 text-lg font-bold text-slate-900">E-Mail</h2>
        <p class="mt-2 text-sm text-slate-600">
          Für Anfragen aller Art – wir antworten so rasch wie möglich.
        </p>
        <a
          :href="`mailto:${contact.email}`"
          class="mt-4 inline-flex rounded-xl bg-blau-900 px-5 py-2.5 font-bold text-white transition hover:bg-blau-800"
          >{{ contact.email }}</a
        >
      </div>

      <div
        class="rounded-2xl border border-slate-200 border-t-4 border-t-gelb-400 bg-white p-6"
      >
        <div
          class="flex h-11 w-11 items-center justify-center rounded-xl bg-gelb-50 text-blau-900"
        >
          <AppIcon name="whatsapp" class="h-6 w-6" />
        </div>
        <h2 class="mt-4 text-lg font-bold text-slate-900">WhatsApp</h2>
        <p class="mt-2 text-sm leading-relaxed text-slate-600">
          Die laufende Kommunikation im Verein – Trainingstermine, kurzfristige
          Änderungen, Absprachen – läuft über unsere WhatsApp-Gruppe. Als
          Mitglied kannst du jederzeit dazukommen, die Teilnahme ist freiwillig.
        </p>
        <template v-if="contact.whatsapp">
          <a
            :href="contact.whatsapp"
            target="_blank"
            rel="noopener"
            class="mt-4 inline-flex rounded-xl bg-blau-900 px-5 py-2.5 font-bold text-white transition hover:bg-blau-800"
          >
            WhatsApp öffnen
          </a>
          <p v-if="contact.whatsappName" class="mt-3 text-sm text-slate-500">
            Deine Nachricht landet bei {{ contact.whatsappName }}.
          </p>
        </template>
        <p v-else class="mt-4 text-sm text-slate-500">
          In die Gruppe nehmen wir dich nach deiner Anmeldung auf – schreib uns
          dafür kurz per E-Mail.
        </p>
      </div>
    </div>

    <!-- Vereinssitz -->
    <h2 class="mt-14 text-2xl font-extrabold text-blau-900">
      Vereinssitz & Vertretung
    </h2>
    <div class="mt-6 grid gap-6 md:grid-cols-2">
      <div class="rounded-2xl border-l-4 border-blau-700 bg-blau-50 p-6">
        <address class="space-y-1 not-italic text-slate-700">
          <p class="font-bold text-blau-950">{{ club.officialName }}</p>
          <p v-if="contact.street">{{ contact.street }}</p>
          <p>{{ contact.zip }} {{ contact.city }}, {{ contact.country }}</p>
          <p>ZVR-Zahl: {{ contact.zvr }}</p>
          <p>
            <a
              :href="`mailto:${contact.email}`"
              class="font-semibold text-blau-700 underline"
              >{{ contact.email }}</a
            >
          </p>
          <p v-if="contact.phone">
            <a :href="`tel:${contact.phone}`" class="text-blau-700 underline">{{
              contact.phone
            }}</a>
          </p>
          <p class="pt-2 text-sm text-slate-600">
            Vertretung nach außen: {{ contact.representative }}
          </p>
        </address>

        <div v-if="socials.length" class="mt-5">
          <p class="text-sm font-bold text-slate-900">Folge uns</p>
          <div class="mt-2 flex flex-wrap gap-2">
            <a
              v-for="[key, url] in socials"
              :key="key"
              :href="url"
              target="_blank"
              rel="noopener"
              class="rounded-lg bg-blau-900 px-4 py-2 text-sm font-semibold capitalize text-white hover:bg-blau-800"
              >{{ key }}</a
            >
          </div>
        </div>
      </div>

      <!-- Karte (Link statt eingebetteter iframe – kein Drittanbieter-Inhalt) -->
      <a
        :href="`https://www.openstreetmap.org/search?query=${mapQuery}`"
        target="_blank"
        rel="noopener"
        class="bg-grid group relative flex min-h-65 flex-col items-center justify-center overflow-hidden rounded-2xl bg-blau-900 p-8 text-center text-white transition hover:bg-blau-800"
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

    <!-- Trainingszeiten im Überblick -->
    <h2 class="mt-14 text-2xl font-extrabold text-blau-900">
      Trainingszeiten & Treffpunkte
    </h2>
    <p class="mt-3 text-slate-600">
      Unser Programm wechselt mit der Saison. Kurzfristige Änderungen geben wir
      in der WhatsApp-Gruppe bekannt.
    </p>
    <ul class="mt-6 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200">
      <li
        v-for="s in seasons"
        :key="s.id"
        class="flex flex-wrap items-baseline gap-x-3 gap-y-1 bg-white px-5 py-4"
      >
        <span class="w-40 shrink-0 text-sm font-bold text-blau-900">{{
          s.season
        }}</span>
        <span class="font-semibold text-slate-800">{{ s.title }}</span>
        <span class="text-sm text-slate-500">{{ s.when }} · {{ s.place }}</span>
      </li>
    </ul>
    <NuxtLink
      to="/angebot"
      class="mt-6 inline-flex items-center gap-2 font-bold text-blau-700 hover:text-blau-900"
    >
      Zum vollständigen Angebot
      <AppIcon name="arrow" class="h-4 w-4" />
    </NuxtLink>
  </section>

  <ContactCta
    title="Einfach mitmachen"
    text="Interesse an einer Mitgliedschaft? Schreib uns – wir erklären dir alles und du kannst jederzeit zum Schnuppern kommen."
    subject="Anfrage blaugelb Offenhausen"
  />
</template>
