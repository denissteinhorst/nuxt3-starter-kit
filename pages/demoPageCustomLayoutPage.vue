<script setup lang="ts">
definePageMeta({ layout: false })
definePageMeta({ layout: 'demo-layout' })
</script>

<template>
  <h2>
    This is a Demo Page <u>utilizing a custom layout</u>:
    (~/layouts/demo-layout.vue)
  </h2>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam unde
    mollitia reprehenderit id sed ea, iure necessitatibus amet adipisci.
    Suscipit in eveniet rem, blanditiis modi rerum atque neque explicabo
    quibusdam?
  </p>
  <hr />
  <NuxtLink
    to="https://nuxt.com/docs/guide/directory-structure/pages"
    target="_blank"
    >Nuxt Documentation for "Pages"</NuxtLink
  ><br /><br />
  <NuxtLink to="/">Back to Index</NuxtLink>
</template>

<style scoped lang="scss"></style>
