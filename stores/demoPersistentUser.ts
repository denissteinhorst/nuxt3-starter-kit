/* eslint-disable @typescript-eslint/no-unused-expressions */
// https://pinia.vuejs.org/core-concepts/

export const useDemoPersistentUser = defineStore('demoPersistentUser', {
  state: () => {
    return {
      name: 'Change me',
      dob: new Date('1970-01-01T00:00:00.000Z'),
    }
  },

  getters: {
    pFullName(): string {
      return `${this.name}`
    },
    pDaysOnPlanet(): string {
      // eslint-disable-next-line no-unused-expressions
      typeof this.dob === 'string'
        ? useDemoPersistentUser().pChangeDateOfBirth(new Date(this.dob))
        : ''
      return Math.floor(
        (Date.now() - this.dob.getTime()) / 1000 / 60 / 60 / 24
      ).toLocaleString()
    },
    pCurrentAge(): number {
      // eslint-disable-next-line no-unused-expressions
      typeof this.dob === 'string'
        ? useDemoPersistentUser().pChangeDateOfBirth(new Date(this.dob))
        : ''
      return Math.floor(
        (Date.now() - this.dob.getTime()) / 1000 / 60 / 60 / 24 / 365
      )
    },
    pResetStore(): any {
      useDemoPersistentUser().$reset()
    },
  },

  actions: {
    pChangeName(name: string) {
      this.name = name
    },
    pChangeDateOfBirth(dob: Date) {
      this.dob = dob
    },
  },

  /**
   * Persist the store in cookie
   *  could also be `localStorage` or `sessionStorage`
   *  check the docs for more info:
   *  https://prazdevs.github.io/pinia-plugin-persistedstate/frameworks/nuxt-3.html
   */

  persist: {
    storage: persistedState.cookiesWithOptions({
      // https://nuxt.com/docs/api/composables/use-cookie#options
      sameSite: 'strict',
    }),
  },
})

if (import.meta.hot != null) {
  import.meta.hot.accept(
    acceptHMRUpdate(useDemoPersistentUser, import.meta.hot)
  )
}
