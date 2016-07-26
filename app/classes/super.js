class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log('hello ' + this.name + ' you are '+ this.age);
    }
}

class Xperson extends Person {
    constructor(age) {
        super('Gareth');
        this.age = age;
    }

    superGreet() {
        super.greet(); // calls parent function
    }

}

let xperson = new Xperson(100);

xperson.greet();
xperson.superGreet();