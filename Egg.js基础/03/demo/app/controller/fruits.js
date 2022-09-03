'use strict';

const Controller = require('egg').Controller;
let fruitList = ["香蕉", "苹果", "鸭梨"];

class FruitsController extends Controller {

    // /fruits get请求
    async index() {
        this.ctx.body = fruitList;
    }

    //post 请求
    async create() {
        const fruit = this.ctx.request.body.fruit;
        fruitList.push(fruit);
        this.ctx.body = "添加成功";
    }

    // /fruits/:id  delete 请求
    async destroy() {
        let id = this.ctx.params.id;
        fruitList.splice(id, 1);
        this.ctx.body = "删除成功";
    }
}

module.exports = FruitsController;
