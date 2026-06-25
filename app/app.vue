<script setup lang="ts">
// baseURL endet immer auf "/" (z. B. "/" lokal oder "/asv-blaugelb/" auf
// GitHub Pages) – so zeigt das Favicon auch unter einem Unterpfad richtig.
const base = useRuntimeConfig().app.baseURL
useHead({
  link: [{ rel: 'icon', type: 'image/svg+xml', href: `${base}favicon.svg` }],
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
