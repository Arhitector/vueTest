import Vue from 'vue';
import VueRouter from 'vue-router';

// conatiners
import { GridContainer } from '../components/containers/Grid/';

// register the plugin
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      component: GridContainer,
      name: 'index',
      path: '/',
    },
  ],
});

export default router;
