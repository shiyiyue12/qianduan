// es5是没有类的概念的，通过构造函数来实现类
// 构造函数的函数名，首字母大写
// 构造函数是用来创建对象用的

function Dog(name,age){
    this.name = name;
    this.age = age;
}

// 通过原型对象，为构造函数生成的对象赋予新的方法
Dog.prototype.sayname = function (){
    console.log(`我的名字是${this.name}`);
}

var dog = new Dog("旺财",2); //创建了一个对象，狗类的实例
console.log(typeof dog);
dog.sayname()