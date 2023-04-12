<script setup lang="ts">
import DemoPublicApiComponent from '~/components/demo-public-api-component/demo-public-api-component.vue';
</script>

<template>
  <h1>Showcase: CRUD-Operations</h1>
  <p>
    This Demo showcases how you "could" use a &lt;demoPublicApiPage /&gt;-Component
    to display contents from an public API's JSON-Data.
  </p>

  <strong>How:</strong>
  <p>
    The Component (~/components/demo-public-api-component.vue) provides a place where you could build an UI to
    display data. <br /> 
    The Component is using the Composable (~/composables/useDemoPublicApiComposable.ts) to
    request data from local REST-API (~/server/api/demoPublicApiEndpoint/*) which itself proxys the data from an public API.
    <br/>The data is actually fetched from the public API of: <a href="https://randomuser.me" target="_blank">https://randomuser.me</a>
  </p>

  <DemoPublicApiComponent />

  <hr />
  <NuxtLink to="https://nuxt.com/docs/guide/directory-structure/pages" target="_blank">Nuxt Documentation for "Pages"</NuxtLink><br /><br />
  <NuxtLink to="/">Back to Index</NuxtLink>
</template>

<style scoped lang="scss"></style>