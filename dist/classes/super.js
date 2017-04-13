'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person(name) {
        _classCallCheck(this, Person);

        this.name = name;
    }

    _createClass(Person, [{
        key: 'greet',
        value: function greet() {
            console.log('hello ' + this.name + ' you are ' + this.age);
        }
    }]);

    return Person;
}();

var Xperson = function (_Person) {
    _inherits(Xperson, _Person);

    function Xperson(age) {
        _classCallCheck(this, Xperson);

        var _this = _possibleConstructorReturn(this, (Xperson.__proto__ || Object.getPrototypeOf(Xperson)).call(this, 'Gareth'));

        _this.age = age;
        return _this;
    }

    _createClass(Xperson, [{
        key: 'superGreet',
        value: function superGreet() {
            _get(Xperson.prototype.__proto__ || Object.getPrototypeOf(Xperson.prototype), 'greet', this).call(this); // calls parent function
        }
    }]);

    return Xperson;
}(Person);

var xperson = new Xperson(100);

xperson.greet();
xperson.superGreet();