<template>
  <div class="not-found">404</div>
</template>
<script>
import { routeEnter } from '../../../lib/tools'
const option = {
  title: '404'
}
export default{
  beforeRouteEnter (to, from, next) {
    routeEnter(to, from, next, option)
  },
  components: {
  }
}
</script>
<style lang="less">
@import './404';
</style>
