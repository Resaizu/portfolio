import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router';

import { useIndexStore } from '@/stores';
import HomeView from '@/views/Home.vue';
import Project from '@/views/Project.vue';
import NotFound from '@/views/NotFound.vue';

const routes = [
  { path: '/', component: HomeView, meta: { name: 'home' } },
  { path: '/project/:slug', component: Project, meta: { name: 'project' } },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const isHash = (import.meta.env.VITE_ROUTER_HISTORY || 'history') === 'hash';

export const router = createRouter({
  history: isHash
    ? createWebHashHistory(import.meta.env.BASE_URL)
    : createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 80,
        behavior: 'smooth',
      };
    }
    return { top: 0 }
  },
  linkActiveClass: '',
  linkExactActiveClass: '',
});

router.beforeEach((to, from) => {
  const store = useIndexStore();

  store.set_active_section('hero')
})