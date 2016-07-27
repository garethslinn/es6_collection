'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person(name) {
    _classCallCheck(this, Person);

    this.name = 'Gareth';
};

var person = new Person();

var newObj = {
    age: 100,
    hobbies: ['Sport', 'Reading'],
    greet: function greet() {
        console.log('Hello');
    }
};

Reflect.setPrototypeOf(person, newObj);
Reflect.apply(person.greet, null, []); // apply greet method to person