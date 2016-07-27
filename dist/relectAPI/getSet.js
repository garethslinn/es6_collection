'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
};

var person = new Person('Gareth', 100);

console.log(Reflect.get(person, 'name')); // useful in a dynamic situation
console.log(person.name);

Reflect.set(person, 'name', 'Slinn');
console.log(Reflect.get(person, 'name'));

var Person2 = function () {
    function Person2(name, age) {
        _classCallCheck(this, Person2);

        this._name = name;
        this.age = age;
    }

    _createClass(Person2, [{
        key: 'name',
        get: function get() {
            return this_name;
        }
    }]);

    return Person2;
}();

var person2 = new Person2('Gareth', 100);

console.log(Reflect.get(person2, 'name')); // useful in a dynamic situation
console.log(person2.name); // causes an error