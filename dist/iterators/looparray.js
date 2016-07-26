'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var person = _defineProperty({
    name: 'Gareth',
    hobbies: ['Sports', 'Cooking']
}, Symbol.iterator, function () {
    var i = 0;
    var hobbies = this.hobbies;
    return {
        next: function next() {
            var value = hobbies[i];
            i++;
            return {
                done: i > hobbies.length ? true : false,
                value: value
            };
        }
    };
});

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = person[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var hobby = _step.value;

        console.log(hobby);
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