<template>
<span>
  <button @click="sub">-</button>
  <span>{{ qu }}</span>
  <button @click="add">+</button>
</span>
</template>

<script>
export default {
  props: ["qu", "index"],
  name: "CounterCom",
  methods: {
    add() {
      this.$emit("add", this.index)
    },
    sub() {
      this.$emit("sub", this.index);
    }
  }
}
</script>

<style scoped>

</style>