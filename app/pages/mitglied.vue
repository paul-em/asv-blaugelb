<script setup lang="ts">
import { club, contact, fees, freibad, membership } from '~/data/site'

useHead({ title: `Mitglied werden – ${club.name}` })

const benefits = computed(() => [
  'Teil einer gemeinnützigen Sportgemeinschaft in Offenhausen',
  'Teilnahme an allen Veranstaltungen des Vereins',
  'Gemeinsam laufen, radfahren und schwimmen – vom Einstieg bis zum Wettkampf',
  freibad.aktiv
    ? 'Zugang zum Sportbecken des Freibades außerhalb der Öffnungszeiten'
    : 'Künftig: Schwimmtraining im Freibad außerhalb der Öffnungszeiten (in Vorbereitung)',
  'Stimmrecht in der Generalversammlung für ordentliche Mitglieder',
])

const hasFees = fees.some((f) => f.price)
</script>

<template>
  <PageHero
    title="Mitglied werden"
    subtitle="Werde Teil von blaugelb Offenhausen – wir freuen uns auf dich."
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
          Die Höhe der Beiträge setzt die Generalversammlung fest. Die aktuellen
          Beträge erfährst du gerne auf Anfrage.
        </p>
      </div>
    </div>

    <!-- Anmeldung -->
    <div class="mt-14 rounded-2xl bg-blau-900 p-8 text-white md:p-10">
      <h2 class="text-2xl font-extrabold">So wirst du Mitglied</h2>
      <ol class="mt-6 grid gap-6 md:grid-cols-3">
        <li>
          <span class="text-3xl font-extrabold text-gelb-400">1.</span>
          <p class="mt-2 font-bold">Antrag stellen</p>
          <p class="text-sm text-blau-100">
            Formlos per E-Mail, mündlich oder schriftlich beim Vorstand – ein
            Formular brauchst du nicht.
          </p>
        </li>
        <li>
          <span class="text-3xl font-extrabold text-gelb-400">2.</span>
          <p class="mt-2 font-bold">Aufnahme</p>
          <p class="text-sm text-blau-100">
            Der Vorstand entscheidet über die Aufnahme und meldet sich bei dir.
          </p>
        </li>
        <li>
          <span class="text-3xl font-extrabold text-gelb-400">3.</span>
          <p class="mt-2 font-bold">Beitrag entrichten</p>
          <p class="text-sm text-blau-100">
            Mit Beitrittsgebühr und Mitgliedsbeitrag bist du dabei.
          </p>
        </li>
      </ol>
      <div class="mt-8">
        <a
          v-if="contact.email"
          :href="`mailto:${contact.email}?subject=Mitgliedschaft blaugelb Offenhausen`"
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
    </div>

    <div class="mt-8 grid gap-6 md:grid-cols-2">
      <div class="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 class="font-bold text-slate-900">Beitritt</h3>
        <p class="mt-2 text-sm leading-relaxed text-slate-600">
          {{ membership.join }}
        </p>
      </div>
      <div class="rounded-2xl border border-slate-200 bg-white p-6">
        <h3 class="font-bold text-slate-900">Austritt</h3>
        <p class="mt-2 text-sm leading-relaxed text-slate-600">
          {{ membership.leave }}
        </p>
      </div>
    </div>
  </section>
</template>
