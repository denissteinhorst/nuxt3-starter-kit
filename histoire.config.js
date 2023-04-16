import { HstNuxt } from '@histoire/plugin-nuxt'
import { HstVue } from '@histoire/plugin-vue'
import { defineConfig } from 'histoire'

export default defineConfig({
  plugins: [HstVue(), HstNuxt()],
  vite: {
    build: { sourcemap: false },
    devServer: {
      sourcemap: true,
    },
  },
})
