<script setup lang="ts">
import DemoPiniaStoreComponent from '~~/components/demo-pinia-store-component/demo-pinia-store-component.vue';

</script>

<template>
  <h1>Showcase: Pinia Store</h1>

  <p>
    This page is a showcase of the Pinia Store utilizing two different stores: one that is non-persistent and one that is persistent.
    <br/> For the sake of simplicity both of them are in the same file therefor both are &lt;ClientOnly&gt; right now, but in a real world scenario they would be in separate files since <u>the persistent store only works on the client side</u>.
  </p>

  <ClientOnly placeholder="Loading...">
    <DemoPiniaStoreComponent />
  </ClientOnly>

  <hr />
  <NuxtLink to="https://nuxt.com/docs/guide/directory-structure/pages" target="_blank">Nuxt Documentation for "Pages"</NuxtLink><br /><br />
  <NuxtLink to="/">Back to Index</NuxtLink>
</template>

<style scoped lang="scss"></style>
