<template>
  <div id="home" class="wrapper">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control :titles="['流行','新款','精选']" @tabclick="tabclick" ref="control1" v-show="isFixed" class="tabcontrol"></tab-control>
<scroll class="content" ref="scroll" :probe-type="3" :pull-up-load="true" @scroll="contentscroll" @pullingUp="loadMore">
  <home-swiper :banners="banners.list" class="lunbo" @swiperload="swiperload"></home-swiper>
    <recommend-view :recommends="recommends.list"></recommend-view>
    <feature-view></feature-view>
    <tab-control :titles="['流行','新款','精选']" @tabclick="tabclick" ref="control2"></tab-control>
    <goods-list :goods="showGoods"></goods-list>
</scroll>
    <back-top v-show="isShow" @click.native="backClick"></back-top>
   </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import HomeSwiper from '../home/childComps/HomeSwiper.vue'
  import RecommendView from '../home/childComps/RecommendView.vue'
  import FeatureView from '../home/childComps/FeatureView.vue'
  import TabControl from 'components/content/tabControl/TabControl.vue'
  import GoodsList from 'components/content/goods/GoodsList.vue'
  import Scroll from 'components/common/bscroll/Scroll.vue'
  import BackTop from 'components/content/backtop/BackTop'
  import { getHomeMultidata , getHomeGoods} from "network/home"

  import bus from '@/common/index.js'

  export default {
    name: "Home",
    data(){
    return {
      banners:[],
      recommends:[],
      goods:{
        'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}
      },
      currentType:'pop',
      isShow:false,
      tabOffsetTop:0,
      isFixed:false
    }
  },
    components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },
  mounted(){
      // this.$bus.$on('image',function(){
      //   this.$refs.scroll.refresh();
      //   console.log('---------');
      // })
      // this.tabOffsetTop=this.$refs.control.$el.offsetTop;
      // console.log(this.$refs.control.$el.offsetTop)
    },
  created(){
   this.getHomeMultidata();
   this.getHomeGoods('pop');
   this.getHomeGoods('new');
   this.getHomeGoods('sell');
  },
  methods:{
    getHomeMultidata(){
      getHomeMultidata().then(res=>{
      this.banners=res.data.banner;
      this.recommends = res.data.recommend;
      //console.log(this.recommends)
      })
    },
    
    getHomeGoods(type){
      const page = this.goods[type].page+1;
      getHomeGoods(type,page).then(res=>{
      //console.log(res.data.list);
      this.goods[type].list.push(...res.data.list);
      this.goods[type].page+=1
      this.$refs.scroll.finishPullUp();
    })
    },
    tabclick(index){
      switch(index){
        case 0:
          this.currentType='pop' 
          break;
        case 1:
          this.currentType='new'
          break;
        case 2:
          this.currentType='sell'
          break;
      }
      this.$refs.control1.currentIndex=index
      this.$refs.control2.currentIndex=index
    },
    backClick(){
      this.$refs.scroll.scrollTo(0,0,500)
    },
    contentscroll(position){
      // 回到顶部
      this.isShow=-position.y>1000
      // tabControl吸顶
      this.isFixed=-position.y>this.tabOffsetTop
    },
    loadMore(){
      this.getHomeGoods(this.currentType)
    },
    swiperload(){
      this.tabOffsetTop=this.$refs.control2.$el.offsetTop
    }
}
  }
</script>

<style scoped>
#home{
  height: 100vh;
  position: relative;
  background-color: white;
}
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    /* position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1; */
    /*在使用浏览器原生滚动时, 为了让导航不跟随一起滚动*/
    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }
  /* .lunbo{
    margin-top: 44px;
  } */
  .content{
    /* height: calc(100% - 93px);
    overflow: hidden; */
    /* margin-top: 44px; */
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;

  }
  .tabcontrol{
    position: relative;
    z-index: 5;
  }
</style>