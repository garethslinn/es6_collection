class Person {
    constructor(name, age) {
        this._name = name;
        this.age = age;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

}

let david = {
    _name: 'David'
};

let person = new Person('Gareth', 100);



console.log(Reflect.ownKeys(person));
