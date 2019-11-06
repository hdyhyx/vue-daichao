import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '../store'
import {
  getToken
} from '@/common/utils/cookie'
Vue.use(Router)
const router = new Router({
  mode: 'hash',
  routes: routes
})

router.beforeEach(async (to, from, next) => {
  console.log(to.path)
  if (to.path === '/home') {
    if (getToken) {
      store.dispatch('handleUserInfo').then(res => {
        console.log(11)
      })
    }
  }
  next()
})
export default router
