import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

if (localStorage.getItem('token')) {
  router.replace('/Project');
}
else {
  router.replace('/');
}

