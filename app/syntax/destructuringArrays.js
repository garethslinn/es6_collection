let numbers = [1,2,3];

// using a rest parameter
// let [a, ...b] = numbers;

let [a,b,c,d = 4] = numbers;

//let a = numbers[0];
//let b = numbers[1];

console.log(a,b,c,d);

