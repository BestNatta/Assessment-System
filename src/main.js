import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import 'semantic-ui-css/semantic.css';
import router from './Router'
import VueSimpleAlert from "vue-simple-alert";

// bootstrap vue

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

new Vue({
  render: h => h(App),
  router,
  VueSimpleAlert,
}).$mount('#app')
