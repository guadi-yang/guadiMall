export default {
  addCount(state,payload){
    payload.count+=1;
  },
  addToCart(state,payload){
    payload.checked=false
    state.cartList.push(payload)
  },
  quanxuan(state,payload){
    if(payload){
      state.cartList.forEach(item => item.checked=false);
    }else{
      state.cartList.forEach(item => item.checked=true);
    }
  }
}