"use strict";

var numbers = [1, 2, 3];

// using a rest parameter
// let [a, ...b] = numbers;

var a = numbers[0],
    b = numbers[1],
    c = numbers[2],
    _numbers$ = numbers[3],
    d = _numbers$ === undefined ? 4 : _numbers$;

//let a = numbers[0];
//let b = numbers[1];

console.log(a, b, c, d);