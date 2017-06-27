import './assets/bootstrap/css/bootstrap.min.css'
import './assets/common/common.scss'
import './assets/font-awesome/css/font-awesome.min.css'
import './assets/jquery-confirm/jquery-confirm.css'
// import './assets/bootstrap/css/hp.min.css'
// import './assets/bootstrap/datepicker/css/datepicker.css'

// import './assets/bootstrap/datepicker/js/bootstrap-datepicker'
import './assets/jquery-validation-1.15.0/dist/jquery.validate.js'
import './assets/jquery-validation-1.15.0/dist/localization/messages_zh.js'
import './assets/jquery-confirm/jquery-confirm.js'


import $ from 'jquery'
import Vue from 'vue';
import store from './vuex/store'
import router from './router/'
import App from './App.vue'

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
