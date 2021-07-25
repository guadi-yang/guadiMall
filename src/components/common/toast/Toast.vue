<template>
  <div class="toast" v-show="show">
    {{message}}
  </div>
</template>

<script>
export default {
  props:{
    message:{
      type:String
    },
    show:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style type="text/css" scoped>
.toast{
  width: 80%;
  height: 30px;
  position: fixed;
  text-align: center;
  line-height: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  color:white;
  background-color: var(--color-tint);
  padding: 5px 10px;
  border-radius: 15px;
}
</style>
