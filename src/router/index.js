import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import HomeView from '@/views/Home.vue';
import Project from '@/views/Project.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/project/:slug', component: Project },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const isHash = (import.meta.env.VITE_ROUTER_HISTORY || 'history') === 'hash';

export const router = createRouter({
  history: isHash
    ? createWebHashHistory(import.meta.env.BASE_URL)
    : createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 80,
        behavior: 'smooth',
      };
    }
  },
});
