import { defineVitestConfig } from 'nuxt-vitest/config'
import VueMacros from 'unplugin-vue-macros'
import { configDefaults } from 'vitest/config'

// Exclude e2e tests from unit tests
const excludes = [
  ...configDefaults.exclude,
  'components/**/*.test.e2e.@(ts|js)',
  '**/*.test.e2e.@(ts|js)',
  '*.test.e2e.@(ts|js)',
]

process.env.VITE_TEST_ENV = 'true'

export default defineVitestConfig({
  plugins: [
    VueMacros.vite({
      plugins: {},
    }),
  ],
  test: {
    globals: true,
    environment: 'nuxt',
    watchExclude: excludes,
    exclude: excludes,
  },
})
