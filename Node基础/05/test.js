const http = require("http");
const server = http.createServer((req,res)=>{
let html = `<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>hello world</h1>
    <div>我是从服务器传回来的html页面</div>
</body>
</html>`;
res.end(html);
});

server.listen(80,()=>{
    console.log("server is running");
})