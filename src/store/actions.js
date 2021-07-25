export default {
  addCart(context,payload){
    return new Promise((resolve,reject)=>{
      let OldProduct=null;
    for(let item of context.state.cartList){
      if(item.iid==payload.iid){
        OldProduct=item;
      }
    }
    if(OldProduct){
      context.commit('addCount',OldProduct)
      resolve('商品数量加1')
    }else{
      payload.count=1;
      context.commit('addToCart',payload)
      resolve('商品添加到购物车中')
    }
    //console.log(state.cartList)
    })
  }
}