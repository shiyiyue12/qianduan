<template>
  <div>
    <h1>Sister</h1>
    <p>{{state.message}}</p>
  </div>
</template>

<script>
import Store from "@/Store";
export default {
  name: "SisiterCom",
  data(){
    return{
      state:Store.state
    }
  }
}
</script>

<style scoped>

</style>