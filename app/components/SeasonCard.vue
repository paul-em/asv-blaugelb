<script setup lang="ts">
defineProps<{
  season: {
    id: string
    icon: string
    season: string
    title: string
    when: string
    place: string
    summary: string
  }
}>()
</script>

<template>
  <article
    class="flex flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:shadow-md"
  >
    <div
      class="flex h-12 w-12 items-center justify-center rounded-xl bg-blau-50 text-blau-900"
    >
      <AppIcon :name="season.icon" class="h-7 w-7" />
    </div>
    <p
      class="mt-5 text-xs font-bold uppercase tracking-widest text-blau-700"
    >
      {{ season.season }}
    </p>
    <h3 class="mt-1 text-xl font-bold text-slate-900">{{ season.title }}</h3>
    <p class="mt-2 flex-1 text-slate-600">{{ season.summary }}</p>
    <dl class="mt-5 space-y-1 border-t border-slate-100 pt-4 text-sm">
      <div class="flex items-center gap-2 text-slate-700">
        <dt class="sr-only">Zeit</dt>
        <AppIcon name="clock" class="h-4 w-4 shrink-0 text-blau-700" />
        <dd class="font-semibold">{{ season.when }}</dd>
      </div>
      <div class="flex items-center gap-2 text-slate-500">
        <dt class="sr-only">Ort</dt>
        <AppIcon name="pin" class="h-4 w-4 shrink-0 text-blau-700" />
        <dd>{{ season.place }}</dd>
      </div>
    </dl>
  </article>
</template>
