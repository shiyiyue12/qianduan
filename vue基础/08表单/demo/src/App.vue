<template>
  <div id="app">
    <!--    <h1>{{message}}</h1>-->
    <form action="" @submit.prevent="postData">
      <!-- ajax实现表单的提交     -->
      <div>
        <label for="">用户名：</label>
        <input type="text" v-model="formData.username">
      </div>
      <div>
        <label for="">密码：</label>
        <input type="password" v-model="formData.password">
      </div>
      <div>
        <label for="">爱好</label>
        <select name="" id="" v-model="formData.hobby">
          <option value="basketball">篮球</option>
          <option value="football">足球</option>
        </select>
      </div>
      <div>
        <!--        单选框绑定一个属性值-->
        <label for="">性别:</label>
        <label for="">男</label>
        <input type="radio" value="男" v-model="formData.sex">
        <label for="">女</label>
        <input type="radio" value="女" v-model="formData.sex">
      </div>
      <div>
        <label for="">技能：</label>
        <label for="">前端：</label>
        <input type="checkbox" value="前端" v-model="formData.skill">
        <label for="">Java：</label>
        <input type="checkbox" value="Java" v-model="formData.skill">
      </div>
      <button>提交表单</button>
    </form>

  </div>
</template>

<script>

export default {
  data() {
    return {
      formData: {
        username: "",
        password: "",
        hobby: "",
        sex: "",
        skill:[]
      }

    }
  },
  methods: {
    postData() {
      console.log(this.formData);
    }
  }
}
</script>

