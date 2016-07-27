class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

}

let person = new Person('Gareth', 100);

console.log(Reflect.get(person, 'name')); // useful in a dynamic situation
console.log(person.name);


Reflect.set(person, 'name', 'Slinn');
console.log(Reflect.get(person, 'name'));


class Person2 {
    constructor(name, age) {
        this._name = name;
        this.age = age;
    }

    get name() {
        return this_name;
    }
}

let person2 = new Person2('Gareth', 100);

console.log(Reflect.get(person2, 'name')); // useful in a dynamic situation
console.log(person2.name); // causes an error
