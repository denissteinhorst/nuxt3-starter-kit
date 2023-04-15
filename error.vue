<script setup>
const props = defineProps({
  error: Object,
})

const handleError = () => clearError({ redirect: '/' })
</script>

<template>
  <h1>This is your custom Error Page</h1>
  <pre>{{ props.error }}</pre>
  <button @click="handleError">Clear errors</button>

  <hr />
  <NuxtLink
    to="https://nuxt.com/docs/getting-started/error-handling#rendering-an-error-page"
    target="_blank"
    >Nuxt Documentation for "rendering-an-error-page"</NuxtLink
  ><br /><br />
</template>
