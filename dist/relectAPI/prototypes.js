'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person(name) {
    _classCallCheck(this, Person);

    this.name = 'Gareth';
};

var person = new Person();

console.log(Reflect.getPrototypeOf(person));
console.log(Reflect.getPrototypeOf(person) == Person.prototype);
console.log(person.__proto__ == Person.prototype);

// set prototype of person

var newObj = {
    age: 100,
    hobbies: ['Sport', 'Reading']
};

Reflect.setPrototypeOf(person, newObj);
console.log(Reflect.getPrototypeOf(person)); // get all prototypes of person.