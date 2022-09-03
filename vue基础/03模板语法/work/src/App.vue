<template>
  <div class="box" >
    <h1 >{{message}}</h1>
    <div class="pack">
      <img :src="url" alt="">
      <div class="btns">
        <button @click="sw1">1</button>
        <button @click="sw2" >2</button>
        <button @click="sw3">3</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      url:("images/1.png"),
      message:"hello1"
    }
  },
  methods:{
    sw1(){
      this.url = "images/1.png";
    },
    sw2(){
      this.url = "images/2.png";
    },
    sw3(){
      this.url = "images/3.png";
    }
  }

}
</script>

<style>
.pack{
  width: 640px;
  height: 320px;
  position: relative;
}
  img{
    width: 100%;
    height: 100%;
  }
  .btns{
    position: absolute;
    bottom: 0;
    right: 0;
  }
</style>
