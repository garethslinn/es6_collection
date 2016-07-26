// Does not instantiate (uses static keyword).

class Helper {
    static logTwice (message) {
        console.log(message);
        console.log(message);
    }
}

Helper.logTwice('logged');