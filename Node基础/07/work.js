const Koa = require("koa");
const views = require("koa-views");
const router = require("koa-router")();
const parser = require("koa-parser");
const app = new Koa();
const nunjucks = require("nunjucks");
const static = require("koa-static")

app.use(parser());
app.use(static(__dirname+"/workViews/public"));
app.use(views(__dirname + "/workViews",{
    map:{html:"nunjucks"}
}));

router.get("/",async (ctx) => {
   await ctx.render("index")
});

router.post("/login",async (ctx)=>{
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    if(username === "admin" && password === "123456")
        await ctx.render("home2",{inf:"登录成功"});
    else
        await  ctx.render("home1",{inf:"登录失败"})
});
app.use(router.routes());

app.listen(3000,()=>{
    console.log("server is running haha");
})