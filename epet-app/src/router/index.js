import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
import app from '../components/app.vue'

import classification from '../pages/classify/classification.vue'
import brand from '../pages/classify/brand.vue'
import goods from '../pages/classify/goods.vue'
import shoppingcart from '../pages/shpping/shopping.vue'
import mine from '../pages/mine.vue'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
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
      path: '/classification',
      component: classification,
      children:[
        {
          path: '/',
          'redirect':'/classification/goods'
        },
        {
          path: '/classification/goods',
          component: goods,
        },
        {
          path: '/classification/brand',
          component: brand,
        },
      ]
    },
    {
      path: '/shoppingcart',
      component: shoppingcart
    },
    {
      path: '/mine',
      component: mine,
    }

  ]
})
