<template>
  <div id="app">
    <Header />
      <router-view :detail="siteData.detail" :featuredServices="siteData.featuredServices" :services="siteData.services" />
      <Footer :detail="siteData.detail" />
  </div>
</template>
<script>
import Header from '@/components/commons/Header.vue'
import Footer from '@/components/commons/Footer.vue'
import * as siteData from './data/site'

export default {
  name: "App",
  components:{
    Header,
    Footer
  },
  data(){
    return{
      siteData
    }
  }
}
</script>
<style lang="scss">
body{
    margin: 0;
    font-family: var(--bs-font-sans-serif);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
</style>