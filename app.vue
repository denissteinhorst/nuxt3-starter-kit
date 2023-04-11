<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/**
 * Styles that are placed here, are valid in the whole app and will be applied to every page.
 * For the demo purpose, we will demonstrate this behavior by defining Font Styles.
 * In a real world scenario, you would probably define everything under ~/assets/scss/*
*/
html {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  line-height: 1.5;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.47059;
  letter-spacing: -0.022em;
}
</style>
