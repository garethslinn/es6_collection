class Person {

}

Person.prototype[Symbol.toStringTag] = 'person';

let person = new Person();

console.log(person)