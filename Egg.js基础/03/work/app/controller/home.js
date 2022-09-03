'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    await  ctx.render("index",{students:[
        {id:"001",name:"小明",age:10},
        {id:"002",name:"小红",age:10},
        {id:"003",name:"小白",age:10}
      ]});
  }
  async  getStudents(){
      this.ctx.body = "hello egg123";
  }
}

module.exports = HomeController;
