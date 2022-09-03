class Anima{
    constructor(name) {
        this.name = name;
    }
    sayName(){
        console.log(`我是${this.name}`);
    }
}

class Dog extends Anima{
    constructor(name,age) {
        super(name);
        this.age = age;
    }
}

let dog = new Dog("旺财",2);
dog.sayName();