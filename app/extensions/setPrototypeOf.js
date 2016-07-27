let person = {
    name: 'Gareth'
};

let boss = {
    name: 'Slinn'
};

console.log(person.__proto__ === Object.prototype);

Object.setPrototypeOf(person, boss);

console.log(person.__proto__ === boss);
console.log(person.name);
console.log(boss.name);
