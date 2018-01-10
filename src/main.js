import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import Env from './lib/Env'
import './index.less'
window.Env = Env
var attachFastClick = require('fastclick')
attachFastClick.attach(document.body)
start()

function start() {
  Vue.use(VueRouter)
  let router = require('./router').default
  Vue.use(Vuex)
  let store = require('./store').default
  var app = new Vue({
    el: '#root',
    router,
    store,
    ...require('./App').default
  })
  return app
}
