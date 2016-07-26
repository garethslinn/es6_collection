let symbol1 = Symbol.for('age');
let symbol2 = Symbol.for('age');

let person = {
    name: 'Gareth'
};

function makeAge(person) {
    let ageSymbol = Symbol.for('age');
    person[ageSymbol] = 100;
}

makeAge(person);

console.log(person[symbol1]);