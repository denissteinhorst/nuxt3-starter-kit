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
</template>
