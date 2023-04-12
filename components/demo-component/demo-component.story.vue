<script setup lang="ts">
import DemoComponent from './demo-component.vue';
import { type IDemoComponent } from './demo-component.model';

const initState = (): IDemoComponent => ({
  text: 'This is the "Bold" text line',
  text2: 'Hello from Histoire',
});

/**
 * Histoire Reference & Controls:
 * https://histoire.dev/reference/vue3/story.html 
 * https://controls.histoire.dev/story/intro
 */
</script>

<template>
  <Story title="DemoComponent">
    <Variant title="variant" :init-state="initState" auto-props-disabled="true">
      <template #default="{ state }">
        <DemoComponent v-bind="state" />
      </template>

      <template #controls="{ state }">
        <HstText v-model="state.text" title="text" />
        <HstText v-model="state.text2" title="text2" />
      </template>
   </Variant>
  </Story>
</template>