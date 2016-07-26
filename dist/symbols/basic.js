'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var symbol = Symbol('debug');
var anotherSymbol = Symbol('debug');

var obj = _defineProperty({
    name: 'Gareth'
}, symbol, 100);

console.log(obj[symbol]);