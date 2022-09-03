<template>
  <div>
    <h1>Brother <button @click = "changeDate">改变数据</button></h1>
    <p>{{ state.message }}</p>
  </div>
</template>

<script>
import Store from "@/Store";

export default {
  name: "BrotherCom",
  data() {
    return {
      state: Store.state
    }
  },
  methods:{
    changeDate() {
      Store.setStateMessage("brother data");
    }
  }
}
</script>

<style scoped>

</style>