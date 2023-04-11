<script setup lang="ts"></script>

<template>
  <h2>
    This is a Demo Page <u>which uses a Component from (~/components/)</u>
  </h2>

  <DemoComponent
    text="Hello from: '~/pages/DemoPageComponent.vue'. I'm a passed property!"
  />
  <hr />
  <NuxtLink to="/">Back to Index</NuxtLink>
</template>

<style scoped lang="scss"></style>
