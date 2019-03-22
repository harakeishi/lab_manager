import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import AvailabilitySituation from './views/AvailabilitySituation.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/AvailabilitySituation',
      name: 'availabilitySituation',
      component: AvailabilitySituation
    }
  ]
})
