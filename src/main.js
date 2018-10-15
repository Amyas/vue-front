import Vue from 'vue'
import {sync} from 'vuex-router-sync'
import App from './App.vue'
import router from './router'
import store from './store'

import 'normalize.css'
import 'nprogress/nprogress.css'
import 'highlight.js/styles/atom-one-dark.css'

Vue.config.productionTip = false

sync(store, router)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
