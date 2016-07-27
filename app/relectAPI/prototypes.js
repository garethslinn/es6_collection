class Person {
    constructor(name) {
        this.name = 'Gareth'
    }
}

let person = new Person;

console.log(Reflect.getPrototypeOf(person));
console.log(Reflect.getPrototypeOf(person) == Person.prototype);
console.log(person.__proto__ == Person.prototype);


// set prototype of person

let newObj = {
    age: 100,
    hobbies: ['Sport', 'Reading']
}

Reflect.setPrototypeOf(person, newObj);
console.log(Reflect.getPrototypeOf(person)); // get all prototypes of person.
