<template>
  <div>
    <h1>{{msg}}</h1>
    <button @click="sendDate">传递数据</button>
  </div>
</template>

<script>
//子集向父级传递数据：用自定义事件
export default {
  name: "ChildCom",
  props:["msg"],
  data(){
    return{
      childDate:"I`m child"
    }
  },
  methods:{
    sendDate(){
      this.$emit("myevent",this.childDate)
    }
  }
}
</script>

<style scoped>

</style>