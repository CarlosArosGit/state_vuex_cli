import { createRouter, createWebHistory } from 'vue-router'
import PopView from '../views/PopView.vue'
import RapView from '../views/RapView.vue'
import RockView from '../views/RockView.vue'
import NotFoundComponent from '../components/NotFoundComponent.vue'
import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pop',
    name: 'pop',
    component: PopView
  },
  {
    path: '/rock',
    name: 'rock',
    component: RockView
  },
  {
    path: '/rap',
    name: 'rap',
    component: RapView
  },
  {
    path: '/:catchAll(.*)',
    name: 'notfound',
    component: NotFoundComponent
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
