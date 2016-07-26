let arr = [1,2,3];

arr[Symbol.iterator] = function() {
    return {
        next: function() {
            return {

            }
        }
    }
}

let it = arr[Symbol.iterator]();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());  // undefined - done: true;
