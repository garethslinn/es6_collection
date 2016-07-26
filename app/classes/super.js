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

}

let xperson = new Xperson(100);
xperson.greet();