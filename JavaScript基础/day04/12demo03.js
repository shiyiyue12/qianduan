//作用域链
// let str = "hello";
// function fun1(){
//     let str = "world";
//     let num = 10;
//     function fun2(){
//         let num = 20;
//         console.log(str);
//         console.log(num);
//     }
//     fun2();
// }
// fun1();

// 闭包
// 利用闭包实现函数的封装
// 闭包的特性：内部函数未执行完，外部函数即使执行完成，外部函数中的变量也不会被销毁

// function fun1(){
//     let n = 10;
//     let m = 20;
//     function fun2(){
//         console.log("I'm fun2");
//         return n+m;
//     }
//     return fun2;
// }
//
// const f = fun1();
// const result = f();
// console.log(result);

const module1 = (function (){
    let a = 10;
    let b = 20;
    function add(){
        return a+b;
    }
    return add;
})()
console.log(module1);