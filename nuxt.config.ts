// https://nuxt.com/docs/api/configuration/nuxt-config

const config = {
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
  dev: config.isDev,
  devServer: {
    host: config.host,
    port: config.port,
  },
  app: {
    baseURL: config.appBaseURL,
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    },
  },
  modules: ['@pinia/nuxt', '@pinia-plugin-persistedstate/nuxt', 'nuxt-vitest', '@vue-macros/nuxt'],
  imports: {
    dirs: ['./stores'],
  },
  pinia: {
    autoImports: 
      ['defineStore', 'definePiniaStore', 'acceptHMRUpdate']

  },
  nitro: {
    baseURL: config.appBaseURL,
    devStorage: {
      data: { driver: 'fs', base: './public/data' },
    },
    storage: {
      data: { driver: 'fs', base: './.output/public/data' },
    }
  },
})
