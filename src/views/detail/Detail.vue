<template>
  <div id="detail">
    <detail-nav-bar class="detailNavBar" @navitemclick="navitemclick" ref="detailcolor"></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="scroll" :probeType="3">
      <swiper-detail :lunbotu="lunbotu"></swiper-detail>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageload="imageload"></detail-goods-info>
      <detail-param-info :param-info="paramInfo" ref="param"></detail-param-info>
      <detail-comment-info :comment="comment" ref="comment"></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <back-top v-show="isShow" @click.native="backClick"></back-top>
    <detail-bottom-bar @cartclick="cartclick"></detail-bottom-bar>
    <toast :message="message" :show="show"></toast>
  </div>
</template>

<script>
import DetailNavBar from './childdetail/DetailNavBar.vue'
import SwiperDetail from './childdetail/SwiperDetail.vue'
import DetailBaseInfo from './childdetail/DetailBaseInfo.vue'
import DetailShopInfo from './childdetail/DetailShopInfo.vue'
import DetailGoodsInfo from './childdetail/DetailGoodsInfo.vue'
import DetailParamInfo from './childdetail/DetailParamInfo.vue'
import DetailCommentInfo from './childdetail/DetailCommentInfo.vue'
import GoodsList from 'components/content/goods/GoodsList.vue'
import DetailBottomBar from'./childdetail/DetailBottomBar.vue'
import Toast from 'components/common/toast/Toast.vue'
import {getDetail,Goods,Shop,GoodsParam,getRecommend} from 'network/detail'
import Scroll from 'components/common/bscroll/Scroll.vue'

import {mixinbacktop} from 'common/mixin.js'
import {mapActions} from 'vuex'
export default {
  name:"Detail",
  components:{
    DetailNavBar,
    SwiperDetail,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    GoodsList,
    DetailBottomBar,
    Toast
  },
  data(){
    return {
      iid:null,
      lunbotu:[],
      goods:{},
      shop:{},
      detailInfo:{},
      paramInfo:{},
      comment:{},
      recommends:[],
      navitemY:[],
      currentIndex:0,
      message:null,
      show:null,
    }
  },
  created(){
    this.iid=this.$route.params.iid
    getDetail(this.iid).then(res=>{
      const data = res.result;
      //console.log(res)
      this.lunbotu = res.result.itemInfo.topImages
      this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services)
      this.shop = new Shop(data.shopInfo);
      this.detailInfo=data.detailInfo
      this.paramInfo= new GoodsParam(data.itemParams.info,data.itemParams.rule);
      if(data.rate.cRate!=0){
        this.comment=data.rate.list[0]
      }
      
    })
    getRecommend().then(res=>{
      console.log(res);
      this.recommends=res.data.list
    })
  },
  mixins:[mixinbacktop],
  updated(){
    
  },
  methods:{
    ...mapActions([
      'addCart'
    ]),
    imageload(){
      this.$refs.scroll.refresh();
      this.navitemY=[]
      this.navitemY.push(0)
      this.navitemY.push(this.$refs.param.$el.offsetTop - 43 )
      this.navitemY.push(this.$refs.comment.$el.offsetTop - 43 )
      this.navitemY.push(this.$refs.recommend.$el.offsetTop - 43)
      console.log(this.navitemY)
    },
    navitemclick(index){
      //console.log(index)

      this.$refs.scroll.scrollTo(0,-this.navitemY[index],0)
    },
    scroll(position){
      //console.log(position)
      const y = -position.y
      let length = this.navitemY.length
      for(let i=0;i<length;i++){
        if((i<length-1 && y>=this.navitemY[i] && y<this.navitemY[i+1]) || (i==length-1 && y>=this.navitemY[i])){
          this.currentIndex=i;
          console.log(i)
          this.$refs.detailcolor.currentIndex=this.currentIndex
        }
      }
      this.isShow=-position.y>1000
    },
    cartclick(){
      console.log('---')
      const product={}
      product.price=this.goods.realPrice;
      product.image=this.lunbotu[0];
      product.desc=this.goods.desc;
      product.title=this.goods.title;
      product.iid=this.iid;
      //console.log(product)
      //this.$store.commit('addCart',product)
      // this.$store.dispatch('addCart',product).then(res=>{
      //   console.log(res)
      // })
      this.addCart(product).then(res=>{
        console.log(res)
        this.message=res;
        this.show=true;
        setTimeout(()=>{
          this.show=false
        },1000)
      })
    },
  }
}
</script>

<style type="text/css" scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;;
  height:100vh
}
.detailNavBar{
  position: relative;
  z-index: 99;
  background-color: #fff;
}
.content{
  height: calc(100% - 44px - 49px);
}
</style>
