function wait(seconds) {
    return new Promise(function(resolve, reject) {
        if (seconds > 2) {
            reject('Rejected');
        } else {
            setTimeout(function() {
                seconds++;
                resolve(seconds);
            }, 1000);
        }

    });
}

wait(3)
    .then(wait)
    .then(function(seconds) {
        console.log(seconds);
    })
    .catch(function(error) {
        console.log(error);
    })



var a;
var a = 1;

alert(a);