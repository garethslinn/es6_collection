class Person {
    constructor(name) {
        this.name = name;
    }
}

function TopObj() {
    this.age = 100;
}

let person = Reflect.construct(Person, ['Gareth']); // overwrite prototype with TopObj

console.log(person);
console.log(person instanceof Person);

console.log(person.__proto__ == Person.prototype);


let person2 = Reflect.construct(Person, ['Gareth'], TopObj); // overwrite prototype with TopObj
console.log(person2.__proto__ == TopObj.prototype);

