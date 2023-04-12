import VueMacros from 'unplugin-vue-macros'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    VueMacros.vite({
      plugins: {
        // vueJsx: VueJsx(), // if needed
      },
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/scss/app.scss";',
      },
    },
  },
})
