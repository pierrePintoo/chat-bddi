import Vue from 'vue'
import VueRouter from 'vue-router'
import Chat from '../views/Chat.vue'
import Login from '../views/Login.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Chat',
    component: Chat,
    meta: {
      requiresAuth : true 
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
    // route level code-splitting 
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/logout',
    beforeEnter() { // Avant d'entré dans /logout, on lance la fonction logout 
      store.logout()
    }
  }  
]



const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => {
    return record.meta.requiresAuth
  })
  if (requiresAuth && !store.$data.isRegistered) {
    next('/login')
  } else {
    next()
  }
})

export default router
