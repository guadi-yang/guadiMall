<template>
  <div class="doublelook">
  <goods-list-item v-for="(item, index) in show" :key="index" :goodsItem="item" class="abcd"></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from 'components/content/goods/GoodsListItem'
export default {
  props:{
    show:{
      type:Array
    }
  },
  components:{
    GoodsListItem,
  }
}
</script>

<style type="text/css" scoped>
.doublelook{
  display: flex;
  flex-wrap: wrap;
  justify-content:space-between;
}
</style>
