import { defineStore } from 'pinia';
import { UserState } from './types';
export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    firstName: '',
    lastName: '',
    gender: '',
  }),
  getters: {
    fullName(state: UserState) {
      return state.firstName + ' ' + state.lastName;
    },
  },
  actions: {
    setUser(partial: Partial<UserState>) {
      this.$patch(partial);
    },
  },
});
