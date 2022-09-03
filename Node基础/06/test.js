const Koa = require("koa"); //引入koa构造函数
const router = require("koa-router")(); //引用并执行Koa-router
const app = new Koa(); //创建应用
const static = require("koa-static");

app.use(static(__dirname + "/public"));

router.get("/", async (ctx) => {
    ctx.body = `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<h1>欢迎你来到我的网页</h1>
<p>真的很欢迎你哦！</p>
<a href="/doc">来到这里</a>
</body>
</html>`
});

router.get("/doc", async (ctx) => {
    ctx.body = `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="/css/doc.css">
</head>
<body>
<h1>欢迎你来到这里</h1>
<p>人生啊，是这样不可预测，没有永恒的痛苦，也没有永恒的幸福，生活象流水一般，有时是那么平展，有时又是那么曲折。</p>
<img src="/images/waoku.jpg" alt="">
</body>
</html>`;
});

app.use(router.routes());

app.listen(80,()=>{
   console.log("server is running");
});