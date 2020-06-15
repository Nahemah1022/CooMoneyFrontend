import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker'

import { FontAwesomeIcon } from '@/assets/js/fontawesome.js'
import store from './store'
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

if (localStorage.getItem('token')) {
  // router.replace('/Project');
  router.replace('/Home');
} else {
  router.replace('/');
}