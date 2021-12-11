import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import store from '@/store'
import Home from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: () => import('@/views/About.vue')
  },
  {
    path: '/me',
    component: () => import('@/views/Me.vue'),
    beforeEnter: (from, to, next) => {
      store.getters.authUser ? next() : router.push({ path: '/login' })
    }
  },
  {
    path: '/quotes',
    component: () => import('@/views/quotes/Index.vue')
  },
  {
    path: '/quotes/add',
    component: () => import('@/views/quotes/Add.vue'),
    beforeEnter: (from, to, next) => {
      store.getters.authUser ? next() : router.push({ path: '/login' })
    }
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
