<template>
  <div id="app">
    <form action="" @submit.prevent = "postData">
      <div>
        <label for="">请输入登录名：</label>
        <input type="text" v-model="inf.username">
      </div>
      <div>
        <label for="">密码：</label>
        <input type="password" v-model="inf.password">
      </div>
      <button>提交</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inf: {
        username:"",
        password:"",
      }
    }
  },
  methods:{
    postData() {
      console.log(this.inf);
    }
  }
}
</script>


