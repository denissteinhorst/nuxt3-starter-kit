import { defineVitestConfig } from 'nuxt-vitest/config'
import VueMacros from 'unplugin-vue-macros'
import { configDefaults } from 'vitest/config'

// Exclude unit tests from e2e tests
const excludes = [
  ...configDefaults.exclude,
  'components/**/*.test.@(ts|js)',
  '**/*.test.@(ts|js)',
  '*.test.@(ts|js)',
]

const includes = [
  ...configDefaults.include,
  '**/*.test.e2e.@(ts|js)',
  '**/**/*.test.e2e.@(ts|js)',
]

process.env.VITE_TEST_ENV = 'true'

export default defineVitestConfig({
  root: '.',
  plugins: [
    VueMacros.vite({
      plugins: {},
    }),
  ],
  test: {
    threads: true,
    globals: true,
    watchExclude: excludes,
    exclude: excludes,
    include: includes,
  },
})
