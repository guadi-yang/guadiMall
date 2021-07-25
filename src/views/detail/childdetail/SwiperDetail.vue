<template>
  <swiper class="aswiper">
    <swiper-item v-for="(item,index) in lunbotu" :key="index">
      <img :src="item" alt="">
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
  props:{
    lunbotu:{
      type:Array
    }
  }
}
</script>

<style type="text/css" scoped>
.aswiper{
  height:300px
}
</style>
