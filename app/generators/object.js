let obj = {
    [Symbol.iterator]: gen
}

function *gen() {
    yield 1;
    yield 2;
}

for (let element of obj) {
    console.log(element)
}
