<template>
  <div>
    <cart-nav-bar></cart-nav-bar>
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
  import CartNavBar from './childCarts/CartNavBar.vue'
  import CartList from './childCarts/CartList.vue'
  import CartBottomBar from './childCarts/CartBottomBar.vue'
  export default {
    name: "Cart",
    components:{
      CartNavBar,
      CartList,
      CartBottomBar,
    }
  }
</script>

<style scoped>

</style>
