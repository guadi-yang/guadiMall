<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    recommends:{
      type:Array,
      default(){
        return [];
      }
    }
  }
}
</script>

<style type="text/css" scoped>
  .recommend {
    display: flex;
    text-align: center;
    font-size: 16px;
    margin-top:15px;
    border-bottom: 5px solid #eee;
    padding-bottom: 15px;
  }
  .recommend-item {
    flex: 1;
  }
  .recommend-item img{
    width: 80px;
    height: 80px;
    margin-bottom: 5px;
  }
</style>
