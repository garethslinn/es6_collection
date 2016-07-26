"use strict";

function sumUp() {
    for (var _len = arguments.length, toAdd = Array(_len), _key = 0; _key < _len; _key++) {
        toAdd[_key] = arguments[_key];
    }

    console.log(toAdd);
    var result = 0;
    for (var i = 0; i < toAdd.length; i++) {
        result += toAdd[i];
    }
    return result;
}

console.log(sumUp(100, 10, 20));