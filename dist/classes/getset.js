'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person() {
        _classCallCheck(this, Person);
    }

    _createClass(Person, [{
        key: 'construtor',
        value: function construtor(name) {
            this.name = name;
        }
    }, {
        key: 'name',
        get: function get() {
            return this._name.toUpperCase();
        },
        set: function set(value) {
            if (value.lengh > 2) {
                this._name = value;
            }
            console.log('Rejected');
        }
    }]);

    return Person;
}();

var person = new Person('abc');

console.log(person);