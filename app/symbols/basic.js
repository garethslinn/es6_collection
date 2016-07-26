let symbol = Symbol('debug');
let anotherSymbol = Symbol('debug');

let obj = {
    name: 'Gareth',
    [symbol]: 100
};

console.log(obj[symbol]);

