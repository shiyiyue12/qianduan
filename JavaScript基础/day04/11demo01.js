// 块级作用域
// {
//     let str = "hello"
// }
// console.log(str);

// console.log(str);
//var str = "hello" //变量提升
//let str = "hello";

// 不允许重复声明 let


// const 定义常量
// 不能修改
// 定义对象时可以修改对象的属性
// const func = function (){
// //     console.log("hello");
// // }
// // console.log(typeof func)

// 模板字符串
// 允许换行
// let str = `hello
// d`;

//
// let year = "2020";
// let month = "10";
// let day = "1";
// let result = `${year}年${month}月${day}日`;
// console.log(result);

// 解构赋值
// let n = 10;
// let m = 20;
// let [n,m] = [10,20];
// // 两值交换
// [n,m] = [m,n];


// let name = "xiaoming";
// let age = 10;
// let {age,name} = {name:"小明",age:10};

let xm = {name:"xiaoming",age:10};

function getname ({name}){
    return name;
}

let result = getname(xm);
console.log(result);