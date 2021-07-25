<template>
  <div id="category">
    <nav-bar class="categoryBar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <Menu :categories="categories" @menuclick="menuclick"></Menu>
      <category-content :categoryData="showSubcategory" :show="showDetailx" class="a" @changep="changep"></category-content>
    </div>
    
    
  </div>
</template>

<script>
 import NavBar from 'components/common/navbar/NavBar'
 import Menu from './childCategorys/Menu.vue'
 import CategoryContent from './childCategorys/CategoryContent.vue'
 import TabControl from 'components/content/tabControl/TabControl.vue'
 import CategoryDetail from './childCategorys/CategoryDetail.vue'
 import {getCategory , getSubcategory , getDetail} from 'network/category.js'
  export default {
    name: "Category",
    components:{
      NavBar,
      Menu,
      CategoryContent,
      TabControl,
      CategoryDetail
    },
    data(){
      return {
        categories:[],
        currentIndex:-1,
        categoryData: {},
        currentType:'pop'
      }
    },
    computed:{
      showSubcategory() {
		    if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].subcategories
      },
      showDetailx(){
        if (this.currentIndex === -1) return {}
        return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
      }
    },
    created(){
      this.getCategory();
    },
    methods:{
      getCategory(){
        getCategory().then(res=>{
        this.categories = res.data.category.list
        //console.log(res);
        console.log(this.categories)
        for (let i = 0; i < this.categories.length; i++) {
            this.categoryData[i] = {
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
          this.getSubcategory(0)
        })
      },
      getSubcategory(index){
        this.currentIndex=index;
        const mainKey = this.categories[index].maitKey
        getSubcategory(mainKey).then(res=>{
          this.categoryData[index].subcategories= res.data
          this.categoryData = {...this.categoryData}
          //console.log(res)
          //console.log(this.categoryData)
          this.getDetail('pop')
          this.getDetail('new')
          this.getDetail('sell')
        })
      },
      getDetail(type){
        const miniWallkey = this.categories[this.currentIndex].miniWallkey
        getDetail(miniWallkey,type).then(res=>{
          console.log(res);
          this.categoryData[this.currentIndex].categoryDetail[type]=res;
          this.categoryData={...this.categoryData}
          console.log(this.categoryData[this.currentIndex].categoryDetail[this.currentType])
        })
      },
      menuclick(index){
        console.log(index)
        this.getSubcategory(index)
      },
      changep(a){
        this.currentType=a
      }
    }
}
</script>

<style scoped>
#category{
  height: 100vh;
}
.categoryBar{
  background-color: var(--color-tint);
  color:#fff;
  font-size: 16px;
  font-weight: 700;
}
.content{
  position: absolute;
  left: 0;
  right: 0;
  top: 44px;
  bottom: 49px;
  display: flex;
  width: 100%;
}
</style>