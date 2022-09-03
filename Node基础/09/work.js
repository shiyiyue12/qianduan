const Koa = require("koa");
const router = require("koa-router")();
const views = require("koa-views");
const nunjucks = require("nunjucks");
const session = require("koa-session");
const parser = require("koa-parser");
const app = new Koa();

app.use(parser());

app.keys = ["123456"];

app.use(session({
    maxAge:10 * 1000
},app));

//设置模板引擎
app.use(views(__dirname + "/views",{
    map:{html:"nunjucks"}
}))

//首页:任何用户都可以访问
router.get("/",async (ctx)=>{
await ctx.render("home.html")
});

//登录页：任何用户都可以访问，表单
router.get("/login",async (ctx)=>{
    await ctx.render("login.html")
});

//内容页：只有登录成功后才能访问
router.get("/list",async (ctx)=>{
    if(ctx.session.user){
        await ctx.render("list.html");
    }else {
        ctx.redirect("/");
    }
});

router.get("/logout",async ctx=>{
   ctx.session.user = "";
   ctx.redirect("/");
});

// 处理请求的路由
router.post("/login",async ctx =>{
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    if(username === "admin" && password === "123456"){
        ctx.session.user = "admin"
        //重定向
        ctx.redirect("/list")
    }else{
        ctx.redirect("/")
    }
})

//引入路由中间件
app.use(router.routes());

app.listen("3000",()=>{
    console.log("server is running")
})