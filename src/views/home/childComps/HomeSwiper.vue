<template>
  <swiper>
     <swiper-item v-for="(item,index) in banners" :key="index">
       <a :href="item.link">
         <img :src="item.image" alt="" @load="imageLoad">
       </a>
     </swiper-item>
   </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
    components:{
      Swiper,
      SwiperItem
    },
    data(){
      return {
        flag:false
      }
    },
    props:{
      banners:{
        type:Array
      }
    },
    methods:{
      imageLoad(){
        if(!this.flag)
        this.$emit('swiperload')
        this.flag=true
      }
    }
}
</script>

<style type="text/css" scoped>
</style>
