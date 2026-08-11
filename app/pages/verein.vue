<script setup lang="ts">
import { club, board, history, membership, races, sports } from '~/data/site'

useHead({ title: `Verein – ${club.name}` })

// baseURL endet immer auf "/" – so laden die Rennfotos auch unter dem
// Unterpfad auf GitHub Pages.
const base = useRuntimeConfig().app.baseURL

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
      einem Wochenende. Heute liegt der Schwerpunkt auf dem gemeinsamen
      Training: offen für neue Mitglieder, ohne Leistungsdruck und mit Platz für
      Geselligkeit.
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

  <!-- Sportarten laut Statuten -->
  <section class="bg-slate-50">
    <div class="mx-auto max-w-6xl px-4 py-16">
      <h2 class="text-2xl font-extrabold text-blau-900">Unsere Sportarten</h2>
      <p class="mt-3 max-w-2xl text-slate-600">
        Laufen, Radfahren und Schwimmen sind in den Statuten als Vereinszweck
        festgeschrieben. Wie sich das übers Jahr verteilt, steht im
        <NuxtLink to="/angebot" class="font-semibold text-blau-700 underline"
          >Angebot</NuxtLink
        >.
      </p>
      <div class="mt-8 grid gap-6 md:grid-cols-3">
        <div
          v-for="s in sports"
          :key="s.title"
          class="rounded-2xl border border-slate-200 bg-white p-7"
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
    </div>
  </section>

  <section class="mx-auto max-w-5xl px-4 py-16">
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
  </section>

  <section class="bg-slate-50">
    <div class="mx-auto max-w-5xl px-4 py-16">
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
        to="/mitgliedschaft"
        class="mt-8 inline-flex items-center gap-2 font-bold text-blau-700 hover:text-blau-900"
      >
        Mitglied werden
        <AppIcon name="arrow" class="h-4 w-4" />
      </NuxtLink>
    </div>
  </section>

  <!-- Rückblick auf die eigenen Rennen – bewusst zurückhaltend gehalten -->
  <section class="mx-auto max-w-5xl px-4 py-16">
    <h2 class="text-2xl font-extrabold text-blau-900">{{ races.title }}</h2>
    <p
      v-for="t in races.text"
      :key="t"
      class="mt-3 leading-relaxed text-slate-600"
    >
      {{ t }}
    </p>

    <div v-if="races.photos.length" class="mt-8 grid gap-4 sm:grid-cols-2">
      <img
        v-for="p in races.photos"
        :key="p.file"
        :src="`${base}${p.file}`"
        :alt="p.alt"
        loading="lazy"
        class="h-56 w-full rounded-2xl object-cover"
      />
    </div>

    <ul v-if="races.videos.length" class="mt-8 space-y-2">
      <li v-for="v in races.videos" :key="v.url" class="flex items-start gap-3">
        <AppIcon name="arrow" class="mt-1 h-4 w-4 shrink-0 text-gelb-400" />
        <span>
          <a
            :href="v.url"
            target="_blank"
            rel="noopener"
            class="font-semibold text-blau-700 underline"
            >{{ v.label }} auf YouTube ansehen</a
          >
          <span v-if="v.note" class="text-sm text-slate-600">
            – {{ v.note }}</span
          >
        </span>
      </li>
    </ul>
    <p v-if="races.videos.length" class="mt-3 text-xs text-slate-500">
      Die Videos liegen auf YouTube und werden erst durch deinen Klick geladen –
      auf dieser Seite sind sie nicht eingebettet.
    </p>

    <ul class="mt-8 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
      <li v-for="e in history" :key="e.name" class="flex items-start gap-3">
        <AppIcon name="calendar" class="mt-0.5 h-4 w-4 shrink-0 text-blau-700" />
        <span>
          <strong class="text-slate-800">{{ e.name }}</strong> · {{ e.when }}
        </span>
      </li>
    </ul>
  </section>
</template>
