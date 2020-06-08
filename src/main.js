import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker'

import { FontAwesomeIcon } from '@/assets/js/fontawesome.js'
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

if (localStorage.getItem('token')) {
  router.replace('/Project');
} else {
  router.replace('/');
}
router.replace('/Analysis');