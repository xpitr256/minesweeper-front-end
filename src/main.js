import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import './assets/app.scss'
import vueResource from 'vue-resource'

Vue.config.productionTip = false;
Vue.use(vueResource);

new Vue({
  render: h => h(App),
}).$mount('#app');
