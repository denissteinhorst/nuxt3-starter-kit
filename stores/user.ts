// https://pinia.vuejs.org/core-concepts/

export const useUser = defineStore('user', {
  state: () => ({
    name: 'Max Mustermann',
    dob: new Date('1970-01-01'),
  }),

  getters: {
    fullName(): string {
      return `${this.name}`
    },
    daysOnPlanet(): string {
      return Math.floor((Date.now() - this.dob.getTime()) / 1000 / 60 / 60 / 24).toLocaleString()
    },
    currentAge(): number {
      return Math.floor((Date.now() - this.dob.getTime()) / 1000 / 60 / 60 / 24 / 365)
    }
  },

  actions: {
    changeName(name: string) {
      this.name = name
    },

    changeDateOfBirth(dob: Date) {
      this.dob = dob
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot));
}