'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person() {
  _classCallCheck(this, Person);
};

Person.prototype[Symbol.toStringTag] = 'person';

var person = new Person();

console.log(person);