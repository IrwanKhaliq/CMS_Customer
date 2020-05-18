import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store'
import axios from 'axios'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  axios,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
