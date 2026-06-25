<script setup lang="ts">
defineProps<{ title: string; subtitle?: string }>()
</script>

<template>
  <section class="bg-grid bg-blau-900 text-white">
    <div class="mx-auto max-w-6xl px-4 py-16 md:py-20">
      <p class="text-sm font-bold uppercase tracking-widest text-gelb-400">
        ASV blaugelb Offenhausen
      </p>
      <h1 class="mt-2 text-3xl font-extrabold tracking-tight md:text-5xl">
        {{ title }}
      </h1>
      <p v-if="subtitle" class="mt-4 max-w-2xl text-lg text-blau-100">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>
