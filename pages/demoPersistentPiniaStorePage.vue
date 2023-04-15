<script setup lang="ts">
import DemoPersistedPiniaStoreComponent from '~~/components/demo-persisted-pinia-store-component/demo-persisted-pinia-store-component.vue'
</script>

<template>
  <h1>Showcase: Pinia Store</h1>

  <p>
    This page is a showcase of the Pinia Store utilizing two different stores:
    one that is non-persistent and one that is persistent.
  </p>

  <ClientOnly placeholder="Loading...">
    <DemoPersistedPiniaStoreComponent />
  </ClientOnly>

  <hr />
  <NuxtLink
    to="https://nuxt.com/docs/guide/directory-structure/pages"
    target="_blank"
    >Nuxt Documentation for "Pages"</NuxtLink
  ><br /><br />
  <NuxtLink to="/">Back to Index</NuxtLink>
</template>

<style scoped lang="scss"></style>
