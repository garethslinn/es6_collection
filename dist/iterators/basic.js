"use strict";

var arr = [1, 2, 3];

arr[Symbol];

var it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next()); // undefined - done: true;