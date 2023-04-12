<template>
  <div id="custom-app-layout">
    <header class="custom-app-layout__header">
      <h1>Custom App Layout Header</h1>
    </header>
    <main class="custom-app-layout__content">
      <slot />
    </main>
    <footer class="custom-app-layout__footer">
      <small>Custom App Layout Footer</small>
    </footer>
    <hr />
    <NuxtLink to="https://nuxt.com/docs/guide/directory-structure/layouts" target="_blank">Nuxt Documentation for "Layouts"</NuxtLink>
  </div>
</template>

<style scoped lang="scss">
$block: 'custom-app-layout';

.#{$block} {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__header {
    flex: 0 0 auto;
    padding: pxToRem(20);
    background-color: #f8f8f8;
  }

  &__content {
    flex: 1 0 auto;
    padding: pxToRem(20);
  }

  &__footer {
    flex: 0 0 auto;
    padding: pxToRem(20);
    background-color: #f8f8f8;
  }
}
</style>
