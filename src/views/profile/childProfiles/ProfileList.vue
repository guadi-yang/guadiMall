<template>
  <div id="list">
      <div class="orderList">
        <div>
        <img src="~assets/img/profile/message.svg" alt="">
        <div>我的消息</div>
        </div>
      <div>
        <img src="~assets/img/profile/pointer.svg" alt="">
        <div>积分商城</div>
      </div>
      <div>
        <img src="~assets/img/profile/vip.svg" alt="">
        <div>会员卡</div>
      </div>
      </div>
      <div class="serviceList">
         <div>
          <img src="~assets/img/profile/cart.svg" alt="">
          <div>我的购物车</div>
        </div>
        <div>
          <img src="~assets/img/profile/shopping.svg" alt="">
          <div>下载购物APP</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
}
</script>

<style type="text/css" scoped>
#list{
  background-color: #fff;
  font-size: 15px;
  color: #333;
}
.orderList > div,.serviceList>div{
    height: 44px;
    line-height: 44px;
    position: relative;
}
img{
  width: 20px;
  height: 20px;
  position: absolute;
  top: 12px;
  left: 10px;
  right: 5px;
}
.orderList{
  margin-top: 10px;
}
.serviceList,.serviceList{
  border-top: 10px solid #eee;
}
.orderList > div > div,.serviceList > div > div{
  margin-left: 40px;
  border-bottom: 1px solid rgba(100, 100, 100, .1);
  padding-left: 5px;
}
</style>
