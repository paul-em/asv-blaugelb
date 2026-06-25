<script setup lang="ts">
defineProps<{ name: string }>()

// Schlanke Inline-SVG-Icons (kein externes Icon-Paket nötig).
const paths: Record<string, string> = {
  run: 'M13 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm-1.5 2.1L8 8.5l1.8 2.2L7 14l1.5 1.3 3.4-4-1.6-2 2.2-1.3 1.6 2.3H17V8.3h-2.3l-1.8-2.5a2 2 0 0 0-1.4-.8 2 2 0 0 0-1 .2ZM6 17l-2 5h2l1.6-4L6 17Z',
  bike: 'M5 11a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm14-6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM14.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-1.9 1.2 2.3 2.3-2 1.8V15h-2v-4l2-1.8-1.3-1.3L9 9.2 7 8l2.7-2.7c.5-.5 1.3-.5 1.8 0l1.1 1.9Z',
  group: 'M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 2c-2.7 0-8 1.3-8 4v3h10v-3c0-1 .4-1.9 1-2.6A12 12 0 0 0 8 13Zm8 0c-.5 0-1 0-1.6.1 1 .9 1.6 2 1.6 3.4v2.5h8v-2c0-2.7-5.3-4-8-4Z',
  pin: 'M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z',
  mail: 'M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm0 4.2V18h16V8.2l-8 5-8-5ZM4 6l8 5 8-5H4Z',
  phone: 'M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1l-2.2 2.2Z',
  calendar: 'M7 2v2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2V2h-2v2H9V2H7ZM5 9h14v10H5V9Z',
  clock: 'M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16Zm1-13h-2v6l5 3 1-1.7-4-2.3V7Z',
  arrow: 'M5 12h14M13 6l6 6-6 6',
  check: 'M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2Z',
}
</script>

<template>
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    class="inline-block"
  >
    <path
      :d="paths[name]"
      :fill="name === 'arrow' ? 'none' : 'currentColor'"
      :stroke="name === 'arrow' ? 'currentColor' : 'none'"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>
