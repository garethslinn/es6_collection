"use strict";

var numbers = [1, 2, 3];

console.log(numbers + 1);

numbers[Symbol.toPrimitive] = function () {
    return 999;
};

console.log(numbers + 1);