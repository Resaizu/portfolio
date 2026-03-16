import { createMemoryHistory, createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '@/views/Home.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 80,
        behavior: 'smooth'
      }
    }
  }
});
