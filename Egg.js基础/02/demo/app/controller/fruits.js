const  Controller = require("egg").Controller;

let furitList = [
  "香蕉",
  "苹果",
  "鸭梨"
]

class FruitsController extends Controller {

  async index(){
    // let query = this.ctx.request.query;
    // console.log(query);
    // this.ctx.body = `传递的index值是${query.index}` //上下文对象
    this.ctx.body = furitList;
  }

  async new(){
      this.ctx.body = `
      <form method="post" action="/fruits">
          <input name="fruitname">
          <button>添加</button>
      </form>
      `
  }

  async create(){
      let fruit = this.ctx.request.body;
      this.ctx.body = fruit;
      furitList.push(fruit.fruitname);
      this.ctx.redirect('/fruits');
  }

  // async getId(){
  //   let id = this.ctx.params.id;
  //   this.ctx.body = `传递的id值是${id}`
  // }
  //
  // async createPage(){
  //   this.ctx.body = `
  //   <form method="post" action="/creatfruit">
  //       <input name="fruitname">
  //       <button>添加</button>
  //   </form>
  //   `
  // }
  //
  // async createFruit(){
  //   let fruit = this.ctx.request.body;
  //   this.ctx.body = fruit;
  //   furitList.push(fruit.fruitname);
  //   this.ctx.body = "添加成功";
  // }

}

module.exports = FruitsController;
