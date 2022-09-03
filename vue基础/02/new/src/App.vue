<template>
<!--  网页模板，编写html文件-->
<!--  只能暴露一个标签里-->
  <div>
    <h1 :title="message">{{message}}</h1>
    <h2>hello world</h2>
    <button @click="showHi">showHi</button>
  </div>
</template>

<script>
// js代码
export default {
  data(){
    return {
      message:"hello vue"
    }
  },
  methods:{
    showHi(){
      alert("hi");
    }
  }
}
</script>

<style>
/*css代码*/
</style>
