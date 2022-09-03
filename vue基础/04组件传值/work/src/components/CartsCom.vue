<template>
  <div>
    <ul>
      <li v-for="(v,i) of state.fruits" :key="i">
        {{ v.name }}
        单价:{{ v.price }}
        <CounterCom
            :qu="v.quantity"
            :index="i"
            @add="add"
            @sub="sub"
        ></CounterCom>
      </li>
    </ul>
    <h1>总价为:{{ totalPrice }}</h1>
  </div>
</template>

<script>
import store from "@/store";
import CounterCom from "@/components/CounterCom";

export default {
  name: "CartsCom",
  components: {CounterCom},
  data() {
    return {
      state: store.state
    };
  },
  methods: {
    add(index) {
      store.add(index);
    },
    sub(index) {
      store.sub(index);
    }
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.state.fruits.map((v) => {
        total += v.price * v.quantity;
      });
      return total.toFixed(2);
    },
  }
}
</script>

<style scoped>

</style>