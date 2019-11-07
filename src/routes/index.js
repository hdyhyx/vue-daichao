import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '../store'
import {
  getToken,
  setToken
} from '@/common/utils/cookie'
import {
  Toast
} from 'vant'
Vue.use(Router).use(Toast)
const router = new Router({
  mode: 'hash',
  routes: routes
})

router.beforeEach(async (to, from, next) => {
  if (to.path === '/my') {
    if (getToken()) {
      await store.dispatch('handleUserInfo').then(res => {
        const {
          data: {
            code
          }
        } = res
        if (code !== '200') {
          setToken('')
          store.commit('setUserInfo', '')
        }
      })
    }
    next()
  } else if (to.path === '/historyPage' || to.path === '/setting' || to.path === '/feedback') {
    if (getToken()) {
      next()
    } else {
      Toast('请登录')
    }
  } else {
    next()
  }
})
export default router
