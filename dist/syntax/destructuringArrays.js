"use strict";

var numbers = [1, 2, 3];

// using a rest parameter
// let [a, ...b] = numbers;

var a = numbers[0];
var b = numbers[1];
var c = numbers[2];
var _numbers$ = numbers[3];
var d = _numbers$ === undefined ? 4 : _numbers$;

//let a = numbers[0];
//let b = numbers[1];

console.log(a, b, c, d);