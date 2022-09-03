<template>
  <div>
    <h1>{{childDate}}</h1>
    <ChildCom @myevent="changeDate" :msg = "message"></ChildCom>
  </div>
</template>

<script>
// 父级向子级传递数据，使用属性传递
import ChildCom from "./components/ChildCom"
export default {
  data(){
    return {
      message:"App.vue date",
      childDate:""
    }
  },
  components:{
    ChildCom
  },
  methods:{
    changeDate(childData){
      this.childDate = childData;
    }

  }
}
</script>

<style>
</style>
