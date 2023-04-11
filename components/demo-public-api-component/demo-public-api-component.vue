<script setup lang="ts">
let { demoPublicData, refresh } = await useDemoPublicApiComposable()

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
<div class="demo-component">
  <div class="demo-component__wrapper">
    <button :disabled="buttonCooldown" @click="requestNewRandomUser">fetch new random User <br /> (3s. Cooldown)</button>
    <pre>{{ demoPublicData }}</pre>
  </div>
</div>
</template>

<style scoped lang="scss">
@import 'demo-public-api-component.scss';
</style>
