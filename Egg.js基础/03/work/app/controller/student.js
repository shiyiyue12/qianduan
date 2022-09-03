'use strict';

const Controller = require('egg').Controller;

let studentList = [
    {id:"001",name:"小明",age:10},
    {id:"002",name:"小红",age:10},
    {id:"003",name:"小白",age:10}
]

class StudentController extends Controller {
    //get请求
    async index() {
        this.ctx.body = studentList;
    }

    //post请求
    async create(){
        const student =  this.ctx.request.body.student;
        studentList.push(student);
        this.ctx.body = "添加成功";
    }

    //删除请求
    async destroy(){
        let id = this.ctx.params.id;
        studentList.map( (item,index) => {
            if(item.id == id){
                studentList.splice(index, 1);
            }
        })
        this.ctx.body = "删除成功";
    }
}

module.exports = StudentController;
