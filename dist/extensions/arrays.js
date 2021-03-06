'use strict';

//ES5 fill it with 5 underfined values
var arr1 = Array(5);
console.log(arr1);

//ES6 create an array containing the following numbers
var arr2 = Array.of(5, 10, 11);'';
console.log(arr2);

var arr3 = [10, 12, 16];
console.log(arr3);

var newArray = Array.from(arr3, function (val) {
    return val * 2;
});

console.log(newArray);
console.log(arr3);

console.log(arr3.find(function (val) {
    return val >= 12;
})); // stops after first match

arr3.fill(100); //replace with this value
console.log(arr3);

// Start: Example  of find
var inventory = [{ name: 'apples', quantity: 2 }, { name: 'bananas', quantity: 0 }, { name: 'cherries', quantity: 5 }];

function findCherries(fruit) {
    return fruit.name === 'cherries';
}

console.log(inventory.find(findCherries)); // { name: 'cherries', quantity: 5 }

/* End */

var arr4 = [1, 2, 3];
console.log(arr4.copyWithin(1, 2)); // 1,3,3
console.log(arr4); // 1,3,3