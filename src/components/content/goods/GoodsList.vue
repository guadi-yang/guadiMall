<template>
  <div class="goods">
    <goods-list-item v-for="(item,index) in goods" :key="index"
    :goods-item="item"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'
export default {
  props:{
    goods:{
      type:Array
    }
  },
  components:{
    GoodsListItem
  }
}
</script>

<style type="text/css" scoped>
.goods{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

</style>
