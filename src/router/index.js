import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)



const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import( '../views/Login.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue'),
    children: [
      {
        path: '/about/course/:name',
        name: 'detail',
        component: () => import( '../views/Detail.vue'),
      }
    ],
    meta:{
      auto: true
    },
    // beforeEnter(to,from, next) {
    //     //是否登录
    //     if(window.isLogin){
    //       next()
    //     }else{
    //       next('/login?redirect='+to.fullPath)
    //     }
    // }
  },
  {
    path: '*',
    component: () => import( '../views/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from, next) => {
    if(to.meta.auto){
      //是否登录
      if(window.isLogin){
        next()
      }else{
        next('/login?redirect='+to.fullPath)
      }
    }else{
      next()
    }
})

export default router
