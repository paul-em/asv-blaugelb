<script setup lang="ts">
import { club, contact, documents } from '~/data/site'

useHead({ title: `Dokumente – ${club.name}` })
</script>

<template>
  <PageHero
    title="Dokumente"
    subtitle="Formulare und Ordnungen des Vereins zum Nachlesen und Herunterladen."
  />

  <section class="mx-auto max-w-3xl px-4 py-16">
    <p class="text-lg leading-relaxed text-slate-700">
      Hier findest du die Unterlagen rund um Mitgliedschaft und Freibadnutzung.
      Fragen dazu beantwortet der Vorstand jederzeit.
    </p>

    <div class="mt-8 space-y-4">
      <div
        v-for="d in documents"
        :key="d.title"
        class="rounded-2xl border border-slate-200 bg-white p-6"
      >
        <h2 class="font-bold text-slate-900">{{ d.title }}</h2>
        <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ d.text }}</p>

        <a
          v-if="d.file"
          :href="d.file"
          target="_blank"
          rel="noopener"
          class="mt-4 inline-flex items-center gap-2 rounded-xl bg-blau-900 px-5 py-3 font-bold text-white transition hover:bg-blau-800"
        >
          <AppIcon name="download" class="h-5 w-5 text-gelb-400" />
          Herunterladen
        </a>
        <p v-else class="mt-4 text-sm font-semibold text-slate-500">
          Folgt in Kürze – bis dahin schicken wir dir das Dokument gerne per
          E-Mail.
        </p>
      </div>
    </div>

    <div class="mt-8 rounded-2xl border-l-4 border-gelb-400 bg-gelb-50 p-6">
      <p class="font-bold text-blau-950">Brauchst du etwas davon jetzt?</p>
      <p class="mt-1 leading-relaxed text-slate-700">
        Schreib uns kurz – wir schicken dir die Unterlagen per E-Mail zu.
      </p>
      <a
        v-if="contact.email"
        :href="`mailto:${contact.email}?subject=${encodeURIComponent('Unterlagen blaugelb Offenhausen')}`"
        class="mt-4 inline-flex items-center gap-2 rounded-xl bg-blau-900 px-5 py-3 font-bold text-white transition hover:bg-blau-800"
      >
        <AppIcon name="mail" class="h-5 w-5 text-gelb-400" />
        {{ contact.email }}
      </a>
    </div>
  </section>
</template>
