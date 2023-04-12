import { defineVitestConfig } from 'nuxt-vitest/config'

import VueMacros from 'unplugin-vue-macros'

export default defineVitestConfig({
  plugins: [
    VueMacros.vite({
      plugins: {},
    }),],
  test: {
    globals: true,
    environment: 'nuxt',
  },
})
