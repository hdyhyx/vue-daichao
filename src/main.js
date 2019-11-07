import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'
import store from './store/index'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import '@/common/css/reset.css'
import '@/common/font/iconfont.css'
import '@/common/font/iconfont.js'
require('@/mock/index.js')

fastclick.attach(document.body);
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: require('@/common/images/loading.gif'),
  attempt: 1
})

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
