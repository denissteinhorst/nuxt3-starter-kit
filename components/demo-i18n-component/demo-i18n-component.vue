<script setup lang="ts">
const localPath = useLocalePath()


</script>

<template>
  <div class="demo-i18n-component">
    <div class="demo-i18n-component__blogentry">
      <span class="demo-i18n-component__blogentry--title">
        {{ $t("headline") }}
      </span>
      <span class="demo-i18n-component__blogentry--content">
        {{ $t("content") }}
      </span>
    </div>

    <br /><br />
    <strong>{{ $t("nuxtLinkHeadline") }}:</strong>
    <p>
      {{ $t("nuxtLinkIntro") }} 
      <NuxtLink :to="localPath('/demoI18nPage')">{{ $t("nuxtLink") }}</NuxtLink>
    </p>
    <p>
      {{ $t("nuxtLinkOutro") }} 
    </p>
    <DemoI18nLangSwitcher />
  </div>
  <hr />
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