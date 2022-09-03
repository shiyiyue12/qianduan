//es 2015支持类的概念
class Dog{
    // 构造函数
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    sayHello(){
        console.log(`我是${this.name}`);
    }
}
let dog = new Dog("旺财",2);
console.log(dog.age);
dog.sayHello();