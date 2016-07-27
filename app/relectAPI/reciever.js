class Person {
    constructor(name, age) {
        this._name = name;
        this.age = age;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;;
    }

}

let david = {
    _name: 'David'
};

let person = new Person('Gareth', 100);

Reflect.set(person, 'name', 'Slinn');

console.log(Reflect.get(person, 'name', david));

Reflect.set(person, 'name', 'Slinn', david); // overwrite value of david name

console.log(Reflect.get(person, 'name', david));
