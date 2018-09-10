import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import router from './router';
import store from './store/index';

// import styles
import './styles/main.scss';

sync(store, router);

new Vue({
  el: '#app-main',
  store,
  router: router,
});
