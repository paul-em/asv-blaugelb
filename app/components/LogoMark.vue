<script setup lang="ts">
/*
  Vereinsmarke – die gekippte Ellipse aus zwei Sicheln.

  Das Motiv stammt aus dem Vereinslogo von 2013: dort umschlossen zwei sich
  verjüngende Sicheln die Wortmarke "blau gelb". Hier ist es als eigenständige
  Bildmarke gezeichnet – eine offene Bahn, passend zu den Rundkursen, auf denen
  der Verein seine Rennen austrägt.

  variant
    tile   Blaue Kachel mit gelber und weißer Sichel. Standard-Container für
           helle Flächen, App-Icon, Avatar, Trikot.
    invers Gelbe Kachel mit blauen Sicheln – für dunkelblaue Hintergründe.
    plain  Freistehend, blaue und gelbe Sichel ohne Container. Für Briefkopf,
           Druck und überall dort, wo keine Kachel passt.

  compact
    Ab ca. 28–60 px Darstellungsgröße setzen. Die Bahn wird dann breiter
    gezeichnet, damit sie optisch offen bleibt statt zuzulaufen.
    Unter 28 px nicht verwenden – dafür gibt es public/favicon.svg.
*/
const props = withDefaults(
  defineProps<{
    variant?: 'tile' | 'invers' | 'plain'
    compact?: boolean
  }>(),
  { variant: 'tile', compact: false },
)

// Innerer Radius der Bahn: kleiner = breitere Sichel.
const inner = computed(() => (props.compact ? 86 : 96))

// Ohne Kachel darf die Marke den Rahmen weiter ausnutzen.
const scale = computed(() => (props.variant === 'plain' ? 0.13 : 0.1))

const tileFill = computed(() =>
  props.variant === 'invers'
    ? 'var(--color-gelb-400, #ffd11a)'
    : 'var(--color-blau-900, #0b4f9e)',
)

const fills = computed(() => {
  switch (props.variant) {
    case 'invers':
      return {
        left: 'var(--color-blau-900, #0b4f9e)',
        right: 'var(--color-blau-950, #0a2356)',
      }
    case 'plain':
      return {
        left: 'var(--color-blau-900, #0b4f9e)',
        right: 'var(--color-gelb-400, #ffd11a)',
      }
    default:
      return { left: 'var(--color-gelb-400, #ffd11a)', right: '#ffffff' }
  }
})
</script>

<template>
  <svg viewBox="0 0 48 48" class="shrink-0" aria-hidden="true">
    <rect
      v-if="variant !== 'plain'"
      width="48"
      height="48"
      rx="11"
      :fill="tileFill"
    />
    <g :transform="`translate(24 24) rotate(-23) scale(${scale})`">
      <path
        :d="`M0,-56 A150,56 0 0 0 0,56 A${inner},56 0 0 1 0,-56 Z`"
        :fill="fills.left"
      />
      <path
        :d="`M0,-56 A150,56 0 0 1 0,56 A${inner},56 0 0 0 0,-56 Z`"
        :fill="fills.right"
      />
    </g>
  </svg>
</template>
