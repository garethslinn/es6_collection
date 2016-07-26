let arr = [1,2,3];

arr[Symbol.iterator] = function() {
    let nextValue = 10;
    return {
        next: function() {
            nextValue++;
            return {
                done: nextValue > 15 ? true : false,
                value: nextValue
            }
        }
    }
}

for (let element of arr) {
    console.log(element)
}

