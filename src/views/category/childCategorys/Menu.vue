<template>
  <scroll id="scrollMenu">
    <div class="menu">
      <div v-for="(item,index) in categories" 
            :key="index" class="menu-item" 
            @click="itemClick(index)" 
            :class="{active:currentIndex==index}">
        {{item.title}}
      </div>
  </div>
  </scroll>
</template>

<script>
  import Scroll from 'components/common/bscroll/Scroll.vue'
export default {
  components:{
    Scroll
  },
  props:{
    categories:{
      type:Array
    }
  },
  data(){
    return {
      currentIndex:0
    }
  },
  methods:{
    itemClick(index){
      this.currentIndex=index
      this.$emit('menuclick',index)
    }
  }
}
</script>

<style type="text/css" scoped>
#scrollMenu{
  background-color: #f6f6f6;
  height: 100%;
  width: 100px;
  box-sizing: border-box;
  overflow: hidden;
}
.menu .menu-item{
  height: 45px;
  text-align: center;
  line-height: 45px;
  font-size: 14px;
}

.active{
  color: var(--color-high-text);
  font-weight: 700;
  border-left: 2px solid var(--color-high-text);
  background-color: #fff;
}
</style>
