<script setup lang="ts">
const { locales, locale, setLocale } = useI18n()
const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value)
  },
})
</script>

<template>
  <div class="demo-i18n-lang-switcher">{{ $t('langSwitcherHeadline') }}</div>
  <select v-model="language" class="demo-i18n-lang-switcher__select">
    <option
      v-for="item in locales"
      :key="typeof item === 'object' ? item.code : item"
      :value="typeof item === 'object' ? item.code : item"
    >
      {{ typeof item === 'object' ? item.name : item }}
    </option>
  </select>
</template>

<style scope lang="scss">
@import 'demo-i18n-lang-switcher.scss';
</style>
