<template>
<div id="profile">
  <nav-bar class="myProfile"><div slot="center">我的档案</div></nav-bar>
  <profile-info></profile-info>
      <div class="flexa">
          <div class="account-item">
          <div class="number">
            <span class="balance">0.00</span>元
          </div>
          <div class="account-info">我的余额</div>
        </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>个
        </div>
        <div class="account-info">我的优惠</div>
      </div>
      <div class="account-item">
        <div class="number">
          <span class="balance">0</span>分
        </div>
        <div class="account-info">我的积分</div>
        </div>
      </div>
    <profile-list></profile-list>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import ProfileInfo from './childProfiles/ProfileInfo.vue'
import ProfileList from './childProfiles/ProfileList.vue'
  export default {
    name: "Profile",
    components: {
      NavBar,
      ProfileInfo,
      ProfileList
    },
  }
</script>

<style scoped>
#profile{
  background-color: #eee;
}
.myProfile{
  font-size: 18px;
  color: #fff;
  background-color: var(--color-tint);
}
.flexa{
  display: flex;
}
.account-item{
  flex:1;
  text-align: center;
  background-color: #fff;
  height: 80px;
  padding-top: 20px;
}
.account-item:nth-of-type(1),.account-item:nth-of-type(2){
  border-right: 1px solid #ccc;
}
.balance{
  color: var(--color-high-text);
  font-weight: 700;
}
</style>
