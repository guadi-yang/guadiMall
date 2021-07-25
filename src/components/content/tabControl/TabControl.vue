<template>
  <div class="tab-control">
    <div v-for="(item,index) in titles" :key="index" class="tab-control-item" :class="{active:currentIndex==index}" @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      currentIndex:0
    }
  },
  props:{
    titles:{
      type:Array
    }
  },
  methods:{
    itemClick(index){
      console.log(index)
      this.currentIndex=index;
      this.$emit('tabclick',index)
    }
  }
}
</script>

<style type="text/css" scoped>
  .tab-control{
    display: flex;
    background-color: #fff;
  }
  .tab-control-item{
    flex:1;
    text-align: center;
    background-color: white;
    font-size: 16px;
    height: 40px;
    line-height: 40px;
  }
  .active{
    color:var(--color-high-text);
  }
  .active span{
    border-bottom:4px solid var(--color-tint);
    padding: 3px;
  }
</style>
