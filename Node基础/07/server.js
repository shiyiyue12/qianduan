const Koa = require("koa");
const views = require("koa-views");//负责配备模板引擎
const router = require("koa-router")();//引入路由
const nunjucks = require("nunjucks");//nunjucks模板引擎
const parser = require("koa-parser");//解读post请求
const app = new Koa();

app.use(parser());

router.get("/", async ctx => {
    await ctx.render("index", {title: "首页"});
});

router.get("/video", async ctx => {
    await ctx.render("index", {title: "视频"});
});

router.get("/login", async ctx => {
    let username = ctx.query.username;
    let password = ctx.query.password;
    await ctx.render("home", {
        username: username,
        password: password
    });
})

router.post("/login", async ctx => {
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    await ctx.render("home", {
        username: username,
        password: password
    });
})

app.use(views(__dirname + "/views", {
    map: {html: "nunjucks"}
}));

app.use(router.routes());

app.listen(3000, () => {
    console.log("server is running");
});