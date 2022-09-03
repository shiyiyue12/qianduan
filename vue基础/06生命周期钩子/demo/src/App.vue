<template>
  <div id="app">
    <h1>生命周期钩子</h1>
    <h1>水果列表</h1>
    <p v-if="loading">loading...</p>
    <ul v-if="!loading">
      <li v-for="(v,i) of fruitList" :key="i">{{v}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fruitList: [],
      loading:true
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      //通过计时器，模拟一个ajax获取数据的方法
      setTimeout(() => {
         this.fruitList = ["香蕉","苹果","鸭梨"];
         this.loading = false;
      }, 500)
    }
  }
}
</script>

