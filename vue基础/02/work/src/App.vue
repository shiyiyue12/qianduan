<template>
  <div>
    <button @click="add">+</button>
    <span>{{number}}</span>
    <button @click="sub">-</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
    }
  },
  methods: {
    add() {
      this.number++;
    },
    sub() {
      if (this.number > 0)
        this.number--;
    }
  }
}
</script>

<style>

</style>
