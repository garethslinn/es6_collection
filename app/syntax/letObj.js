
let firstName = 'Gareths';
let lastName = 'Slinn';

let obj = {
    firstName: 'David',
    lastName,
    greet() {
        console.log(this.firstName + ' ' + this.lastName )
    }
};

obj.greet();

