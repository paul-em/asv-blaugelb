<script setup lang="ts">
import { club, contact, events, history } from '~/data/site'

useHead({ title: `Termine – ${club.name}` })
</script>

<template>
  <PageHero
    title="Termine & Veranstaltungen"
    subtitle="Unsere eigenen Bewerbe und die wichtigsten Termine im Vereinsjahr."
  />

  <section class="mx-auto max-w-6xl px-4 py-16">
    <h2 class="text-2xl font-extrabold text-blau-900">Kommende Termine</h2>

    <div v-if="events.length" class="mt-8 grid gap-6 md:grid-cols-3">
      <EventCard v-for="e in events" :key="e.name" :event="e" />
    </div>

    <div
      v-else
      class="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6"
    >
      <p class="text-slate-700">
        Aktuell ist keine Veranstaltung ausgeschrieben. Sobald ein Termin
        feststeht, findest du ihn hier.
      </p>
      <a
        :href="`mailto:${contact.email}?subject=Termine blaugelb Offenhausen`"
        class="mt-4 inline-flex items-center gap-2 font-bold text-blau-700 hover:text-blau-900"
      >
        Auf dem Laufenden bleiben
        <AppIcon name="arrow" class="h-4 w-4" />
      </a>
    </div>
  </section>

  <section class="bg-slate-50">
    <div class="mx-auto max-w-6xl px-4 py-16">
      <h2 class="text-2xl font-extrabold text-blau-900">Rückblick</h2>
      <p class="mt-3 max-w-2xl text-slate-600">
        Von 2013 bis 2017 haben wir jedes Jahr ein eigenes Rennen auf
        den Wiesenrundkursen in Bachstätten ausgetragen – vom
        Mountainbike-Rennen bis zur Querfeldein-Landesmeisterschaft.
      </p>
      <div class="mt-8 grid gap-6 md:grid-cols-3">
        <EventCard v-for="e in history" :key="e.name + e.when" :event="e" />
      </div>
    </div>
  </section>
</template>
