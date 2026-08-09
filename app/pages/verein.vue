<script setup lang="ts">
import { club, board, membership } from '~/data/site'

useHead({ title: `Verein – ${club.name}` })

const knownBoard = computed(() => board.filter((b) => b.name))
const openBoard = computed(() => board.filter((b) => !b.name))
</script>

<template>
  <PageHero
    title="Unser Verein"
    subtitle="Ausdauersport und Gemeinschaft in Offenhausen."
  />

  <section class="mx-auto max-w-3xl px-4 py-16">
    <h2 class="text-2xl font-extrabold text-blau-900">Wer wir sind</h2>
    <p class="mt-4 text-lg leading-relaxed text-slate-700">
      {{ club.intro }}
    </p>
    <p class="mt-4 leading-relaxed text-slate-700">
      Von 2013 bis 2017 haben wir jedes Jahr ein eigenes Rennen auf den
      Wiesenrundkursen in Bachstätten veranstaltet – zuletzt die 2-Brücken Cross
      Challenge mit Querfeldein-Rennen, Crosslauf und Mountainbike-Bewerb an
      einem Wochenende. Dazu kamen Kinder- und Benefizrennen sowie die
      Ferienspiele der Marktgemeinde, bei denen Kinder mit uns laufen und biken
      konnten.
    </p>

    <div class="mt-10 rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <h3 class="text-sm font-bold uppercase tracking-wider text-blau-900">
        Vereinszweck
      </h3>
      <p class="mt-3 leading-relaxed text-slate-700">„{{ club.purpose }}"</p>
      <p class="mt-3 text-sm text-slate-500">
        Statuten § 2 · {{ club.nonprofit }}
      </p>
    </div>
  </section>

  <section class="bg-slate-50">
    <div class="mx-auto max-w-5xl px-4 py-16">
      <h2 class="text-2xl font-extrabold text-blau-900">Der Vorstand</h2>
      <p class="mt-3 text-slate-600">
        Der Vorstand besteht laut Statuten aus sechs Personen, die den Verein
        ehrenamtlich leiten. Nach außen vertritt der Obmann den Verein.
      </p>

      <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="m in knownBoard"
          :key="m.role"
          class="rounded-2xl border border-slate-200 bg-white p-6"
        >
          <div
            class="flex h-12 w-12 items-center justify-center rounded-full bg-blau-900 font-bold text-gelb-400"
          >
            {{ m.name.charAt(0) }}
          </div>
          <p class="mt-4 text-sm font-medium text-blau-700">{{ m.role }}</p>
          <p class="text-lg font-bold text-slate-900">{{ m.name }}</p>
        </div>
      </div>

      <p v-if="openBoard.length" class="mt-6 text-sm text-slate-500">
        Weitere Funktionen im Vorstand:
        {{ openBoard.map((b) => b.role).join(', ') }}.
      </p>
    </div>
  </section>

  <section class="mx-auto max-w-5xl px-4 py-16">
    <h2 class="text-2xl font-extrabold text-blau-900">Mitgliedschaft</h2>
    <div class="mt-8 grid gap-6 md:grid-cols-3">
      <div
        v-for="t in membership.types"
        :key="t.title"
        class="rounded-2xl border border-slate-200 bg-white p-6"
      >
        <h3 class="font-bold text-slate-900">{{ t.title }}</h3>
        <p class="mt-2 text-sm text-slate-600">{{ t.text }}</p>
      </div>
    </div>
    <NuxtLink
      to="/mitglied"
      class="mt-8 inline-flex items-center gap-2 font-bold text-blau-700 hover:text-blau-900"
    >
      Mitglied werden
      <AppIcon name="arrow" class="h-4 w-4" />
    </NuxtLink>
  </section>
</template>
