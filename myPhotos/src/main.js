import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import VueToast from 'vue-toast-notification';
import { routes } from './routes';
import VModal from 'vue-js-modal/dist/ssr.nocss'
import 'vue-js-modal/dist/styles.css'
import 'vue-toast-notification/dist/theme-default.css';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/theme/default.css';

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:3000';
Vue.use(VueRouter);
Vue.use(VModal, { dialog: true });
Vue.use(VueToast);

const router = new VueRouter({ 
  routes ,
  mode: 'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
