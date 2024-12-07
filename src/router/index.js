import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '@/views/WelcomeView.vue'
import PracticeView from '@/views/PracticeView.vue'
import Review from '@/views/Review.vue'
import PaperView from '@/views/PaperView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => WelcomeView,
    },

    {
      path: '/practice',
      component: () => PracticeView,
    },

    {
      path: '/review',
      component: () => Review,
    },

    {
      path: '/paper',
      component: () => PaperView,
    }

  ],
})

export default router
