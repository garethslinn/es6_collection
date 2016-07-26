class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log('hello ' + this.name);
    }
}

let person = new Person('Slinn');

person.greet();