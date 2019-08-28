// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Buefy from 'buefy'
import VueMoment from 'vue-moment'
import moment from 'moment'
import 'buefy/dist/buefy.css'
import '@/assets/style.variables.css'
import '@mdi/font/css/materialdesignicons.min.css'
import App from './App'
import router from './router'

moment.locale('ru')

Vue.config.productionTip = false
Vue.use(Buefy)
Vue.use(VueMoment, {
  moment
})

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
