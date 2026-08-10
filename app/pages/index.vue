<script setup lang="ts">
import { club, seasons, fees, events, history } from '~/data/site'

useHead({ title: `${club.name} – ${club.tagline}` })

// Solange keine Termine ausgeschrieben sind, bleibt der Abschnitt leer –
// der Rückblick auf die eigenen Rennen steht weiter unten.
const hasEvents = computed(() => events.length > 0)
const einzelbeitrag = computed(
  () => fees.find((f) => f.type === 'Ordentliches Mitglied')?.price ?? '',
)
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
          {{ club.tagline }} · 4625 Offenhausen
        </p>
        <h1 class="mt-5 text-4xl font-extrabold leading-tight md:text-6xl">
          Willkommen bei blaugelb Offenhausen
        </h1>
        <p class="mt-5 max-w-lg text-lg text-blau-100">
          Wir sind ein aktiver Ausdauersportverein aus dem Hausruckviertel –
          offen für alle, die Bewegung, Gemeinschaft und Freude am Sport
          verbinden wollen. Ob Turnen im Winter, e-MTB-Ausfahrten im Frühjahr
          oder Schwimmen im Sommer: Bei uns ist in jeder Saison etwas dabei.
        </p>
        <ul class="mt-7 flex flex-wrap gap-2">
          <li
            v-for="s in seasons"
            :key="s.id"
            class="inline-flex items-center gap-2 rounded-full bg-blau-800/80 px-3 py-1.5 text-sm font-semibold text-blau-50"
          >
            <AppIcon :name="s.icon" class="h-4 w-4 text-gelb-400" />
            {{ s.title }}
          </li>
        </ul>
        <div class="mt-8 flex flex-wrap gap-3">
          <NuxtLink
            to="/angebot"
            class="rounded-xl bg-gelb-400 px-6 py-3 font-bold text-blau-950 transition hover:bg-gelb-300"
          >
            Unser Angebot
          </NuxtLink>
          <NuxtLink
            to="/mitgliedschaft"
            class="rounded-xl border border-blau-300/40 px-6 py-3 font-semibold text-white transition hover:bg-blau-800"
          >
            Mitglied werden
          </NuxtLink>
        </div>
      </div>

      <div class="relative">
        <div
          class="mx-auto flex aspect-square w-64 items-center justify-center rounded-full bg-blau-800/60 md:w-80"
        >
          <LogoMark variant="invers" class="h-40 w-40 md:h-52 md:w-52" />
        </div>
      </div>
    </div>
  </section>

  <!-- Angebot nach Saison -->
  <section class="mx-auto max-w-6xl px-4 py-20">
    <div class="max-w-2xl">
      <h2 class="text-3xl font-extrabold tracking-tight text-blau-900">
        Was wir anbieten
      </h2>
      <p class="mt-3 text-slate-600">
        Unser Programm richtet sich nach den Jahreszeiten – so bleibt das
        Training abwechslungsreich und macht das ganze Jahr über Freude.
      </p>
    </div>
    <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <SeasonCard v-for="s in seasons" :key="s.id" :season="s" />
    </div>
    <NuxtLink
      to="/angebot"
      class="mt-8 inline-flex items-center gap-2 font-bold text-blau-700 hover:text-blau-900"
    >
      Alle Aktivitäten im Detail
      <AppIcon name="arrow" class="h-4 w-4" />
    </NuxtLink>
  </section>

  <!-- Kommende Termine (nur wenn welche eingetragen sind) -->
  <section v-if="hasEvents" class="bg-slate-50">
    <div class="mx-auto max-w-6xl px-4 py-20">
      <h2 class="text-3xl font-extrabold tracking-tight text-blau-900">
        Kommende Termine
      </h2>
      <div class="mt-10 grid gap-6 md:grid-cols-3">
        <EventCard v-for="e in events" :key="e.name" :event="e" />
      </div>
    </div>
  </section>

  <!-- Einladung / Gemeinschaft -->
  <section class="bg-slate-50">
    <div class="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-2">
      <div>
        <h2 class="text-3xl font-extrabold tracking-tight text-blau-900">
          Offen für neue Mitglieder
        </h2>
        <p class="mt-4 leading-relaxed text-slate-600">
          Bei blaugelb Offenhausen geht es nicht nur um Sport – Geselligkeit und
          Zusammenhalt sind uns genauso wichtig. Ob Sporteinsteigerin oder
          erfahrener Ausdauersportler: Du bist herzlich willkommen.
        </p>
        <p class="mt-4 leading-relaxed text-slate-600">
          Der Beitrag ist bewusst niedrig gehalten –
          <strong class="text-blau-900">{{ einzelbeitrag }} im Jahr, für alle gleich</strong
          >. Schnuppern ist jederzeit möglich, melde dich einfach vorher kurz bei
          uns.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <NuxtLink
            to="/mitgliedschaft"
            class="rounded-xl bg-gelb-400 px-6 py-3 font-bold text-blau-950 transition hover:bg-gelb-300"
          >
            Zur Mitgliedschaft
          </NuxtLink>
          <NuxtLink
            to="/kontakt"
            class="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-blau-900 transition hover:bg-white"
          >
            Kontakt aufnehmen
          </NuxtLink>
        </div>
      </div>

      <!-- Rückblick-Teaser -->
      <div class="rounded-2xl border border-slate-200 bg-white p-7">
        <p class="text-xs font-bold uppercase tracking-widest text-blau-700">
          Aus der Vereinsgeschichte
        </p>
        <h3 class="mt-2 text-xl font-bold text-slate-900">
          Von 2013 bis 2017 auf der eigenen Strecke
        </h3>
        <p class="mt-3 text-slate-600">
          Fünf Jahre lang hat blaugelb Offenhausen jedes Jahr ein eigenes Rennen
          auf den Wiesenrundkursen in Bachstätten ausgetragen – vom
          Mountainbike-Bewerb bis zur Querfeldein-Landesmeisterschaft. Die großen
          Rennen sind Geschichte, der Vereinsgeist ist geblieben.
        </p>
        <ul class="mt-5 space-y-2 text-sm text-slate-600">
          <li
            v-for="e in history.slice(0, 3)"
            :key="e.name"
            class="flex items-start gap-3"
          >
            <AppIcon name="calendar" class="mt-0.5 h-4 w-4 shrink-0 text-blau-700" />
            <span>
              <strong class="text-slate-800">{{ e.name }}</strong>
              · {{ e.when }}
            </span>
          </li>
        </ul>
        <NuxtLink
          to="/verein"
          class="mt-6 inline-flex items-center gap-2 font-bold text-blau-700 hover:text-blau-900"
        >
          Mehr über den Verein
          <AppIcon name="arrow" class="h-4 w-4" />
        </NuxtLink>
      </div>
    </div>
  </section>

  <ContactCta
    title="Schnell Kontakt aufnehmen"
    text="Fragen zum Training oder zur Mitgliedschaft? Wir melden uns so rasch wie möglich zurück."
    subject="Anfrage blaugelb Offenhausen"
  />
</template>
