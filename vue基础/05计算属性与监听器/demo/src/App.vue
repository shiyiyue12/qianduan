<template>
  <div id="app">
    <h1>计算属性与监听器</h1>
    <p>单价：{{price}}</p>
    <p>
      数量：
      <button @click="sub">-</button>
      {{quantity}}
      <button @click="add">+</button>
    </p>
    <p>折扣：{{discount}}</p>
    <p>总价:{{totalPrice}}</p>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      price:99,
      quantity:0,
      discount:0.5,
      totalPrice:0
    }
  },
  // computed:{
  //   totalPrice(){
  //       return this.price * this.quantity * this.discount;
  //   }
  // },
  watch:{
    //val变化之后的结果
    quantity(val){
      this.totalPrice = this.price * val * this.discount;
    }
  },
  methods:{
    sub(){
      this.quantity--;
    },
    add(){
      this.quantity++;
    }
  }
}
</script>

<style>
</style>
