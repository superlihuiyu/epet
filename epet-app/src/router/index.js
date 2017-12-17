import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import app from '../components/app.vue'
import classify from '../components/classify.vue'
import shoppingcart from '../components/shoppingcart.vue'
import mine from '../components/mine.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      'redirect':'/app'
    },
    {
      path: '/app',
      component: app
    },
    {
      path: '/classify',
      component: classify
    },
    {
      path: '/shoppingcart',
      component: shoppingcart
    },
    {
      path: '/mine',
      component: mine
    }

  ]
})
