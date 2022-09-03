function Animal(name){
    this.name = name;
}

Animal.prototype.sayName = function (){
    console.log(`你好，我是${this.name}`);
}

Animal.prototype.sayHello = function (){
    console.log(`hello!!!!`);
}

function Dog(name){
    this.name = name;
}

Dog.prototype = new Animal();

let dog = new Dog("旺财");
dog.sayName();
dog.sayHello();