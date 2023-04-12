<script setup lang="ts"></script>

<template>
  <h2>
    This is a Demo Page <u>which uses a Component from (~/components/)</u>
  </h2>

  <DemoComponent
    text="Hello from: '~/pages/DemoPageComponent.vue'. I'm a passed property!"
  />
  <hr />
  <NuxtLink to="https://nuxt.com/docs/guide/directory-structure/pages" target="_blank">Nuxt Documentation for "Pages"</NuxtLink><br /><br />
  <NuxtLink to="/">Back to Index</NuxtLink>
</template>

<style scoped lang="scss"></style>
