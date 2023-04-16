import VueMacros from 'unplugin-vue-macros'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    VueMacros.vite({
      plugins: {},
    }),
  ],
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/app.scss";',
      },
    },
  },
  build: { sourcemap: false },
})
