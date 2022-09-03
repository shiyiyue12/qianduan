// 箭头函数基本语法
// const fun = (x) => {
//     return x * x;
// }
// const fun = (x) => x * x;
// console.log(fun(2));

const cat = {
    name:"miaomiao",
    sayname(){
        let self = this;
        // setInterval(function (){
        //     console.log(self.name);
        // },1000);
        setInterval(()=>{
            console.log(this.name);
        },1000)
    }
}
cat.sayname();

// 箭头函数和普通函数的this指向不同
// 普通函数指向的是调用该函数的对象
// 箭头函数：在哪里定义，this就指向谁。