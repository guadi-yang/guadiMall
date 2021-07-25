<template>
  <div class="cart"> 
    <nav-bar class="bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import {mapGetters} from 'vuex'
export default {
  components:{
    NavBar
  },
  data(){
    return {

    }
  },
  computed:{
    ...mapGetters([
      'cartLength'
    ])
  }
}
</script>

<style type="text/css" scoped>
.bar{
  background-color: var(--color-tint);
  color:#fff;
  font-size: 14px;
}
</style>
