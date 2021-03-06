import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// import VueParticles from 'vue-particles'
// Vue.use(VueParticles)

const VueInputMask = require('vue-inputmask').default
Vue.use(VueInputMask)

// Global style css
import './style/font.css'
import './style/index.css'




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
