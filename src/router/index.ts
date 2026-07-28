import { createRouter, createWebHistory } from 'vue-router'
import CatalogLayout from '@/layouts/CatalogLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: CatalogLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('@/views/HomeView.vue'),
          meta: { title: 'Home' },
        },
        {
          path: 'category/:id',
          name: 'category',
          component: () => import('@/views/CategoryView.vue'),
          meta: { title: 'Category' },
        },
        {
          path: 'playground',
          name: 'playground',
          component: () => import('@/views/PlaygroundView.vue'),
          meta: { title: 'Playground' },
        },
      ],
    },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 96,
      }
    }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const pageTitle = typeof to.meta.title === 'string' ? to.meta.title : 'Catalog'
  document.title = `${pageTitle} · rezo Studio`
})

export default router
