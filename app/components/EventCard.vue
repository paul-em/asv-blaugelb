<script setup lang="ts">
defineProps<{
  event: {
    name: string
    when?: string
    where?: string
    text: string
    highlight?: boolean
  }
}>()
</script>

<template>
  <article
    class="flex flex-col rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
    :class="
      event.highlight
        ? 'border-gelb-400 ring-1 ring-gelb-400'
        : 'border-slate-200'
    "
  >
    <span
      v-if="event.highlight"
      class="mb-3 inline-flex w-fit rounded-full bg-gelb-400 px-2.5 py-0.5 text-xs font-bold text-blau-950"
      >Highlight</span
    >
    <h3 class="text-lg font-bold text-slate-900">{{ event.name }}</h3>
    <div class="mt-3 space-y-1 text-sm text-slate-500">
      <p class="flex items-center gap-2">
        <AppIcon name="calendar" class="h-4 w-4 text-blau-700" />
        {{ event.when || 'Termin folgt' }}
      </p>
      <p v-if="event.where" class="flex items-center gap-2">
        <AppIcon name="pin" class="h-4 w-4 text-blau-700" />
        {{ event.where }}
      </p>
    </div>
    <p class="mt-4 flex-1 text-slate-600">{{ event.text }}</p>
  </article>
</template>
