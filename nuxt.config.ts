// https://nuxt.com/docs/api/configuration/nuxt-config
import i18nConfig from './i18n.config'

const useNuxtVitest =
  process.env.VITE_TEST_ENV === 'true' ? ['nuxt-vitest'] : []

const appConfig = {
  env: process.env.APP_ENV ?? 'development',
  port: (process.env.APP_PORT ?? 3000) as number,
  host: process.env.APP_HOST ?? '127.0.0.1',
  appBaseURL: process.env.NUXT_APP_BASE_URL ?? '',
  isDev: process.env.APP_ENV === 'development',
}

export default defineNuxtConfig({
  ssr: true,
  experimental: {
    externalVue: false,
    inlineSSRStyles: true,
  },
  dev: appConfig.isDev,
  devServer: {
    host: appConfig.host,
    port: appConfig.port,
  },
  app: {
    baseURL: appConfig.appBaseURL,
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  modules: [
    ...useNuxtVitest,
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vue-macros/nuxt',
  ],
  imports: {
    dirs: ['./stores'],
  },
  pinia: {
    autoImports: ['defineStore', 'definePiniaStore', 'acceptHMRUpdate'],
  },
  i18n: {
    ...i18nConfig,
  },
  nitro: {
    baseURL: appConfig.appBaseURL,
    devStorage: {
      data: { driver: 'fs', base: './public/data' },
    },
    storage: {
      data: { driver: 'fs', base: './.output/public/data' },
    },
  },
})
