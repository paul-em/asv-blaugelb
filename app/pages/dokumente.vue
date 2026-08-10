<script setup lang="ts">
import { club, contact, documentGroups } from '~/data/site'

useHead({ title: `Dokumente – ${club.name}` })

// baseURL endet immer auf "/" (z. B. "/" lokal oder "/asv-blaugelb/" auf
// GitHub Pages) – so funktionieren die Downloads auch unter einem Unterpfad.
const base = useRuntimeConfig().app.baseURL
</script>

<template>
  <PageHero
    title="Dokumente"
    subtitle="Alle Vereinsdokumente zum Nachlesen und Herunterladen."
  />

  <section class="mx-auto max-w-3xl px-4 py-16">
    <p class="text-lg leading-relaxed text-slate-700">
      Alle Vereinsdokumente zum Nachlesen und Herunterladen. Es gilt jeweils die
      hier veröffentlichte Fassung.
    </p>

    <template v-for="g in documentGroups" :key="g.title">
      <h2 class="mt-12 text-2xl font-extrabold text-blau-900">{{ g.title }}</h2>
      <div class="mt-6 space-y-4">
        <div
          v-for="d in g.items"
          :key="d.title"
          class="rounded-2xl border border-slate-200 bg-white p-6"
        >
          <h3 class="font-bold text-slate-900">{{ d.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ d.text }}</p>

          <template v-if="d.file">
            <a
              :href="`${base}${d.file}`"
              download
              class="mt-4 inline-flex items-center gap-2 rounded-xl bg-blau-900 px-5 py-3 font-bold text-white transition hover:bg-blau-800"
            >
              <AppIcon name="download" class="h-5 w-5 text-gelb-400" />
              PDF herunterladen
            </a>
            <p class="mt-2 text-xs text-slate-500">
              PDF, {{ d.size }} · Stand {{ d.stand }}
            </p>
          </template>
          <p v-else class="mt-4 text-sm font-semibold text-slate-500">
            Folgt in Kürze – bis dahin schicken wir dir das Dokument gerne per
            E-Mail.
          </p>
        </div>
      </div>
    </template>

    <!--
      Statuten: erst nach Beschluss in der Generalversammlung und der Anzeige
      bei der Vereinsbehörde einstellen – dann in der beschlossenen Reinfassung
      ohne Änderungsmarkierungen und ohne den Abschnitt "Hinweis zu den
      Änderungen". Dafür einen weiteren Eintrag in `documentGroups`
      (app/data/site.ts) anlegen; dieser Block kann dann entfallen.

      <h2 class="mt-12 text-2xl font-extrabold text-blau-900">Vereinsordnungen</h2>
      <div class="mt-6 space-y-4">
        <div class="rounded-2xl border border-slate-200 bg-white p-6">
          <h3 class="font-bold text-slate-900">Statuten</h3>
          <p class="mt-2 text-sm leading-relaxed text-slate-600">
            Die Statuten des Vereins in der beschlossenen Fassung.
          </p>
        </div>
      </div>
    -->

    <div class="mt-12 rounded-2xl border-l-4 border-gelb-400 bg-gelb-50 p-6">
      <p class="font-bold text-blau-950">Fragen zu den Unterlagen?</p>
      <p class="mt-1 leading-relaxed text-slate-700">
        Schreib uns einfach – der Vorstand beantwortet sie gerne.
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
