<script setup lang="ts">
import {
  bankAccounts,
  club,
  contact,
  feeNote,
  fees,
  freibad,
  freibadAccess,
  membership,
  membershipForm,
  paymentReference,
} from '~/data/site'

useHead({ title: `Mitgliedschaft – ${club.name}` })

// Der Aufnahmeantrag läuft laut Statuten § 5 Abs. 1 über die Beitrittserklärung
// (Download unter /dokumente). Sobald sie zusätzlich als Online-Formular
// vorliegt, führt der Ablauf dorthin.
const hasForm = computed(() => Boolean(membershipForm.url))

const steps = computed(() =>
  hasForm.value
    ? [
        {
          title: 'Beitrittserklärung ausfüllen',
          text: 'Das Online-Formular dauert nur ein paar Minuten – Link steht gleich unten.',
        },
        {
          title: 'Aufnahme durch den Vorstand',
          text: 'Der Vorstand entscheidet über die Aufnahme und meldet sich bei dir.',
        },
        {
          title: 'Mitgliedsbeitrag überweisen',
          text: 'Auf eines der unten angeführten Vereinskonten – dann bist du dabei.',
        },
      ]
    : [
        {
          title: 'Beitrittserklärung herunterladen',
          text: 'Das Formular findest du im Bereich Dokumente. Es enthält alle Angaben, die wir für die Mitgliederverwaltung brauchen.',
        },
        {
          title: 'Ausfüllen und zurückgeben',
          text: `Unterschrieben per E-Mail an ${contact.email} oder persönlich beim Training.`,
        },
        {
          title: 'Aufnahme durch den Vorstand',
          text: 'Der Vorstand entscheidet über die Aufnahme und meldet sich bei dir.',
        },
        {
          title: 'Mitgliedsbeitrag überweisen',
          text: 'Auf eines der unten angeführten Vereinskonten – dann bist du dabei.',
        },
      ],
)
</script>

<template>
  <PageHero
    title="Mitglied werden"
    subtitle="Werde Teil unserer Sportgemeinschaft – offen, unkompliziert und für jeden leistbar."
  />

  <section class="mx-auto max-w-4xl px-4 py-16">
    <p class="text-lg leading-relaxed text-slate-700">
      Bei blaugelb Offenhausen bist du herzlich willkommen – egal ob
      Sporteinsteigerin, erfahrener Ausdauersportler oder einfach jemand, der
      Bewegung in der Gemeinschaft sucht. Wir sind ein kleiner, familiärer
      Verein, in dem die Geselligkeit genauso zählt wie der Sport.
    </p>

    <!-- Beitrag -->
    <h2 class="mt-12 text-2xl font-extrabold text-blau-900">Mitgliedsbeitrag</h2>
    <div class="mt-6 overflow-hidden rounded-2xl border border-slate-200">
      <table class="w-full text-left">
        <thead>
          <tr class="bg-blau-900 text-white">
            <th class="px-5 py-3 text-sm font-bold">Kategorie</th>
            <th class="px-5 py-3 text-right text-sm font-bold">Beitrag pro Jahr</th>
          </tr>
        </thead>
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
    <p class="mt-3 text-sm text-slate-500">{{ feeNote }}</p>

    <!-- Ablauf -->
    <h2 class="mt-12 text-2xl font-extrabold text-blau-900">
      So wirst du Mitglied
    </h2>
    <ol class="mt-6 grid gap-6 sm:grid-cols-2">
      <li
        v-for="(s, i) in steps"
        :key="s.title"
        class="rounded-2xl border border-slate-200 bg-white p-6"
      >
        <span class="text-3xl font-extrabold text-gelb-400">{{ i + 1 }}.</span>
        <p class="mt-2 font-bold text-slate-900">{{ s.title }}</p>
        <p class="mt-1 text-sm leading-relaxed text-slate-600">{{ s.text }}</p>
      </li>
    </ol>

    <!-- Beitrittserklärung / Kontaktaufnahme -->
    <div class="mt-8 rounded-2xl border-l-4 border-gelb-400 bg-gelb-50 p-6">
      <template v-if="hasForm">
        <p class="font-bold text-blau-950">Beitrittserklärung</p>
        <p class="mt-1 leading-relaxed text-slate-700">
          Die Anmeldung läuft über ein Online-Formular – ausfüllen, absenden,
          fertig. Ausdrucken oder unterschreiben musst du nichts.
        </p>
        <a
          :href="membershipForm.url"
          target="_blank"
          rel="noopener"
          class="mt-4 inline-flex items-center gap-2 rounded-xl bg-blau-900 px-5 py-3 font-bold text-white transition hover:bg-blau-800"
        >
          <AppIcon name="arrow" class="h-5 w-5 text-gelb-400" />
          {{ membershipForm.label }}
        </a>
        <p class="mt-3 text-xs text-slate-600">
          Das Formular wird über {{ membershipForm.provider }} bereitgestellt;
          deine Angaben werden dort verarbeitet. Näheres in der
          <NuxtLink to="/datenschutz" class="font-semibold text-blau-700 underline"
            >Datenschutzerklärung</NuxtLink
          >. Lieber ohne Online-Formular? Schreib uns einfach an
          <a
            :href="`mailto:${contact.email}`"
            class="font-semibold text-blau-700 underline"
            >{{ contact.email }}</a
          >.
        </p>
      </template>
      <template v-else>
        <p class="font-bold text-blau-950">So meldest du dich an</p>
        <p class="mt-1 leading-relaxed text-slate-700">
          Für den Beitritt gibt es ein Formular – die Beitrittserklärung. Du
          kannst sie im Bereich Dokumente herunterladen, ausfüllen und uns
          unterschrieben per E-Mail oder beim Training zurückgeben. Die
          Datenschutzerklärung des Vereins bekommst du gleich dazu.
        </p>
        <NuxtLink
          to="/dokumente"
          class="mt-4 inline-flex items-center gap-2 rounded-xl bg-blau-900 px-5 py-3 font-bold text-white transition hover:bg-blau-800"
        >
          <AppIcon name="arrow" class="h-5 w-5 text-gelb-400" />
          Zur Beitrittserklärung
        </NuxtLink>
      </template>
    </div>

    <!-- Bankverbindung -->
    <h2 class="mt-12 text-2xl font-extrabold text-blau-900">
      Bankverbindung für den Mitgliedsbeitrag
    </h2>
    <p class="mt-3 text-slate-600">
      Den Mitgliedsbeitrag bitte auf das folgende Vereinskonto überweisen:
    </p>
    <div class="mt-6 grid gap-4 sm:grid-cols-2">
      <div
        v-for="k in bankAccounts"
        :key="k.iban"
        class="rounded-2xl border border-slate-200 bg-slate-50 p-5"
      >
        <p class="font-bold text-blau-900">{{ k.bank }}</p>
        <p class="mt-1 font-mono text-lg tracking-wide text-slate-900">
          {{ k.iban }}
        </p>
        <p class="mt-2 text-xs text-slate-500">
          Verwendungszweck: {{ paymentReference }}
        </p>
      </div>
    </div>

    <!-- Was erwartet mich -->
    <h2 class="mt-12 text-2xl font-extrabold text-blau-900">
      Was erwartet mich als Mitglied?
    </h2>
    <div class="mt-6 grid gap-6 sm:grid-cols-2">
      <div
        v-for="b in membership.benefits"
        :key="b.title"
        class="rounded-2xl border border-slate-200 bg-white p-6"
      >
        <div
          class="flex h-11 w-11 items-center justify-center rounded-xl bg-blau-50 text-blau-900"
        >
          <AppIcon :name="b.icon" class="h-6 w-6" />
        </div>
        <h3 class="mt-4 font-bold text-slate-900">{{ b.title }}</h3>
        <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ b.text }}</p>
      </div>
    </div>

    <!-- Schaubild: Weg zur erweiterten Freibadnutzung -->
    <h2 class="mt-12 text-2xl font-extrabold text-blau-900">
      Erweiterte Freibadnutzung – wie du dazukommst
    </h2>
    <p class="mt-3 text-slate-600">
      Für das Schwimmen außerhalb der Öffnungszeiten müssen drei Dinge erfüllt
      sein, damit die Marktgemeinde den Zutritt freischaltet.
    </p>

    <div class="mt-6 flex flex-col gap-4 md:flex-row md:items-stretch">
      <template v-for="(s, i) in freibadAccess.steps" :key="s.title">
        <span
          v-if="i > 0"
          aria-hidden="true"
          class="self-center text-2xl font-extrabold text-blau-300"
          >+</span
        >
        <div
          class="flex-1 rounded-2xl border border-slate-200 bg-white p-5 text-center"
        >
          <span
            class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blau-50 text-blau-900"
          >
            <AppIcon :name="s.icon" class="h-6 w-6" />
          </span>
          <p class="mt-3 font-bold text-slate-900">{{ s.title }}</p>
          <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ s.text }}</p>
          <a
            v-if="s.link && freibad.url"
            :href="freibad.url"
            target="_blank"
            rel="noopener"
            class="mt-2 inline-block text-sm font-semibold text-blau-700 underline"
          >
            {{ s.link }}
          </a>
        </div>
      </template>
    </div>

    <div class="flex justify-center py-3" aria-hidden="true">
      <AppIcon name="arrow" class="h-7 w-7 rotate-90 text-gelb-400" />
    </div>

    <div class="rounded-2xl bg-blau-900 p-6 text-center text-white">
      <span
        class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gelb-400 text-blau-950"
      >
        <AppIcon :name="freibadAccess.result.icon" class="h-6 w-6" />
      </span>
      <p class="mt-3 text-lg font-bold">{{ freibadAccess.result.title }}</p>
      <p class="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-blau-100">
        {{ freibadAccess.result.text }}
      </p>
    </div>

    <p class="mt-4 text-sm text-slate-600">
      Alle Voraussetzungen und Regeln im Detail stehen im
      <NuxtLink to="/angebot" class="font-semibold text-blau-700 underline"
        >Angebot</NuxtLink
      >; die Nutzungsordnung Freibad findest du im Bereich
      <NuxtLink to="/dokumente" class="font-semibold text-blau-700 underline"
        >Dokumente</NuxtLink
      >.
    </p>

    <!-- Arten der Mitgliedschaft -->
    <h2 class="mt-12 text-2xl font-extrabold text-blau-900">
      Arten der Mitgliedschaft
    </h2>
    <p class="mt-3 text-slate-600">
      Die Statuten kennen drei Formen der Mitgliedschaft:
    </p>
    <p class="mt-3 text-sm text-slate-600">
      Die Vereinsordnungen gelten in ihrer jeweils gültigen Fassung und stehen
      im Bereich
      <NuxtLink to="/dokumente" class="font-semibold text-blau-700 underline"
        >Dokumente</NuxtLink
      >
      zum Nachlesen bereit.
    </p>
    <div class="mt-6 grid gap-6 md:grid-cols-3">
      <div
        v-for="t in membership.types"
        :key="t.title"
        class="rounded-2xl border border-slate-200 bg-white p-6"
      >
        <h3 class="font-bold text-slate-900">{{ t.title }}</h3>
        <p class="mt-2 text-sm text-slate-600">{{ t.text }}</p>
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

  <ContactCta
    title="Noch Fragen zur Mitgliedschaft?"
    text="Melde dich einfach – wir erklären dir alles Weitere und du kannst jederzeit zum Schnuppern kommen."
    subject="Mitgliedschaft blaugelb Offenhausen"
  />
</template>
