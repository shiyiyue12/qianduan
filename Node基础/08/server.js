const Koa = require("koa");
const router = require("koa-router")();
const views = require("koa-views");
const nunjucks = require("nunjucks");
const app = new Koa();

app.use(views(__dirname+"/views",{
    map:{html:"nunjucks"}
}));

router.get("/",async ctx => {
   let studentList = ["小明","小红","小亮"];
   await ctx.render("index",{
       title:"后台的数据",
       studentList,
       isLogin:false,
       username:"admin"
   })
});

router.get("/images",async ctx =>{
    await ctx.render("images")
})

app.use(router.routes());

app.listen(3000,()=>{
    console.log("server is running");
});
