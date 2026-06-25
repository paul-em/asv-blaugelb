<script setup lang="ts">
import { club, sports, events, trainings } from '~/data/site'

useHead({ title: `${club.name} – ${club.tagline}` })

const nextEvents = events.slice(0, 3)
</script>

<template>
  <!-- Hero -->
  <section class="relative overflow-hidden bg-blau-900 text-white">
    <div class="bg-grid absolute inset-0" />
    <div
      class="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:py-28"
    >
      <div>
        <p
          class="inline-flex rounded-full bg-blau-800 px-3 py-1 text-xs font-bold uppercase tracking-widest text-gelb-400"
        >
          {{ club.tagline }} · {{ '4625 Offenhausen' }}
        </p>
        <h1 class="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
          {{ club.claim }}
        </h1>
        <p class="mt-5 max-w-lg text-lg text-blau-100">
          {{ club.intro }}
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <NuxtLink
            to="/mitglied"
            class="rounded-xl bg-gelb-400 px-6 py-3 font-bold text-blau-950 transition hover:bg-gelb-300"
          >
            Mitglied werden
          </NuxtLink>
          <NuxtLink
            to="/training"
            class="rounded-xl border border-blau-300/40 px-6 py-3 font-semibold text-white transition hover:bg-blau-800"
          >
            Zum Training
          </NuxtLink>
        </div>
      </div>

      <div class="relative">
        <div
          class="mx-auto flex aspect-square w-64 items-center justify-center rounded-full bg-blau-800/60 md:w-80"
        >
          <LogoMark class="h-40 w-40 md:h-52 md:w-52" />
        </div>
      </div>
    </div>
  </section>

  <!-- Sportarten -->
  <section class="mx-auto max-w-6xl px-4 py-20">
    <div class="max-w-2xl">
      <h2 class="text-3xl font-extrabold tracking-tight text-blau-900">
        Das bieten wir
      </h2>
      <p class="mt-3 text-slate-600">
        Bewegung in der Gemeinschaft – das ganze Jahr über.
      </p>
    </div>
    <div class="mt-10 grid gap-6 md:grid-cols-3">
      <div
        v-for="s in sports"
        :key="s.title"
        class="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-md"
      >
        <div
          class="flex h-12 w-12 items-center justify-center rounded-xl bg-blau-50 text-blau-900"
        >
          <AppIcon :name="s.icon" class="h-7 w-7" />
        </div>
        <h3 class="mt-5 text-xl font-bold text-slate-900">{{ s.title }}</h3>
        <p class="mt-2 text-slate-600">{{ s.text }}</p>
      </div>
    </div>
  </section>

  <!-- Training Teaser -->
  <section class="bg-slate-50">
    <div class="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2">
      <div>
        <h2 class="text-3xl font-extrabold tracking-tight text-blau-900">
          Komm einfach vorbei
        </h2>
        <p class="mt-3 text-slate-600">
          Unsere Trainings sind offen für alle – egal ob du gerade erst
          anfängst oder dich auf deinen nächsten Wettkampf vorbereitest.
          Schnupper unverbindlich rein.
        </p>
        <NuxtLink
          to="/training"
          class="mt-6 inline-flex items-center gap-2 font-bold text-blau-700 hover:text-blau-900"
        >
          Alle Trainingszeiten
          <AppIcon name="arrow" class="h-4 w-4" />
        </NuxtLink>
      </div>
      <ul class="space-y-3">
        <li
          v-for="t in trainings"
          :key="t.day + t.title"
          class="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4"
        >
          <div
            class="flex w-20 shrink-0 flex-col items-center rounded-lg bg-blau-900 px-2 py-2 text-center text-white"
          >
            <span class="text-xs font-semibold uppercase">{{
              t.day.slice(0, 2)
            }}</span>
            <span class="text-[11px] text-blau-200">{{ t.time || 'n. V.' }}</span>
          </div>
          <div>
            <p class="font-bold text-slate-900">{{ t.title }}</p>
            <p class="text-sm text-slate-500">{{ t.note }}</p>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <!-- Events Teaser -->
  <section class="mx-auto max-w-6xl px-4 py-20">
    <div class="flex flex-wrap items-end justify-between gap-4">
      <div>
        <h2 class="text-3xl font-extrabold tracking-tight text-blau-900">
          Unsere Veranstaltungen
        </h2>
        <p class="mt-3 text-slate-600">
          Diese Bewerbe organisiert der ASV blaugelb für die Region.
        </p>
      </div>
      <NuxtLink
        to="/termine"
        class="inline-flex items-center gap-2 font-bold text-blau-700 hover:text-blau-900"
      >
        Alle Termine
        <AppIcon name="arrow" class="h-4 w-4" />
      </NuxtLink>
    </div>
    <div class="mt-10 grid gap-6 md:grid-cols-3">
      <EventCard v-for="e in nextEvents" :key="e.name" :event="e" />
    </div>
  </section>

  <!-- CTA -->
  <section class="bg-blau-900">
    <div
      class="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center"
    >
      <h2 class="text-3xl font-extrabold text-white">
        Lust auf gemeinsames Training?
      </h2>
      <p class="max-w-xl text-blau-100">
        Werde Teil des ASV blaugelb Offenhausen und erlebe Ausdauersport in
        einer starken Gemeinschaft.
      </p>
      <NuxtLink
        to="/kontakt"
        class="rounded-xl bg-gelb-400 px-6 py-3 font-bold text-blau-950 transition hover:bg-gelb-300"
      >
        Kontakt aufnehmen
      </NuxtLink>
    </div>
  </section>
</template>
