const Koa = require("koa");
const router = require("koa-router")();
const views = require("koa-views");
const nunjucks = require("nunjucks");
const session = require("koa-session");
const app = new Koa();

app.keys = ["123456"];

app.use(session({
    maxAge:10 * 1000
},app));

//设置模板引擎
app.use(views(__dirname + "/views",{
    map:{html:"nunjucks"}
}))

//首页路由
router.get("/",async (ctx)=>{
    ctx.cookies.set("user","admin");
   ctx.body = "cookie"
});

router.get("/test",async ctx =>{
    let count = ctx.cookies.get("count"); //获取cookie
    if(count > 0){
        ++count;
        ctx.cookies.set("count",count,{
            maxAge:2000 //设置cookie过期时间为2s
        }); //重新设置+1值
    }else{
        count = 1;
        ctx.cookies.set("count",count);
    }
    ctx.body = count;
})

// 设置session
router.get("/session",async ctx => {
   ctx.session.user = "admin";
   ctx.body = "set session";
});

//获取session 并将内容显示在页面
router.get("/session_test",async ctx => {
    if(ctx.session.count >0){//是否有session
         ++ctx.session.count; // 自加1
    }else{
        ctx.session.count = 1; //设置为0
    }
    ctx.body = ctx.session.count;

});

//引入路由中间件
app.use(router.routes());

app.listen("3000",()=>{
    console.log("server is running")
})