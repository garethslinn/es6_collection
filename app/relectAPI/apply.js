class Person {
    constructor(name) {
        this.name = 'Gareth'
    }
}

let person = new Person;


let newObj = {
    age: 100,
    hobbies: ['Sport', 'Reading'],
    greet() {
        console.log('Hello');
    }
}

Reflect.setPrototypeOf(person, newObj);
Reflect.apply(person.greet, null, [] ); // apply greet method to person
