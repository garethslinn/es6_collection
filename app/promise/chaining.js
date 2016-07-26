function wait(seconds) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            seconds++;
            resolve(seconds);
        }, 1000);
    });
}

wait(0)
    .then(wait)
    .then(function(seconds) {
        console.log(seconds);
    })