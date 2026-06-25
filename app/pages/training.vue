<script setup lang="ts">
import { club, trainings } from '~/data/site'

useHead({ title: `Training – ${club.name}` })
</script>

<template>
  <PageHero
    title="Training & Lauftreff"
    subtitle="Gemeinsam trainieren – offen für alle Leistungsstufen."
  />

  <section class="mx-auto max-w-4xl px-4 py-16">
    <div class="grid gap-4">
      <div
        v-for="t in trainings"
        :key="t.day + t.title"
        class="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:grid-cols-[auto_1fr]"
      >
        <div
          class="flex h-20 w-20 flex-col items-center justify-center rounded-xl bg-blau-900 text-white"
        >
          <span class="text-sm font-bold uppercase">{{ t.day.slice(0, 2) }}</span>
          <AppIcon name="clock" class="mt-1 h-4 w-4 text-gelb-400" />
          <span class="mt-1 text-xs text-blau-200">{{
            t.time || 'n. V.'
          }}</span>
        </div>
        <div>
          <h3 class="text-xl font-bold text-slate-900">{{ t.title }}</h3>
          <p class="text-slate-600">{{ t.note }}</p>
          <p v-if="t.place" class="mt-2 flex items-center gap-2 text-sm text-slate-500">
            <AppIcon name="pin" class="h-4 w-4 text-blau-700" />
            {{ t.place }}
          </p>
        </div>
      </div>
    </div>

    <div
      class="mt-10 rounded-2xl bg-blau-50 p-6 text-blau-900"
    >
      <h3 class="text-lg font-bold">Einfach mitlaufen</h3>
      <p class="mt-2 text-sm leading-relaxed">
        Du möchtest unverbindlich schnuppern? Komm einfach zu einem unserer
        Trainings – Laufschuhe genügen. Bei Fragen melde dich gerne vorab über
        unsere <NuxtLink to="/kontakt" class="font-bold underline">Kontaktseite</NuxtLink>.
      </p>
    </div>

    <!-- TODO: genaue Zeiten/Treffpunkte bestätigen -->
    <p class="mt-6 text-center text-xs text-slate-400">
      Trainingszeiten ohne Gewähr – bitte aktuelle Zeiten beim Verein erfragen.
    </p>
  </section>
</template>
