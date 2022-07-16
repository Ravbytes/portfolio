<template>
  <div>
    <Hero title="About Us" />
    <AboutUs :mores="missions" style="margin-top:50px" :showBtn="false" />
  </div>
</template>

<script>
import AboutUs from '@/components/commons/AboutUs'
import Hero from '@/components/commons/Hero'
import { missions } from '../data/site'
export default {
    name:"AboutCompany",
    components:{
      Hero,
      AboutUs
    },
    data(){
      return {
        missions
      }
    }

}
</script>

<style>

</style>