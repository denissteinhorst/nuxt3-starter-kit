<script setup lang="ts">
import useDemoJsonStoreComposable from '~/composables/useDemoJsonStoreComposable'
const {
  demoJsonData,
  mode,
  demo,
  activeMode,
  refresh,
  switchMode,
  removeDemo,
  formSubmit,
} = await useDemoJsonStoreComposable()
</script>

<template>
  <NuxtErrorBoundary>
    <div class="demo-card">
      <div class="demo-card__wrapper">
        <h2>Current Demo Data</h2>
        <div v-for="entry in demoJsonData" v-if="demoJsonData" :key="entry.id">
          <div class="demo-card__header">
            <button class="demo-card__delete" @click="removeDemo(entry.id)">
              Delete
            </button>
            <button
              class="demo-card__edit"
              @click="switchMode('edit', entry.id)"
            >
              Edit
            </button>
            <div class="demo-card__title">
              id: [{{ entry.id }}] | {{ entry.title }}
            </div>
          </div>

          <div class="demo-card__content">
            <p>{{ entry.content }}</p>
          </div>
        </div>

        <div v-else>
          <p>No data</p>
          <button @keydown.enter="refresh">Refresh</button>
        </div>
        <small class="right">from: ~/public/data/demoJsonStoreData.json</small>

        <h2 v-html="mode.headlineText"></h2>
        <form @submit.prevent="formSubmit">
          <label for="title">Title</label>
          <input id="title" v-model="demo.title" type="text" />
          <br />
          <label for="content">Content</label>
          <input id="content" v-model="demo.content" type="text" />
          <br />
          <button type="submit" v-html="mode.buttonText"></button>
          <button
            v-if="activeMode === 'edit'"
            @submit.prevent="switchMode('create')"
          >
            Abort Edit
          </button>
        </form>
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
@import 'demo-json-store-component.scss';
</style>
