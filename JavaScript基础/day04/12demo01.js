// 函数声明提升
// let reasult1 = func(10,20);
// let reesult2 = func(100,200);
// console.log(reasult1);
// console.log(reesult2);
//
// function func(x,y){
//     return x+ y;
// }

// 回调函数：将匿名函数作为参数传递给另一个函数，或方法
// setInterval(function (){
//     console.log("hello")
// },1000);

// 函数表达式 无提升的特性
// const fun = function (n,m){
//     return n+m;
// }

// 方法
const cat = {
    name:"miaomiao",
    // sayname:function (){
    //     console.log(this.name);
    // }
    sayName(){
        console.log(this.name);
    }
}

cat.sayname()