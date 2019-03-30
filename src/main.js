import Vue from 'vue';
import App from './App';
import router from './router';

import "./styles/reset.less";

import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.use(iView);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
