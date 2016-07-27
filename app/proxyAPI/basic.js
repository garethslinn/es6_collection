let person = {
    age: 100,
    name: 'Gareth'
};

let handler = { // check to see if property is on an object
    get: function(target, name) {
        return name in target ? target[name]: 'Non exisitant';
    },

    set: function(target, property, value) {
        if (value.length >= 2) {
            Reflect.set(target, property, value);
        }
    }
};

var proxy = new Proxy(person, handler);

proxy.name = 'Slinn'

console.log(proxy.age); // 100
console.log(proxy.name); // Non existant 