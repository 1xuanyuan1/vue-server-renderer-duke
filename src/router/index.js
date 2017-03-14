import Vue from 'vue'
import VueRouter from 'vue-router'
import Meta from 'vue-meta'
// import cookies from 'js-cookie'

// import {inBrowser} from '../utils'

import Hello from 'components/Hello.vue'

Vue.use(VueRouter)
Vue.use(Meta)

const scrollBehavior = to => {
  const position = {}
  if (to.hash) {
    position.selector = to.hash
  }
  if (to.matched.some(asm => asm.meta.scrollToTop)) {
    position.x = 0
    position.y = 0
  }
  return position
}

// const guardRoute = (to, from, next) => {
//   var token = cookies.get('user') || !inBrowser
//   if (!token) {
//     next('/')
//   } else {
//     next()
//   }
// }

const router = new VueRouter({
  mode: 'history',
  // base: __dirname,
  scrollBehavior,
  routes: [
    { name: 'index', path: '/', component: Hello },
    { name: 'Home', path: '/home', component: Hello },
    { path: '*', redirect: '/home' }
  ]
})

export default router
