<template>
  <div>
    <img src="~assets/img/cart/tick.svg" alt=""  class="checkbutton" :class="{active : isChecked}">
  </div>
</template>

<script>
export default {
  props:{
    isChecked:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style type="text/css" scoped>
.checkbutton{
  border:2px solid red;
  border-radius: 50%;
}
.active{
  background-color: red;
  border-color: red;
}
</style>
