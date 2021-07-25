<template>
  <div class="cartlist">
    <scroll class="content">
      <cart-list-item v-for="(item,index) in cartList" :key="index" :itemInfo="item">
      </cart-list-item>
      <!-- <div v-for="(item,index) in cartList" :key="index">
        {{item}}
      </div> -->
    </scroll>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import Scroll from 'components/common/bscroll/Scroll.vue'
import CartListItem from './CartListItem.vue'
export default {
  components:{
    Scroll,
    CartListItem
  },
  data(){
    return {
      
    }
  },
  computed:{
    ...mapGetters([
      'cartList'
    ])
  }
}
</script>

<style type="text/css" scoped>
.cartlist{
  height: calc(100vh - 44px - 49px - 40px);
}
.content{
  height: 100%;
  overflow: hidden;
}
</style>
