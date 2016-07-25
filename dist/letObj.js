'use strict';

var firstName = 'Gareths';
var lastName = 'Slinn';

var obj = {
    firstName: 'David',
    lastName: lastName,
    greet: function greet() {
        console.log(this.firstName + ' ' + this.lastName);
    }
};

obj.greet();