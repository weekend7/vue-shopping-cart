import Vue from 'vue';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/css/base.css';
import './assets/css/index.css';


Vue.use(VueAxios, axios);
// 提示开关
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
