'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
};

function TopObj() {
    this.age = 100;
}

var person = Reflect.construct(Person, ['Gareth']); // overwrite prototype with TopObj

console.log(person);
console.log(person instanceof Person);

console.log(person.__proto__ == Person.prototype);

var person2 = Reflect.construct(Person, ['Gareth'], TopObj); // overwrite prototype with TopObj
console.log(person2.__proto__ == TopObj.prototype);