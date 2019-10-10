import Vue from 'vue'
import App from './App.vue'
import router from './routes/index'
import store from './store/index'

import VueLazyload from 'vue-lazyload'
import '@/common/css/reset.css'
import '@/common/font/iconfont.css'
import '@/common/font/iconfont.js'

Vue.use(VueLazyload)

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')