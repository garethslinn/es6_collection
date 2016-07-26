"use strict";

var arr = [1, 2, 3];

arr[Symbol.iterator] = function () {
    var nextValue = 10;
    return {
        next: function next() {
            nextValue++;
            return {
                done: nextValue > 15 ? true : false,
                value: nextValue
            };
        }
    };
};

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var element = _step.value;

        console.log(element);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}