class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet(prefix) {
        console.log(prefix + 'Hello, I am ' + this.name)
    }
}

let person = Reflect.construct(Person, ['Gareth', 100]);
Reflect.apply(person.greet, person, []);
Reflect.apply(person.greet, { name: 'Slinn'}, ['...']);
