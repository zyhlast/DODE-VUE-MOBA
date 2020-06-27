import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: { isPublic: true }
  },
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
    },

    {
      path: '/articles/create',
      component: () => import('@/views/ArticlesEdit')
    },
    {
      path: '/articles/list',
      component: () => import('@/views/ArticlesList')
    },
    {
      path: '/articles/edit/:id',
      component: () => import('@/views/ArticlesEdit'),
      props: true
    },

    {
      path: '/ads/create',
      component: () => import('@/views/AdEdit')
    },
    {
      path: '/ads/list',
      component: () => import('@/views/AdList')
    },
    {
      path: '/ads/edit/:id',
      component: () => import('@/views/AdEdit'),
      props: true
    },

    {
      path: '/admin_users/create',
      component: () => import('@/views/AdminUserEdit')
    },
    {
      path: '/admin_users/list',
      component: () => import('@/views/AdminUserList')
    },
    {
      path: '/admin_users/edit/:id',
      component: () => import('@/views/AdminUserEdit'),
      props: true
    }]
  },
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !sessionStorage.token) {
    return next('/login')
  }
  next()
})
export default router
