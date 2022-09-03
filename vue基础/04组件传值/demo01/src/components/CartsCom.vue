<template>
  <div>
    <h1>这是一个购物车</h1>
    <ul>
      <li v-for="(v,i) of fruits" :key="i">
        {{v.name}}
        单价:{{v.price}}
        <CounterCom
            :qu = "v.qu"
            :index = "i"
            @add="add"
            @sub="sub"
        ></CounterCom>
      </li>
    </ul>
  </div>
</template>

<script>
import CounterCom from "@/components/CounterCom";
export default {
  components:{CounterCom},
  name: "CartsCom",
  data(){
    return{
      fruits:[
        {name:"苹果",price:3.14,qu:0},
        {name:"鸭梨",price:2.14,qu:0},
        {name:"香蕉",price:2,qu:0}
      ]
    }
  },
  methods:{
    add(index){
      this.fruits[index].qu++;
    },
    sub(index){
      if(this.fruits[index].qu>0)
      this.fruits[index].qu--;
    }
  }
}
</script>

<style scoped>

</style>