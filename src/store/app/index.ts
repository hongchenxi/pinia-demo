import { defineStore } from 'pinia';
export const useAppStore = defineStore('app', {
  state: () => ({
    theme: 'light',
  }),
  actions: {
    switchTheme() {
      this.theme = 'dark';
    },
  },
});
