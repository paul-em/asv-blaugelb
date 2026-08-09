<script setup lang="ts">
import {
  club,
  contact,
  events,
  freibad,
  individualSports,
  seasons,
  trainings,
} from '~/data/site'

useHead({ title: `Angebot – ${club.name}` })

// Die Sommersaison wird nur mit den Freibad-Details ausgespielt, solange die
// Vereinbarung mit der Marktgemeinde in Kraft ist.
const swimSlots = computed(() =>
  freibad.aktiv ? trainings : trainings.filter((t) => !t.freibad),
)
</script>

<template>
  <PageHero
    title="Unser Angebot"
    subtitle="Sport, Bewegung und Gemeinschaft – das ganze Jahr über, Saison für Saison."
  />

  <section class="mx-auto max-w-4xl px-4 py-16">
    <!-- Einstiegs-Hinweis -->
    <div class="rounded-2xl border-l-4 border-blau-700 bg-blau-50 p-6">
      <p class="font-bold text-blau-900">Neu dabei?</p>
      <p class="mt-1 leading-relaxed text-slate-700">
        Du kannst jederzeit zum Schnuppern vorbeikommen – melde dich kurz
        <NuxtLink to="/kontakt" class="font-semibold text-blau-700 underline"
          >bei uns</NuxtLink
        >, damit wir Bescheid wissen.
      </p>
    </div>

    <!-- Saisonen -->
    <div class="mt-12 space-y-12">
      <article v-for="s in seasons" :key="s.id" :id="s.id" class="scroll-mt-24">
        <div class="flex items-center gap-4">
          <span
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blau-900 text-gelb-400"
          >
            <AppIcon :name="s.icon" class="h-6 w-6" />
          </span>
          <div>
            <p class="text-xs font-bold uppercase tracking-widest text-blau-700">
              {{ s.season }}
            </p>
            <h2 class="text-2xl font-extrabold text-blau-900">{{ s.title }}</h2>
          </div>
        </div>

        <div class="mt-5 rounded-2xl border border-slate-200 bg-white p-6 md:p-8">
          <div class="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <span class="flex items-center gap-2 font-bold text-slate-900">
              <AppIcon name="clock" class="h-4 w-4 text-blau-700" />
              {{ s.when }}
            </span>
            <span class="flex items-center gap-2 text-slate-600">
              <AppIcon name="pin" class="h-4 w-4 text-blau-700" />
              {{ s.place }}
            </span>
          </div>

          <p
            v-for="(p, i) in s.text"
            :key="i"
            class="mt-4 leading-relaxed text-slate-600"
          >
            {{ p }}
          </p>

          <ul class="mt-5 space-y-2">
            <li
              v-for="p in s.points"
              :key="p"
              class="flex items-start gap-3 text-sm text-slate-700"
            >
              <span
                class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gelb-400 text-blau-950"
              >
                <AppIcon name="check" class="h-3 w-3" />
              </span>
              {{ p }}
            </li>
          </ul>

          <p v-if="s.note" class="mt-5 text-sm text-slate-500">{{ s.note }}</p>

          <!-- Sommer: Zeiten, Voraussetzungen und Regeln der Freibad-Kooperation -->
          <template v-if="s.freibad">
            <div
              v-if="!freibad.aktiv"
              class="mt-6 flex gap-4 rounded-2xl border border-gelb-400 bg-gelb-50 p-5"
            >
              <span
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gelb-400 text-blau-950"
              >
                <AppIcon name="clock" class="h-5 w-5" />
              </span>
              <div>
                <p class="font-bold text-blau-950">In Vorbereitung</p>
                <p class="mt-1 text-sm leading-relaxed text-slate-700">
                  {{ freibad.statusNote }} Sobald alles beschlossen ist, findest
                  du die Zeiten und den Ablauf hier.
                </p>
              </div>
            </div>

            <div v-if="swimSlots.length" class="mt-6 grid gap-3 sm:grid-cols-2">
              <div
                v-for="t in swimSlots"
                :key="t.day + t.title"
                class="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4"
              >
                <div
                  class="flex w-24 shrink-0 flex-col items-center rounded-lg bg-blau-900 px-2 py-2 text-center text-white"
                >
                  <span class="text-xs font-semibold">{{ t.day }}</span>
                  <span class="text-[11px] text-blau-200">{{
                    t.time || 'n. V.'
                  }}</span>
                </div>
                <div>
                  <p class="font-bold text-slate-900">{{ t.title }}</p>
                  <p class="mt-1 text-sm text-slate-600">{{ t.note }}</p>
                </div>
              </div>
            </div>

            <p class="mt-4 text-sm text-slate-500">{{ freibad.season }}</p>

            <div class="mt-8 grid gap-8 md:grid-cols-2">
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
                  Diese Regeln gelten verbindlich für alle, die den erweiterten
                  Zugang nutzen:
                </p>
                <ul class="mt-4 space-y-2">
                  <li
                    v-for="r in freibad.rules"
                    :key="r"
                    class="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blau-700" />
                    {{ r }}
                  </li>
                </ul>
              </div>
            </div>

            <div class="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 class="text-sm font-bold uppercase tracking-wider text-blau-900">
                Im Notfall
              </h3>
              <p class="mt-2 text-sm leading-relaxed text-slate-700">
                {{ freibad.emergency }}
              </p>
            </div>
          </template>

          <!-- Anlassbezogen: konkrete Termine, sobald welche feststehen -->
          <div v-if="s.id === 'anlassbezogen' && events.length" class="mt-6 grid gap-4">
            <EventCard v-for="e in events" :key="e.name" :event="e" />
          </div>
        </div>
      </article>
    </div>

    <!-- Laufen & Radfahren abseits der fixen Termine -->
    <div class="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-6 md:p-8">
      <h2 class="text-xl font-extrabold text-blau-900">
        {{ individualSports.title }}
      </h2>
      <p class="mt-3 leading-relaxed text-slate-600">
        {{ individualSports.text }}
      </p>
      <a
        :href="`mailto:${contact.email}?subject=Laufen und Radfahren bei blaugelb Offenhausen`"
        class="mt-5 inline-flex items-center gap-2 font-bold text-blau-700 hover:text-blau-900"
      >
        Melde dich bei uns
        <AppIcon name="arrow" class="h-4 w-4" />
      </a>
    </div>

    <!-- Hinweis auf die WhatsApp-Gruppe -->
    <div class="mt-8 rounded-2xl border-l-4 border-gelb-400 bg-gelb-50 p-6">
      <p class="font-bold text-blau-950">Interesse geweckt?</p>
      <p class="mt-1 leading-relaxed text-slate-700">
        Alle aktuellen Termine und kurzfristigen Änderungen geben wir in unserer
        WhatsApp-Gruppe bekannt. Als Mitglied bist du automatisch dabei –
        <NuxtLink
          to="/mitgliedschaft"
          class="font-semibold text-blau-700 underline"
          >jetzt Mitglied werden</NuxtLink
        >.
      </p>
    </div>
  </section>

  <ContactCta
    title="Fragen zum Training?"
    text="Schreib uns – wir sagen dir, wann und wo die nächste Einheit stattfindet."
    subject="Frage zum Training bei blaugelb Offenhausen"
  />
</template>
