<template>
<scroll id="scroll" ref="scroll">
  <div id="content">
      <div class="item" v-for="(item, index) in categoryData.list" :key="index">
        <a :href="item.link">
          <img class="item-img" :src="item.image" alt="" @load="imageLoad">
          <div class="item-text">{{item.title}}</div>
        </a>
      </div>
  </div>
  <tab-control :titles="['综合','新品','销量']" class="control" @tabclick="tabclick"></tab-control>
  <category-detail :show="show"></category-detail>
</scroll>
</template>

<script>
  import Scroll from 'components/common/bscroll/Scroll.vue'
  import TabControl from 'components/content/tabControl/TabControl.vue'
  import CategoryDetail from './CategoryDetail.vue'
  
export default {

  components:{
    Scroll,
    TabControl,
    CategoryDetail,
  },
  props:{
    categoryData:{
      type:Object
    },
    show:{
      type:Array
    }
},
methods:{
  imageLoad(){
    this.$refs.scroll.refresh();
    //console.log('--')
    //console.log(this.categoryData);
  },
  tabclick(index){ 
      switch(index){
        case 0:
          this.$emit('changep','pop' )
          break;
        case 1:
          this.$emit('changep','new' )
          break;
        case 2:
          this.$emit('changep','sell' )
          break;
      }
    },
}
}
</script>

<style type="text/css" scoped>
#scroll{
  
  height: 100%;
  width: 260px;

  overflow: hidden;
}
  #content{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    width: 100%
  }
  a{
    width: 100%;
    text-align: center;
    font-size: 12px;
    
  }
  .item{
    
    margin: 5px;
  }
  a > img {
    width: 100px;
  }

</style>