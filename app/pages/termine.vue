<script setup lang="ts">
import { club, events } from '~/data/site'

useHead({ title: `Termine – ${club.name}` })
</script>

<template>
  <PageHero
    title="Termine & Veranstaltungen"
    subtitle="Unsere eigenen Bewerbe und die wichtigsten Termine im Vereinsjahr."
  />

  <section class="mx-auto max-w-6xl px-4 py-16">
    <h2 class="text-2xl font-extrabold text-blau-900">Eigene Veranstaltungen</h2>
    <div class="mt-8 grid gap-6 md:grid-cols-3">
      <EventCard v-for="e in events" :key="e.name" :event="e" />
    </div>

    <div
      class="mt-12 rounded-2xl border border-dashed border-blau-300 bg-blau-50 p-6 text-blau-900"
    >
      <h3 class="text-lg font-bold">Wettkampfkalender</h3>
      <p class="mt-2 text-sm leading-relaxed">
        Hier kann ein laufend gepflegter Terminkalender mit den Bewerben
        stehen, an denen der Verein teilnimmt (z. B. Traunviertler Laufcup).
        <br />
        <span class="text-blau-700"
          >TODO: konkrete Daten und Bewerbe ergänzen – siehe Frageliste.</span
        >
      </p>
    </div>
  </section>
</template>
