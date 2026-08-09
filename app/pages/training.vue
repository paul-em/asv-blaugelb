<script setup lang="ts">
import { club, contact, freibad, trainings } from '~/data/site'

useHead({ title: `Training – ${club.name}` })

// Solange die Vereinbarung mit der Marktgemeinde nicht beschlossen ist,
// werden die Schwimmzeiten nicht als laufendes Angebot dargestellt.
const swimSlots = computed(() =>
  freibad.aktiv ? trainings : trainings.filter((t) => !t.freibad),
)
</script>

<template>
  <PageHero
    title="Training"
    subtitle="Ausdauersport in Offenhausen – Laufen, Radfahren und Schwimmen."
  />

  <section class="mx-auto max-w-4xl px-4 py-16">
    <h2 class="text-2xl font-extrabold text-blau-900">
      Schwimmtraining im Freibad
    </h2>
    <p class="mt-3 leading-relaxed text-slate-600">
      Gemeinsam mit der Marktgemeinde Offenhausen können unsere Mitglieder das
      Sportbecken des Freibades außerhalb der regulären Öffnungszeiten zum
      Training nutzen – täglich vor der Öffnung und nach dem Badeschluss.
    </p>

    <!-- Hinweis, solange die Vereinbarung nicht in Kraft ist -->
    <div
      v-if="!freibad.aktiv"
      class="mt-6 flex gap-4 rounded-2xl border border-gelb-400 bg-gelb-50 p-6"
    >
      <span
        class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gelb-400 text-blau-950"
      >
        <AppIcon name="clock" class="h-5 w-5" />
      </span>
      <div>
        <p class="font-bold text-blau-950">In Vorbereitung</p>
        <p class="mt-1 text-sm leading-relaxed text-slate-700">
          {{ freibad.statusNote }} Sobald alles beschlossen ist, findest du die
          Zeiten und den Ablauf hier.
        </p>
      </div>
    </div>

    <!-- Zeiten (erst sichtbar, wenn die Kooperation aktiv ist) -->
    <div v-if="swimSlots.length" class="mt-8 grid gap-4">
      <div
        v-for="t in swimSlots"
        :key="t.day + t.title"
        class="grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 sm:grid-cols-[auto_1fr]"
      >
        <div
          class="flex h-20 w-24 flex-col items-center justify-center rounded-xl bg-blau-900 text-white"
        >
          <span class="text-sm font-bold">{{ t.day }}</span>
          <AppIcon name="clock" class="mt-1 h-4 w-4 text-gelb-400" />
          <span class="mt-1 text-xs text-blau-200">{{ t.time || 'n. V.' }}</span>
        </div>
        <div>
          <h3 class="text-xl font-bold text-slate-900">{{ t.title }}</h3>
          <p class="text-slate-600">{{ t.note }}</p>
          <p
            v-if="t.place"
            class="mt-2 flex items-center gap-2 text-sm text-slate-500"
          >
            <AppIcon name="pin" class="h-4 w-4 text-blau-700" />
            {{ t.place }}
          </p>
        </div>
      </div>
    </div>

    <p class="mt-6 text-sm text-slate-500">
      {{ freibad.season }}
    </p>

    <!-- Voraussetzungen -->
    <div class="mt-12 grid gap-8 md:grid-cols-2">
      <div>
        <h3 class="text-lg font-bold text-blau-900">Voraussetzungen</h3>
        <p class="mt-2 text-sm text-slate-600">
          Für den Zugang außerhalb der Öffnungszeiten müssen alle Punkte
          erfüllt sein:
        </p>
        <ul class="mt-4 space-y-2">
          <li
            v-for="r in freibad.requirements"
            :key="r"
            class="flex items-start gap-3 text-sm text-slate-700"
          >
            <span
              class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gelb-400 text-blau-950"
            >
              <AppIcon name="check" class="h-3 w-3" />
            </span>
            {{ r }}
          </li>
        </ul>
      </div>

      <div>
        <h3 class="text-lg font-bold text-blau-900">Regeln im Becken</h3>
        <p class="mt-2 text-sm text-slate-600">
          Diese Regeln gelten verbindlich für alle, die den erweiterten Zugang
          nutzen:
        </p>
        <ul class="mt-4 space-y-2">
          <li
            v-for="r in freibad.rules"
            :key="r"
            class="flex items-start gap-3 text-sm text-slate-700"
          >
            <span
              class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blau-700"
            />
            {{ r }}
          </li>
        </ul>
      </div>
    </div>

    <div class="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
      <h3 class="text-sm font-bold uppercase tracking-wider text-blau-900">
        Im Notfall
      </h3>
      <p class="mt-2 text-sm leading-relaxed text-slate-700">
        {{ freibad.emergency }}
      </p>
    </div>
  </section>

  <!-- Laufen & Radfahren -->
  <section class="bg-slate-50">
    <div class="mx-auto max-w-4xl px-4 py-16">
      <h2 class="text-2xl font-extrabold text-blau-900">Laufen & Radfahren</h2>
      <p class="mt-3 leading-relaxed text-slate-600">
        Laufen und Radfahren gehören seit der Gründung zum Verein – über Jahre
        hinweg haben wir eigene Crossläufe und Mountainbike-Rennen auf den
        Rundkursen in Bachstätten ausgetragen. Feste wöchentliche Trainingszeiten
        gibt es derzeit nicht. Wenn du mitfahren oder mitlaufen möchtest, melde
        dich einfach bei uns – wir bringen dich mit den passenden Leuten
        zusammen.
      </p>
      <NuxtLink
        to="/kontakt"
        class="mt-6 inline-flex items-center gap-2 font-bold text-blau-700 hover:text-blau-900"
      >
        Kontakt aufnehmen
        <AppIcon name="arrow" class="h-4 w-4" />
      </NuxtLink>
    </div>
  </section>

  <section class="mx-auto max-w-4xl px-4 py-16">
    <div class="rounded-2xl bg-blau-50 p-6 text-blau-900">
      <h3 class="text-lg font-bold">Fragen zum Training?</h3>
      <p class="mt-2 text-sm leading-relaxed">
        Schreib uns an
        <a
          :href="`mailto:${contact.email}`"
          class="font-bold underline"
          >{{ contact.email }}</a
        >
        oder nutze die
        <NuxtLink to="/kontakt" class="font-bold underline">Kontaktseite</NuxtLink>.
      </p>
    </div>
  </section>
</template>
