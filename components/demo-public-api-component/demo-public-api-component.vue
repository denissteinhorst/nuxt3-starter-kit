<script setup lang="ts">
const { demoPublicData, refresh } = await useDemoPublicApiComposable()

const buttonCooldown = ref(false)
const requestNewRandomUser = async () => {
  buttonCooldown.value = true
  await refresh()
  setTimeout(() => {
    buttonCooldown.value = false
  }, 3000)
}
</script>

<template>
  <NuxtErrorBoundary>
    <div class="demo-component">
      <div class="demo-component__wrapper">
        <button :disabled="buttonCooldown" @click="requestNewRandomUser">
          fetch new random User <br />
          (3s. Cooldown)
        </button>
        <pre>{{ demoPublicData }}</pre>
      </div>
      <hr />
      <NuxtLink
        to="https://nuxt.com/docs/guide/directory-structure/components"
        target="_blank"
        >Nuxt Documentation for "Components"</NuxtLink
      >
    </div>

    <!-- https://nuxt.com/docs/getting-started/error-handling#rendering-errors-within-your-app -->
    <template #error="{ error }">
      <p>An error occurred: {{ error }}</p>
    </template>
  </NuxtErrorBoundary>
</template>

<style scoped lang="scss">
@import 'demo-public-api-component.scss';
</style>
