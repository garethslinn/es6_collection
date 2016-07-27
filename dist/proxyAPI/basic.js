'use strict';

var person = {
    age: 100,
    name: 'Gareth'
};

var handler = { // check to see if property is on an object
    get: function get(target, name) {
        return name in target ? target[name] : 'Non exisitant';
    },

    set: function set(target, property, value) {
        if (value.length >= 2) {
            Reflect.set(target, property, value);
        }
    }
};

var proxy = new Proxy(person, handler);

proxy.name = 'Slinn';

console.log(proxy.age); // 100
console.log(proxy.name); // Non existant