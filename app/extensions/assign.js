class Obj1 {
    constructor() {
        this.a = 1;
    }
}

class Obj2 {
    constructor() {
        this.b = 2;
    }
}

var obj1 = new Obj1();
var obj2 = new Obj2();

//Take first object and merge all other objects into it
var obj = Object.assign(obj2, obj1);

console.log(obj.__proto__ === Obj2.prototype);