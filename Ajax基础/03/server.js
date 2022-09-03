const Koa = require("koa");
const router = require("koa-router")();
const nunjucks = require("nunjucks");
const static = require("koa-static");
const views = require("koa-views");
const parser = require("koa-parser");
const app = new Koa();

app.use(parser());
app.use(static(__dirname + "/public"));
app.use(views(__dirname + "/views",{
    map:{html:'nunjucks'}
}))

router.get('/',async ctx =>{
    await ctx.render("index");
})

//数据
let dataList = ["香蕉","苹果","鸭梨"];

//get查看
router.get("/fruits",ctx=>{
    ctx.body = dataList;
})

//post添加
router.post("/fruits",ctx=>{
    let fruit = ctx.request.body.fruit;
    dataList.push(fruit);
    ctx.body = dataList;
})

//put修改
router.put("/fruits/:id",ctx =>{ // 路由传参 /:id --> ctx.params.id
    let id = ctx.params.id;
    let fruit = ctx.request.body.fruit;
    dataList.splice(id,1,fruit); //splice(要删除元素的索引，删除几个元素，将删除的元素替换成xxxno)
    ctx.body = dataList;
});

//delete删除
router.delete("/fruits/:id",ctx => {
    let id = ctx.params.id;
    dataList.splice(id,1);
    ctx.body = dataList;
});

app.use(router.routes());

app.listen("3000",()=>{
    console.log("server is running");
})