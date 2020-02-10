import Vue from 'vue'
import Index from './index.vue'
import { Popup } from 'vant'
import 'vant/lib/index.css'

Vue.use(Popup)

Vue.config.productionTip = false

new Vue({
  render: h => h(Index),
}).$mount('#app')
