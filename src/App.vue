<template>
  <div class="app">
    <transition>
        <router-view></router-view>
    </transition>
    <loading v-model="isLoading"></loading>
  </div>
</template>
<script>
  import { Loading } from 'vux'
  import { mapState } from 'vuex'
  import {toast, load, loaded} from './lib/Events'
  export default {
    name: 'app',
    data: function () {
      return {
        isLoading: false,
        loadNum: 0,
        direction: "forward"
      }
    },
    components: {
      Loading
    },
    computed: {
      showTabBar() {
        return this.$route.path == '/enquiry' || this.$route.path == '/quote';
      }
    },
    methods: {
      load() {
        this.loadNum = this.loadNum + 1;
        this.isLoading = true;
      },
      loaded() {
        this.loadNum = this.loadNum - 1;
        if (this.loadNum <= 0) {
          this.loadNum = 0;
          this.isLoading = false;
        }
      }
    },
    created: function(){
      let self = this
      window.appEvent.on('load', ()=>{
        this.load();
      })
      window.appEvent.on('loaded', ()=>{
        this.loaded();
      })
      window.appEvent.on('toast', (text)=>{
        console.log("toast")
        self.$vux.toast.show({
          text,
          type: 'text',
          position: 'middle'
        })
        setTimeout(() => {
          self.$vux.toast.hide()
        }, 2000)
      })
      window.appEvent.on('fail', (text) => {
        self.$vux.toast.show({
          text,
          type: 'warn',
          position: 'middle'
        })
        setTimeout(() => {
          self.$vux.toast.hide()
        }, 2000)
      })
      window.appEvent.on('success', (text) => {
        self.$vux.toast.show({
          text,
          type: 'success',
          position: 'middle'
        })
        setTimeout(() => {
          self.$vux.toast.hide()
        }, 2000)
      })
      window.appEvent.on('offline', (text) => {
        self.$vux.toast.show({
          text,
          type: 'cancel',
          position: 'middle'
        })
        setTimeout(() => {
          self.$vux.toast.hide()
        }, 2000)
      })
      window.appEvent.on('linkTo', (url) => {
        this.$router.push(url);
      })
    }
  }
</script>
<style lang="less">
  .app{
    .weui-loading_toast {
      z-index: 999;
      overflow: hidden;
    }
    .weui-toast{
      z-index: 999;
    }
    .notice {
      position: fixed;
      height: 50px;
      opacity: 0.7;
      color: #fff;
      width: 100%;
      top: 0;
      font-size: 16px;
      line-height: 50px;
      text-align: center;
      z-index: 1100;
    }
    .notice.toast {
      background: #000;
    }
    .notice.fail {
      background: #E34A4F;
    }
    .weui-tabbar {
      height: 50px;
      overflow: hidden;
      text-decoration : none;
      .weui-tabbar__label {
        font-size: 14px;
        display: inline-block;
        line-height: 50px;
      }
      .weui-tabbar__icon {
        width: 18px;
        height: 18px;
        display: inline-block;
        line-height: 50px;
        top: 5px;
        margin-right: 5px;
      }
      .weui-tabbar__item {
        padding: 0;
      }
    }
  }
  .vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
  .vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
