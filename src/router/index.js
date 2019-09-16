import Vue from 'vue'
import Router from 'vue-router'
import Settings from '@/views/settings'
import Events from '@/views/notifications'
import Details from '@/views/detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'notifications',
      component: Events
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/details/:id',
      name: 'details',
      component: Details
    }
  ]
})
