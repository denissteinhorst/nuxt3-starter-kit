// https://nuxt.com/docs/api/configuration/nuxt-config

const useNuxtVitest =
  process.env.VITE_TEST_ENV === 'true' ? ['nuxt-vitest'] : []

const appConfig = {
  env: process.env.APP_ENV ?? 'development',
  port: (process.env.APP_PORT ?? 3000) as number,
  host: process.env.APP_HOST ?? 'localhost',
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
    '@vue-macros/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  imports: {
    dirs: ['./stores'],
  },
  vueuse: {
    ssrHandlers: true,
  },
  components: true,
  pinia: {
    autoImports: ['defineStore', 'definePiniaStore', 'acceptHMRUpdate'],
  },
  i18n: {
    langDir: 'locales/',
    strategy: 'prefix',
    locales: [
      {
        code: 'de-DE',
        iso: 'de-DE',
        name: 'Deutsch',
        file: 'de-DE.json',
      },
      {
        code: 'en-US',
        iso: 'en-US',
        name: 'English (US)',
        file: 'en-US.json',
      },
      {
        code: 'fr-FR',
        iso: 'fr-FR',
        name: 'Français',
        file: 'fr-FR.json',
      },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
    },
    vueI18nLoader: true,
    defaultLocale: 'en-US',
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
