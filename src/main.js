import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import currencyFilter from '@/filters/currency.filter'
import messagePlugin from '@/utils/message.plugin'
import Loader from '@/components/app/Loader'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIvBqpxHCriOpwwtz1QwbUGhtmmdX7eo4",
  authDomain: "vue-crm11.firebaseapp.com",
  databaseURL: "https://vue-crm11.firebaseio.com",
  projectId: "vue-crm11",
  storageBucket: "vue-crm11.appspot.com",
  messagingSenderId: "979095843641",
  appId: "1:979095843641:web:c389ee735ef76b821b2ee8"
}

firebase.initializeApp(firebaseConfig)

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
