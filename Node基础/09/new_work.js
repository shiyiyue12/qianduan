const Koa = require("koa");
const router = require("koa-router")();
const views = require("koa-views");
const nunjucks = require("nunjucks");
const static = require("koa-static");
const session = require("koa-session");
const paser = require("koa-parser");

const app = new Koa();

app.use(paser());

app.keys = ["123456"];

app.use(session({
    maxAge: 10 * 1000
}, app))

app.use(static(__dirname + "/public"));

app.use(views(__dirname + "/newWorkViews", {
    map: {html: "nunjucks"}
}))

router.get("/", async ctx => {
    await ctx.render("index.html");
})

router.get("/login", async ctx => {
    await ctx.render("login.html");
})

router.get("/list", async ctx => {
    if (ctx.session.user) {
        await ctx.render("list.html");
    } else {
        ctx.redirect("/");
    }
});

router.post("/login", async ctx => {
    let username = ctx.request.body.username;
    let password = ctx.request.body.password;
    if (username === "admin" && password === "123456") {
        ctx.session.user = "admin"
        //重定向
        ctx.redirect("/list");
    } else {
        ctx.redirect("/login");
    }
})

//引入路由中间件
app.use(router.routes());

app.listen("3000", () => {
    console.log("server is running")
})