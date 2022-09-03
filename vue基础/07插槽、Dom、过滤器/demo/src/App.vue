<template>
  <div id="app">
<!--    <h1>hello world</h1>-->
<!--    <my-button>提交</my-button>-->
<!--    <my-button>注册</my-button>-->
<!--    <lay-out>-->
<!--      <template v-slot:header>-->
<!--        <h1>header</h1>-->
<!--      </template>-->
<!--      <template v-slot:content>-->
<!--        <h1>content</h1>-->
<!--      </template>-->
<!--      <template v-slot:footer>-->
<!--        <h1>footer</h1>-->
<!--      </template>-->
<!--    </lay-out>-->
<!--    <div id="box" ref="box">hello world</div>-->

<!--    <h1>{{message | mysplit}}</h1>-->
<!--    <h1>{{title | mysplit}}</h1>-->
    <h1>{{date | dataFormate}}</h1>
    <h1>{{date1 | dataFormate}}</h1>
  </div>
</template>

<script>
// import MyButton from "@/components/MyButton";
// import LayOut from "@/components/LayOut";

export default {
  // components: {MyButton, LayOut},
  // mounted(){
    // window.getComputedStyle(dom)
    //原生方法来获取
    // let box = document.querySelector("#box");
    // let style = window.getComputedStyle(box);
    // console.log(style.height);
    //refs来获取dom
    // let box = this.$refs.box;
    // let style = window.getComputedStyle(box);
    // console.log(style.height);
  // }
  filters:{
    mysplit(value){
      return value.split("").join();
    },
    dataFormate(value){
      let date = new Date(value);
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let d = date.getDate();
      return `${year}年${month}月${d}日`;
    }
  },
  data(){
    return{
      message:"hello",
      title:"world",
      date:"2020-1-1",
      date1:"2022-6-5"
    }
  }
}
</script>

<!--<style>-->
<!--div{-->
<!--  width: 100px;-->
<!--  height: 100px;-->
<!--  background-color: red;-->
<!--}-->
<!--</style>-->