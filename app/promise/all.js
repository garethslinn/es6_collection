let promise1 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('Resolved');
    },1000);
});

let promise2 = new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject('Rejected');
        //resolve('Resolved');
    },2000);
});


// checks all promises in this case promsise2 is rejected so all are rejected.
// if both resolved then both would be returned ["Resolved", "Resolved"]

Promise.race([promise1, promise2])
    .then(function(success) {
        console.log(success);
    })
    .catch(function(error) {
        console.log(error);
    })

