import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import { firestorePlugin } from 'vuefire'
import AddQuestion from './views/AddQuestionView.vue'
import Participant from './views/ParticipantView.vue'


Vue.use(VueRouter)
Vue.use(firestorePlugin)
Vue.config.productionTip = false

const routes = [
  { path: '/add', component: AddQuestion },
  { path: '/bar', component: Participant }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
