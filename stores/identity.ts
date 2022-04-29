import { defineStore } from 'pinia'

export interface IIdentityState {
  firstName: string
  lastName: string
}

export const useIdentity = defineStore('identity', {
  state: (): IIdentityState => ({
    firstName: 'Oscar',
    lastName: 'Bahamonde',
  }),
  actions: {
    setFirstName(firstName: string) {
      this.firstName = firstName
    },
    setLastName(lastName: string) {
      this.lastName = lastName
    },
    reset() {
      this.firstName = 'Oscar'
      this.lastName = 'Bahamonde'
    },
  },
  getters: {
    fullName() {
      return `${this.firstName} ${this.lastName}`
    },
  },
})
