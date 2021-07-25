<template>
  <div class="aaa">
  <nav-bar>
      <div slot="left" class="xiaoicon" @click="backClick">
        <img src="~assets/img/common/back.svg" alt="" class="xiaoicon">
      </div>
      <div slot="center" class="title">
        <div v-for="(item,index) in titles" :key="index" @click="titleclick(index)" :class="{active:index==currentIndex}">
          {{item}}
        </div>
      </div>
    </nav-bar>
</div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    components:{
    NavBar
  },
  data(){
    return {
      titles:['商品','参数','评论','推荐'],
      currentIndex:0
    }
  },
  methods:{
    titleclick(index){
      
      this.$emit('navitemclick',index)
      this.currentIndex=index
    },
    backClick(){
      this.$router.go(-1)
    }
  }
}
</script>

<style type="text/css" scoped>
.title{
  display: flex;
}
.title > div{
  flex: 1;
  font-size: 14px;
}
.active{
  color:var(--color-tint)
}
.xiaoicon{
  margin-top: 5px;
}
</style>
