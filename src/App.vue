<template>
  <div>
    <loading></loading>
    <transition>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>
<script>
  import loading from './components/loading.vue'
  export default {
    name: 'app',
    components: {
      loading
    }
  }
</script>
