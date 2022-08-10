// typical prototypal pattern in JS

class Dog {
    constructor(name) {
        this._name = name
    }

    bark() {
        console.log(`I am ${this._name}, hear me bark!`)
    }
}

class SuperDog extends Dog {
    constructor(name) {
        super(name)
    }

    fly() {
        console.log('I can fly!');
    }
}

const Rupert = new SuperDog('Rupert');
Rupert.bark();
Rupert.fly();