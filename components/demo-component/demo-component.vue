<script setup lang="ts">

// Thanks to VueMacros, we can now import our model from dedicated file
// https://vue-macros.sxzz.moe/features/better-define.html
import { type IDemoComponent} from './demo-component.model'

const props = withDefaults(defineProps<IDemoComponent>(), {
  text: 'This is Demo Component\'s default text for text prop',
  text2: 'This is Demo Component\'s default text since text2 prop was not passed from parent component',
})

const items: string[] = [
  'a Blog Post',
  'a Product Card',
  'a Promo Slider',
  'a List or just an Item of it',
  '... ¯\\_(ツ)_/¯',
]
</script>

<template>
  <div class="demo-component">
    <h3 class="demo-component__title">
      Hello from: '~/components/demo-component.vue'
    </h3>
    <h4>{{ props.text }}</h4>
    <small>{{ props.text2 }}</small>

    <p>This Component could be anything...</p>
    <ul>
      <li v-for="item in items" :key="item">
        {{ item }}
      </li>
    </ul>
    <hr />
    <NuxtLink to="https://nuxt.com/docs/guide/directory-structure/components" target="_blank">Nuxt Documentation for "Components"</NuxtLink>
  </div>
</template>

<style scoped lang="scss">
@import 'demo-component.scss';
</style>
