import VueRouter from 'vue-router'
import notFound from './404'
import home from './home'
let routes = [notFound, home]
routes = [...routes, {
  path: '*',
  redirect: '/404'
}]
export default new VueRouter({
  routes,
  scrollBehavior: function (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  mode: 'history'
})
