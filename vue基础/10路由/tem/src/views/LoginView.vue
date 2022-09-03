<template>
  <div>
    <form @submit.prevent="doLogin">
      <input type="text" v-model="username">
      <input type="password">
      <button>登录</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginView",
  data(){
    return {
      username:"",

    }
  },
  methods:{
    doLogin(){
      //本地存储
      localStorage.setItem("usr",this.username);
      this.$router.push("/");
      // localStorage.getItem("usr")
    }
  }
}
</script>

<style scoped>

</style>