import Vue from 'vue';
import App from './App.vue';
import '@/directives';

Vue.config.productionTip = false;
Vue.config.performance = true;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
