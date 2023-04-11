<script setup lang="ts"></script>

<template>
  <h1>Showcase: CRUD-Operations</h1>
  <p>
    This Demo showcases how you "could" use a &lt;demoJsonStore /&gt;-Component
    to perform CRUD-Operations on local JSON data.
  </p>

  <strong>How:</strong>
  <p>
    The Component (~/components/demo-json-store-component.vue) provides a simple UI to
    display data and trigger CRUD-Operations. <br />The data is stored in a
    local JSON-File: (~/data/demoJsonStoreData.json). <br />
    The Component is using the Composable (~/composables/demoJsonStoreComponent.ts) to
    perform the CRUD-Operations on the local REST-API
    (~/server/api/demoJsonStoreEndpoint/*).
  </p>

  <strong>WARNING:</strong>
  <p>
    This <u>is just a demo</u> and <u>far away from best practice</u>. Since I
    did not included any "Authentication", "Authorization", "Sanitization" nor
    "Validation" you will easily break stuff and set your Server at huge risk if
    you're using it as is!
  </p>

  <demoJsonStoreComponent />

  <br />
  <NuxtLink to="/">Back to Index</NuxtLink>
</template>

<style scoped lang="scss"></style>
