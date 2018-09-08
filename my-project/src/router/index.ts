import Vue from 'vue';
import VueRouter from 'vue-router';

// conatiners
import { AppContainer } from '../components/containers/App/';
import { CounterContainer } from '../components/containers/Counter/';
import { GridContainer } from '../components/containers/Grid/';
// modules
import { Navbar } from '../components/modules/Navbar/';

// ui

// register the plugin
Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      component: AppContainer,
      name: 'index',
      path: '/',
    }, {
      component: CounterContainer,
      name: 'counter',
      path: '/counter',
    }, {
      component: GridContainer,
      name: 'grid',
      path: '/grid',
    },
  ],
});

export default router;
