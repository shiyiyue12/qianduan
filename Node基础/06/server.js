const Koa = require("koa"); //引入Koa构造函数
const router = require("koa-router")(); //引用并执行koa-router 引入路由
const app = new Koa(); //创建应用
const static = require("koa-static");

// __dirname 可以直接获取当前项目的绝对路径

app.use(static(__dirname + "/public"));

// 引入一个中间件，中间件即是一个函数
// app.use(async (ctx)=>{
//     ctx.body = "hello koa!"
// })

router.get("/", async (ctx) => {
    ctx.body = `
        <h1>标题</h1>
        <p>这是一个文章内容</p>
        <img src="/images/logo.jpg">
    `;
});

router.get("/video", async ctx => {
    ctx.body = "video page";
});

app.use(router.routes()); //在koa项目中引入router


app.listen(3000, () => {
    console.log("server is running");
}); //设置监听端口