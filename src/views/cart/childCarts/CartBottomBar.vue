<template>
  <div class="cartbottom">
    <div class="a" @click="cliclall">
      <check-button class="checkbutton a1" ref="btnc" :is-checked="checkedAll" ></check-button>
      <span class="a1">全选</span>
    </div>
    <span class="total-price">合计: ¥{{ totalPrice}}</span>
    <div class="b">
      <span class="calculate">去计算({{AllNumber}})</span>
    </div>
  </div>
</template>

<script>
import CheckButton from 'components/content/checkbutton/CheckButton'
export default {
  components:{
    CheckButton,
  },
  computed:{
    totalPrice(){
      return this.$store.state.cartList.filter(item=> item.checked==true).reduce((a,b) => { return a + b.price * b.count },0).toFixed(2)
    },
    AllNumber(){
      return this.$store.state.cartList.filter(item=> item.checked==true).length
    },
    checkedAll(){
      return this.$store.state.cartList.every(item => item.checked)
    }
  },
  methods:{
      cliclall(){
      console.log('---')
      // for(let i = 0;i<this.$store.state.cartList.length;i++){
      //   if(this.$store.state.cartList[i].checked==false){
      //     this.$store.state.cartList[i].checked=true;
      //   }
      // }
      // this.$refs.btnc.isChecked=true
      this.$store.commit('quanxuan',this.checkedAll);
    }
  }
}
</script>

<style type="text/css" scoped>
.cartbottom{
    width: 100%;
    height: 44px;
    background-color: #eee;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    box-sizing: border-box;
    position: relative;
}
.a{
  display: flex;
  width: 20%;
}
.a span{
  padding-left: 37px;
  line-height: 40px;
}
.checkbutton {
  width: 0;
  height: 0;
  border-color: #eee;
  line-height: 45px;
  padding-left: 10px;
}
.cartbottom span{
  position: absolute;
}
.total-price{
  top: 12px;
  left: 82px;
  font-size: 14px;
}
.b{
  float: right;
  width: 85px;
  height: 100%;
  background-color: var(--color-tint);
  margin-top: -4px;
}
.calculate{
  /* right: 5px;
  top: 10px;
  font-size: 14px; */
  text-align: center;
  color: #fff;
  padding-left: 10px;
  padding-top: 10px;
}
</style>
