import Vue from 'vue'
import Router from 'vue-router'
import Settings from '@/views/settings'
import Events from '@/views/notifications'

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
    }
  ]
})
