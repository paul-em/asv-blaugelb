<script setup lang="ts">
import { club, contact } from '~/data/site'

useHead({ title: `Impressum – ${club.name}` })
</script>

<template>
  <PageHero
    title="Impressum"
    subtitle="Offenlegung gemäß § 5 ECG und §§ 24, 25 Mediengesetz."
  />

  <section class="mx-auto max-w-3xl px-4 py-16 text-slate-700">
    <h2 class="text-xl font-extrabold text-blau-900">
      Angaben gemäß § 5 E-Commerce-Gesetz
    </h2>

    <h3 class="mt-6 font-bold text-slate-900">Diensteanbieter</h3>
    <p class="mt-2">
      {{ club.officialName }}<br />
      Verein nach dem Vereinsgesetz 2002
    </p>

    <h3 class="mt-6 font-bold text-slate-900">Vereinsanschrift und Sitz</h3>
    <p class="mt-2">
      <template v-if="contact.street">{{ contact.street }}<br /></template>
      {{ contact.zip }} {{ contact.city }}, {{ contact.country }}<br />
      Vereinssitz: {{ contact.zip }} {{ contact.city }}
    </p>

    <h3 class="mt-6 font-bold text-slate-900">ZVR-Zahl</h3>
    <p class="mt-2">{{ contact.zvr }}</p>

    <h3 class="mt-6 font-bold text-slate-900">Vertretungsbefugtes Organ</h3>
    <p class="mt-2">{{ contact.representative }}</p>

    <h3 v-if="contact.supervisoryAuthority" class="mt-6 font-bold text-slate-900">
      Aufsichtsbehörde
    </h3>
    <p v-if="contact.supervisoryAuthority" class="mt-2">
      {{ contact.supervisoryAuthority }}
    </p>

    <h3 class="mt-6 font-bold text-slate-900">Anwendbare Rechtsvorschriften</h3>
    <p class="mt-2 leading-relaxed">
      Vereinsgesetz 2002 (VerG), abrufbar über das
      <a
        href="https://www.ris.bka.gv.at"
        target="_blank"
        rel="noopener"
        class="text-blau-700 hover:underline"
        >Rechtsinformationssystem des Bundes</a
      >.
    </p>

    <h3 class="mt-6 font-bold text-slate-900">Kontakt</h3>
    <p class="mt-2">
      <template v-if="contact.email"
        >E-Mail:
        <a
          :href="`mailto:${contact.email}`"
          class="text-blau-700 hover:underline"
          >{{ contact.email }}</a
        ><br
      /></template>
      <template v-if="contact.phone">Telefon: {{ contact.phone }}</template>
    </p>

    <h3 class="mt-6 font-bold text-slate-900">Vereinszweck</h3>
    <p class="mt-2 leading-relaxed">{{ club.purpose }}</p>
    <p class="mt-2 leading-relaxed">{{ club.nonprofit }}</p>

    <hr class="my-10 border-slate-200" />

    <h2 class="text-xl font-extrabold text-blau-900">
      Offenlegung gemäß §§ 24 und 25 Mediengesetz
    </h2>

    <h3 class="mt-6 font-bold text-slate-900">Medieninhaber und Herausgeber</h3>
    <p class="mt-2">
      {{ club.officialName }}<br />
      {{ contact.zip }} {{ contact.city }}<br />
      ZVR-Zahl: {{ contact.zvr }}
    </p>

    <h3 class="mt-6 font-bold text-slate-900">
      Verantwortlich für den Inhalt
    </h3>
    <p class="mt-2">{{ contact.contentResponsible }}</p>

    <h3 class="mt-6 font-bold text-slate-900">
      Grundlegende Richtung (Blattlinie)
    </h3>
    <p class="mt-2 leading-relaxed">
      Information über den Verein, sein Trainingsangebot, die Mitgliedschaft und
      die Vereinsgeschichte. Die Website richtet sich an Mitglieder und an alle,
      die sich für den Verein interessieren. Sie verfolgt keine kommerziellen
      Zwecke und veröffentlicht keine redaktionellen Beiträge Dritter.
    </p>

    <hr class="my-10 border-slate-200" />

    <h2 class="text-xl font-extrabold text-blau-900">Datenschutz</h2>
    <p class="mt-2 leading-relaxed">
      Diese Website ist rein statisch: keine Formulare, keine Cookies, kein
      Tracking, keine Inhalte von Drittanbietern. Wie wir mit personenbezogenen
      Daten umgehen, steht in der
      <NuxtLink to="/datenschutz" class="font-semibold text-blau-700 underline"
        >Datenschutzerklärung</NuxtLink
      >.
    </p>

    <h2 class="mt-10 text-xl font-extrabold text-blau-900">
      Haftungsausschluss
    </h2>
    <p class="mt-2 leading-relaxed">
      Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt.
      Für Richtigkeit, Vollständigkeit und Aktualität übernehmen wir dennoch
      keine Gewähr.
    </p>
    <p class="mt-2 leading-relaxed">
      Diese Website enthält Links zu externen Websites Dritter, auf deren
      Inhalte wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten
      ist stets der jeweilige Anbieter verantwortlich. Zum Zeitpunkt der
      Verlinkung waren keine rechtswidrigen Inhalte erkennbar.
    </p>
  </section>
</template>
