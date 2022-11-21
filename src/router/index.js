import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "SignUp" */ '../views/SignUp.vue')
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: () => import(/* webpackChunkName: "SignIn" */ '../views/SignIn.vue')
  },
  {
    path: '/dashboard',
    name: 'DashBoard',
    component:() => import('../views/DashBoard')
    
  }
  
   
]

const router = new VueRouter({
  routes
})

export default router
