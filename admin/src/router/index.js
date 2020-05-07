import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/Main.vue'),
    children: [{
      path: '/categories/create',
      component: () => import('@/views/CategoriesEdit')
    },
    {
      path: '/categories/list',
      component: () => import('@/views/CategoriesList')
    },
    {
      path: '/categories/edit/:id',
      component: () => import('@/views/CategoriesEdit'),
      props: true
    },
    {
      path: '/items/create',
      component: () => import('@/views/ItemEdit')
    },
    {
      path: '/items/list',
      component: () => import('@/views/ItemList')
    },
    {
      path: '/items/edit/:id',
      component: () => import('@/views/ItemEdit'),
      props: true
    },

    {
      path: '/heroes/create',
      component: () => import('@/views/HeroEdit')
    },
    {
      path: '/heroes/list',
      component: () => import('@/views/HeroList')
    },
    {
      path: '/heroes/edit/:id',
      component: () => import('@/views/HeroEdit'),
      props: true
    }]
  },
]

const router = new VueRouter({
  routes
})

export default router
