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

    <h2 class="mt-8 text-lg font-bold text-blau-900">Medieninhaber & Herausgeber</h2>
    <p class="mt-2">
      {{ club.name }}<br />
      <template v-if="contact.street">{{ contact.street }}<br /></template>
      {{ contact.zip }} {{ contact.city }}, {{ contact.country }}
    </p>

    <h2 class="mt-6 text-lg font-bold text-blau-900">Kontakt</h2>
    <p class="mt-2">
      <template v-if="contact.email"
        >E-Mail: <a :href="`mailto:${contact.email}`" class="text-blau-700 hover:underline">{{ contact.email }}</a><br
      /></template>
      <template v-if="contact.phone">Telefon: {{ contact.phone }}</template>
    </p>

    <h2 class="mt-6 text-lg font-bold text-blau-900">Vereinsdaten</h2>
    <p class="mt-2">
      ZVR-Zahl: {{ contact.zvr || 'TODO ergänzen' }}<br />
      Vereinssitz: {{ contact.zip }} {{ contact.city }}
    </p>

    <div
      class="mt-8 rounded-xl border border-dashed border-blau-300 bg-blau-50 p-5 text-sm text-blau-900"
    >
      <strong>Hinweis:</strong> Bitte alle Pflichtangaben (ZVR-Zahl,
      vertretungsbefugte Person, vollständige Adresse) vor der
      Veröffentlichung prüfen und ergänzen. Siehe Frageliste.
    </div>
  </section>
</template>
