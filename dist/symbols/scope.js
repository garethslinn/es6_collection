'use strict';

var symbol1 = Symbol.for('age');
var symbol2 = Symbol.for('age');

var person = {
    name: 'Gareth'
};

function makeAge(person) {
    var ageSymbol = Symbol.for('age');
    person[ageSymbol] = 100;
}

makeAge(person);

console.log(person[symbol1]);