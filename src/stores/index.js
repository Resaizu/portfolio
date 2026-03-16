import { defineStore } from 'pinia';

export const useIndexStore = defineStore('indexStore', {
  state: () => ({
    active_section: 'hero',
  }),
  actions: {
    set_active_section (section) {
      this.active_section = section;
    },
  },
  getters: {
    get_state: (state) => (state_name) => state[state_name]
  },
});