module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport":{
      viewportWidth:375,
      viewportHeight:667,
      unitPrecision:5,//转换为vw保留5位小数
      viewportUnit:'vw',
      selectBlackList:['ignore','tab-bar','tab-bar-item'],//类名
      minPixeValue:1,//小于等于1px不转化
      mediaQuery:false//不允许媒体查询转化px
    }
  }
}
