<template>
  <div>
    <div v-if="loading" class="loading change"></div>
    <div v-if='toast' class='toast'>{{toast}}</div>
  </div>
</template>
<style lang="less">
  .loading {
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    border: 5px solid #555;
    border-bottom-color: transparent;
    height: 50px;
    width: 50px;
    background: transparent !important;
    display: inline-block;
    -webkit-animation: rotate 0.75s 0s linear infinite;
    animation: rotate 0.75s 0s linear infinite;
  }
  .toast {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300px;
    line-height: 70px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    color: #fff;
    margin-top: -35px;
    margin-left: -150px;
    text-align: center;
    font-size: 32px;
  }
  @-webkit-keyframes rotate {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg); }
    50% {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg); }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg); } }

  @keyframes rotate {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg); }
    50% {
      -webkit-transform: rotate(180deg);
      transform: rotate(180deg); }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg); } }
</style>
<script>
  export default{
    data(){
      return{
        loading: false,
        toast: ''
      }
    },
    components:{

    },
    created: function () {
      window.appEvent.on('load', ()=>{
        this.loading = true
      })
      window.appEvent.on('loaded', ()=>{
        this.loading = false
      })
      window.appEvent.on('toast', (text)=>{
        this.toast = text
        setTimeout(() => {
          this.toast = ''
        }, 1000)
      })
    }
  }
</script>

