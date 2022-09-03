<template>
    <span>
    <button @click="sub">-</button>
    <span>{{ qu }}</span>
    <button @click="add">+</button>
  </span>
</template>

<script>
export default {
  name: "CounterCom",
  props: ["qu","index"],
  methods:{
    sub(){
      this.$emit("sub",this.index);
    },
    add(){
      this.$emit("add",this.index);
    }
  }
}
</script>

<style scoped>

</style>