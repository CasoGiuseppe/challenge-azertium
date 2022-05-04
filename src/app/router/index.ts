import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: {},

      beforeEnter: async (to, from, next) => {
        // await doctorsServices.getAllDoctors()
        next();
      },
    }
  ]
})

export default router
