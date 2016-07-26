class Person {
    construtor(name) {
        this.name = name;
    }

    get name() {
        return this._name.toUpperCase();
    }

    set name(value) {
        if (value.lengh > 2) {
            this._name = value;
        }
        console.log('Rejected');
    }
}

let person = new Person('abc');

console.log(person);