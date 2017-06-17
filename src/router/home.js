/**
 * Created by gaojun on 17-2-19.
 */
export default {
  path: '/',
  component: function(resolve) {
    require(['../components/home.vue'], resolve)
  }
}