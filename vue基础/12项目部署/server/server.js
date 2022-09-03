const Koa = require("koa");
const router = require("koa-router")();
const parser = require("koa-parser");
const cors = require("koa2-cors");
const static = require("koa-static");
const Application = require("koa");

const app = new Koa();

app.use(cors());
app.use(parser());
app.use(router.routes());
app.use(static(__dirname + "/public"));

//模拟数据库
const studentList = [{
        id: 1,
        name: "小明",
        "age": 2
    },
    {
        id: 2,
        name: "小红",
        "age": 4
    },
    {
        id: 3,
        name: "小亮",
        "age": 6
    },
];

router.get("/student", async ctx => {
    ctx.body = studentList;
})

router.post("/student", async ctx => {
    let student = ctx.request.body.student;
    studentList.push(student);
    ctx.body = true;
})

router.delete("/student/:id", async ctx => {
    let id = ctx.params.id;
    studentList.map((item, index) => {
        if (item.id == id) {
            studentList.splice(index, 1);
        }
    })
    ctx.body = true;
})

app.listen(3000, () => {
    console.log("server is running")
})