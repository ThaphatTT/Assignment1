import {createRouter, createWebHistory} from 'vue-router'

import Signin from '@/views/Signin.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import Signup from '@/views/Signup.vue'
import Dashboard from '@/views/Dashboard.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {
      path: '/signin',
      name: 'sign-in',
      component:Signin
    },
    {
      path: '/signup',
      name: 'sign-up',
      component:Signup
    },
    {
      path: '/dashboard-default',
      name: 'dashboard-default',
      component: Dashboard
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component:NotFoundView
    },
]
})
export default router