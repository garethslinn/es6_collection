"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Obj1 = function Obj1() {
    _classCallCheck(this, Obj1);

    this.a = 1;
};

var Obj2 = function Obj2() {
    _classCallCheck(this, Obj2);

    this.b = 2;
};

var obj1 = new Obj1();
var obj2 = new Obj2();

//Take first object and merge all other objects into it
var obj = Object.assign(obj2, obj1);

console.log(obj.__proto__ === Obj2.prototype);