<script setup lang="ts">
import { contact } from '~/data/site'

/*
  Kontakt-Aufruf am Seitenende. Die WhatsApp-Schaltfläche erscheint nur,
  wenn in `contact.whatsapp` ein Link hinterlegt ist – solange nicht,
  bleibt der E-Mail-Weg der einzige (und funktionierende) Kanal.
*/
const props = withDefaults(
  defineProps<{
    title?: string
    text?: string
    subject?: string
  }>(),
  {
    title: 'Lust, mitzumachen?',
    text: 'Schreib uns kurz – zum Schnuppern kannst du jederzeit vorbeikommen.',
    subject: 'Anfrage über die Website',
  },
)

const mailto = computed(
  () => `mailto:${contact.email}?subject=${encodeURIComponent(props.subject)}`,
)
</script>

<template>
  <section class="bg-blau-900">
    <div
      class="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center"
    >
      <h2 class="text-3xl font-extrabold text-white">{{ title }}</h2>
      <p class="max-w-xl text-blau-100">{{ text }}</p>
      <div class="flex flex-wrap justify-center gap-3">
        <a
          :href="mailto"
          class="inline-flex items-center gap-2 rounded-xl bg-gelb-400 px-6 py-3 font-bold text-blau-950 transition hover:bg-gelb-300"
        >
          <AppIcon name="mail" class="h-5 w-5" />
          {{ contact.email }}
        </a>
        <a
          v-if="contact.whatsapp"
          :href="contact.whatsapp"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-2 rounded-xl border border-blau-300/40 px-6 py-3 font-semibold text-white transition hover:bg-blau-800"
        >
          <AppIcon name="whatsapp" class="h-5 w-5" />
          Per WhatsApp schreiben
        </a>
      </div>
      <p class="text-sm text-blau-200">
        Aktuelle Termine und kurzfristige Änderungen laufen über unsere
        WhatsApp-Gruppe – als Mitglied bist du automatisch dabei.
      </p>
    </div>
  </section>
</template>
