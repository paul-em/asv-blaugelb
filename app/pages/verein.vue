<script setup lang="ts">
import { club, board } from '~/data/site'

useHead({ title: `Verein – ${club.name}` })

const hasBoardNames = board.some((b) => b.name)
</script>

<template>
  <PageHero
    title="Unser Verein"
    subtitle="Ausdauersport mit Tradition und Gemeinschaft in Offenhausen."
  />

  <section class="mx-auto max-w-3xl px-4 py-16">
    <h2 class="text-2xl font-extrabold text-blau-900">Wer wir sind</h2>
    <p class="mt-4 text-lg leading-relaxed text-slate-700">
      {{ club.intro }}
    </p>
    <p class="mt-4 leading-relaxed text-slate-700">
      Als Ausdauersportverein verbinden wir Laufen und Radsport mit dem
      Gemeinschaftsgedanken: gemeinsame Trainings, die Teilnahme an Bewerben
      der Region – etwa im Traunviertler Laufcup – und nicht zuletzt unsere
      eigenen Veranstaltungen wie der Offenhausener Marktlauf prägen das
      Vereinsleben.
    </p>

    <!-- TODO: Vereinsgeschichte ergänzen -->
    <div
      class="mt-8 rounded-xl border border-dashed border-blau-300 bg-blau-50 p-5 text-sm text-blau-900"
    >
      <strong>Hinweis (bitte vor Veröffentlichung entfernen):</strong>
      Hier kann die Vereinsgeschichte stehen – Gründungsjahr, wichtige
      Meilensteine, sportliche Erfolge. Diese Infos waren online nicht
      abrufbar; siehe Frageliste.
    </div>
  </section>

  <section class="bg-slate-50">
    <div class="mx-auto max-w-5xl px-4 py-16">
      <h2 class="text-2xl font-extrabold text-blau-900">Der Vorstand</h2>
      <p class="mt-3 text-slate-600">
        Die Personen, die den Verein ehrenamtlich leiten.
      </p>

      <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(m, i) in board"
          :key="i"
          class="rounded-2xl border border-slate-200 bg-white p-6"
        >
          <div
            class="flex h-12 w-12 items-center justify-center rounded-full bg-blau-900 font-bold text-gelb-400"
          >
            {{ (m.name || m.role).charAt(0) }}
          </div>
          <p class="mt-4 text-sm font-medium text-blau-700">{{ m.role }}</p>
          <p class="text-lg font-bold text-slate-900">
            {{ m.name || 'Name folgt' }}
          </p>
        </div>
      </div>

      <p v-if="!hasBoardNames" class="mt-6 text-sm text-slate-500">
        Die Namen des Vorstands werden ergänzt, sobald sie vorliegen.
      </p>
    </div>
  </section>
</template>
