<script setup lang="ts">
import { club, contact, fees } from '~/data/site'

useHead({ title: `Mitglied werden – ${club.name}` })

const benefits = [
  'Gemeinsame Trainings für Laufen und Radsport',
  'Begleitung von Einsteiger:innen bis Wettkampfsport',
  'Teilnahme an Vereinsbewerben und -ausflügen',
  'Vergünstigungen bei vereinseigenen Veranstaltungen',
  'Eine motivierende Sportgemeinschaft in Offenhausen',
]
const hasFees = fees.some((f) => f.price)
</script>

<template>
  <PageHero
    title="Mitglied werden"
    subtitle="Werde Teil des ASV blaugelb Offenhausen – wir freuen uns auf dich."
  />

  <section class="mx-auto max-w-5xl px-4 py-16">
    <div class="grid gap-12 md:grid-cols-2">
      <div>
        <h2 class="text-2xl font-extrabold text-blau-900">Deine Vorteile</h2>
        <ul class="mt-6 space-y-3">
          <li
            v-for="b in benefits"
            :key="b"
            class="flex items-start gap-3 text-slate-700"
          >
            <span
              class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gelb-400 text-blau-950"
            >
              <AppIcon name="check" class="h-4 w-4" />
            </span>
            {{ b }}
          </li>
        </ul>
      </div>

      <div>
        <h2 class="text-2xl font-extrabold text-blau-900">Mitgliedsbeiträge</h2>
        <div class="mt-6 overflow-hidden rounded-2xl border border-slate-200">
          <table class="w-full text-left">
            <tbody>
              <tr
                v-for="(f, i) in fees"
                :key="f.type"
                :class="i % 2 ? 'bg-slate-50' : 'bg-white'"
              >
                <td class="px-5 py-4 font-medium text-slate-800">{{ f.type }}</td>
                <td class="px-5 py-4 text-right font-bold text-blau-900">
                  {{ f.price || 'auf Anfrage' }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p v-if="!hasFees" class="mt-3 text-sm text-slate-500">
          Die aktuellen Beiträge erfährst du gerne auf Anfrage.
        </p>
      </div>
    </div>

    <!-- Anmeldung -->
    <div class="mt-14 rounded-2xl bg-blau-900 p-8 text-white md:p-10">
      <h2 class="text-2xl font-extrabold">So wirst du Mitglied</h2>
      <ol class="mt-6 grid gap-6 md:grid-cols-3">
        <li>
          <span class="text-3xl font-extrabold text-gelb-400">1.</span>
          <p class="mt-2 font-bold">Kontakt aufnehmen</p>
          <p class="text-sm text-blau-100">
            Schreib uns eine kurze Nachricht oder komm zu einem Training.
          </p>
        </li>
        <li>
          <span class="text-3xl font-extrabold text-gelb-400">2.</span>
          <p class="mt-2 font-bold">Schnuppern</p>
          <p class="text-sm text-blau-100">
            Lern den Verein und die Trainingsgruppen unverbindlich kennen.
          </p>
        </li>
        <li>
          <span class="text-3xl font-extrabold text-gelb-400">3.</span>
          <p class="mt-2 font-bold">Beitritt</p>
          <p class="text-sm text-blau-100">
            Anmeldeformular ausfüllen, Beitrag entrichten – fertig!
          </p>
        </li>
      </ol>
      <div class="mt-8">
        <a
          v-if="contact.email"
          :href="`mailto:${contact.email}?subject=Mitgliedschaft ASV blaugelb`"
          class="inline-flex rounded-xl bg-gelb-400 px-6 py-3 font-bold text-blau-950 transition hover:bg-gelb-300"
        >
          Jetzt anmelden
        </a>
        <NuxtLink
          v-else
          to="/kontakt"
          class="inline-flex rounded-xl bg-gelb-400 px-6 py-3 font-bold text-blau-950 transition hover:bg-gelb-300"
        >
          Zum Kontakt
        </NuxtLink>
      </div>
      <!-- TODO: ggf. Link zu einem PDF-/Online-Anmeldeformular ergänzen -->
    </div>
  </section>
</template>
