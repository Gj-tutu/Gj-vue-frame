<template>
  <div class='home'>home</div>
</template>
<script>
const option = {
  title: ''
}
export default{
  beforeRouteEnter (to, from, next) {
    routeEnter(to, from, next, option)
  },
  data: function() {
    return {}
  },
  computed : {},
  components: {},
  created: function () {

  },
  methods: {
  }
}
</script>
<style lang="less">
@import './home';
</style>
