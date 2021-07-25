<template>
  <div class="info">
    <div class="info-top">
        <div class="picture">
          <img src="~assets/img/profile/avatar.svg" alt="">
        </div>
      <div class="login">
        <span>登录/注册</span>
        <div>
          <img src="~assets/img/profile/phone.svg" alt="">
          <span>暂无绑定手机号</span>
        </div>
      </div>
      <span class="arrow">
        <img src="~assets/img/common/arrow-left.svg" alt="">
      </span>
    </div> 
  </div>
</template>

<script>
export default {
  
}
</script>

<style type="text/css" scoped>
.info {
    background-color: var(--color-tint);
    padding: 15px;
    margin-top: -5px;
    width: 100vw;
    height: 100px;
    color: #fff;
    font-size: 13px;
    border-top: 1px solid rgba(255,127,0,.2)
  }
  .info-top{
    padding-top: 5px;
  }
  .picture img{
    float: left;
    width: 60px;
    height: 60px;

  }
  .arrow{
    float: right;
  }
  .login{
    float: left;
    margin-left: 5px;
    margin-top: 8px;
  }
  .login > span{
    padding-left: 4px;
  }
  .login div img{
    position: relative;
    top: 3px;
    width: 20px;
    height: 20px;
    margin-top: 1px;
  }
  .arrow img{
    position: relative;
    top: 15px;
    width: 20px;
    height: 20px;
  }
</style>
