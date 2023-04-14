<script setup lang="ts">
  import { ref } from 'vue'
  import { useIntervalFn, useIdle, useTimestamp} from '@vueuse/core'
  import { rand } from '@vueuse/shared'

  // https://vueuse.org/core/useMouse/
  const {
    x,
    y,
    sourceType
  } = useMouse()

  // https://vueuse.org/core/useIdle/
  const { idle, lastActive } = useIdle(5000)
  const now = useTimestamp()
  const idledFor = computed(() =>
    Math.floor((now.value - lastActive.value) / 1000),
  )

  // https://vueuse.org/core/useFps/
  const fps = useFps()

  // https://vueuse.org/shared/useIntervalFn/
  const greetings = ['Hello', 'Hi', 'Yo!', 'Hey', 'Hola', 'こんにちは', 'Bonjour', 'Salut!', '你好', 'Привет']
  const word = ref('Hello')
  const interval = ref(500)
  const {
    pause,
    resume,
    isActive
  } = useIntervalFn(() => {
    word.value = greetings[rand(0, greetings.length - 1)]
  }, interval)
</script>

<template>
  <div class="demo-vueuse-component">
    <div>
      <NuxtLink to="https://vueuse.org/core/useMouse/">core/useMouse</NuxtLink>
      <hr/>pos: {{ x }}, {{ y }}, {{ sourceType }}
    </div>
    <div>
      <NuxtLink to="https://vueuse.org/core/useFps/">core/useIdle</NuxtLink>
      <hr/>Inactive: <b class="text-primary">{{ idledFor }}s</b>
    </div>
    <div>
      <NuxtLink to="https://vueuse.org/core/useFps/">core/useFps</NuxtLink>
      <hr/>FPS: {{ fps }}
    </div>
    <div>
      <NuxtLink to="https://vueuse.org/shared/useIntervalFn/">shared/useIntervalFn/</NuxtLink>
      <hr/>
      <p>{{ word }}</p>
      <p>
        interval:
        <input v-model="interval" type="number" placeholder="interval">
      </p>
      <button v-if="isActive" class="orange" @click="pause">
        Pause
      </button>
      <button v-if="!isActive" @click="resume">
        Resume
      </button>
    </div>
  </div>
  <hr />
  <NuxtLink to="https://vueuse.org/functions.html" target="_blank">VueUse Documentation for "Functions"</NuxtLink><br /><br />
  <NuxtLink to="https://nuxt.com/docs/guide/directory-structure/components" target="_blank">Nuxt Documentation for "Components"</NuxtLink>
 
</template>

<style scoped lang="scss">
$block: 'demo-vueuse-component';

.#{$block} {
  width: 50%;
  margin: 0 25%;
  display: flex;
  justify-content: space-between;

  div {
    padding: 1rem;
    margin: 1rem;
  }
}
</style>