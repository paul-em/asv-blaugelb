<script setup lang="ts">
import { club, contact } from '~/data/site'

useHead({ title: `Impressum – ${club.name}` })
</script>

<template>
  <PageHero title="Impressum" />

  <section class="mx-auto max-w-3xl px-4 py-16 text-slate-700">
    <p class="leading-relaxed">
      Angaben gemäß § 5 E-Commerce-Gesetz (ECG) und § 25 Mediengesetz.
    </p>

    <h2 class="mt-8 text-lg font-bold text-blau-900">
      Medieninhaber & Herausgeber
    </h2>
    <p class="mt-2">
      {{ club.officialName }}<br />
      <template v-if="contact.street">{{ contact.street }}<br /></template>
      {{ contact.zip }} {{ contact.city }}, {{ contact.country }}
    </p>

    <h2 class="mt-6 text-lg font-bold text-blau-900">Kontakt</h2>
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

    <h2 class="mt-6 text-lg font-bold text-blau-900">Vereinsdaten</h2>
    <p class="mt-2">
      Rechtsform: Verein nach dem Vereinsgesetz 2002<br />
      ZVR-Zahl: {{ contact.zvr }}<br />
      Vereinssitz: {{ contact.zip }} {{ contact.city }}<br />
      Vertretungsbefugt: {{ contact.representative }}
    </p>

    <h2 class="mt-6 text-lg font-bold text-blau-900">
      Verantwortlich für den Inhalt
    </h2>
    <p class="mt-2">{{ contact.contentResponsible }}</p>

    <h2 class="mt-6 text-lg font-bold text-blau-900">Vereinszweck</h2>
    <p class="mt-2 leading-relaxed">{{ club.purpose }}</p>
    <p class="mt-2 leading-relaxed">{{ club.nonprofit }}</p>

    <h2 class="mt-6 text-lg font-bold text-blau-900">
      Grundlegende Richtung (Blattlinie)
    </h2>
    <p class="mt-2 leading-relaxed">
      Information über die Tätigkeit, die Veranstaltungen und das
      Trainingsangebot des Ausdauersportvereins blaugelb Offenhausen.
    </p>

    <h2 class="mt-6 text-lg font-bold text-blau-900">Datenschutz</h2>
    <p class="mt-2 leading-relaxed">
      Diese Website ist eine rein statische Seite. Sie erhebt selbst keine
      personenbezogenen Daten: Es gibt keine Formulare, keine Registrierung,
      keine Cookies, keine Analyse- oder Tracking-Dienste, und es werden keine
      Schriften, Karten oder sonstigen Inhalte von Drittanbietern nachgeladen.
      Die Kontaktaufnahme erfolgt ausschließlich über den angegebenen
      E-Mail-Link.
    </p>
    <p class="mt-2 leading-relaxed">
      Beim Abruf der Seite verarbeitet der Hosting-Anbieter technisch
      notwendige Zugriffsdaten (etwa IP-Adresse, Zeitpunkt und aufgerufene
      Datei), um die Auslieferung der Seite zu ermöglichen und den Betrieb
      abzusichern. Schreibst du uns eine E-Mail, verwenden wir deine Angaben
      ausschließlich zur Beantwortung deiner Anfrage.
    </p>

    <h2 class="mt-6 text-lg font-bold text-blau-900">Haftung für Links</h2>
    <p class="mt-2 leading-relaxed">
      Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte
      wir keinen Einfluss haben. Für die Inhalte der verlinkten Seiten ist stets
      der jeweilige Anbieter verantwortlich.
    </p>
  </section>
</template>
