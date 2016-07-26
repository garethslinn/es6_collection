"use strict";

var _marked = [gen].map(regeneratorRuntime.mark);

function gen(end) {
    var i;
    return regeneratorRuntime.wrap(function gen$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    i = 0;

                case 1:
                    if (!(i < end)) {
                        _context.next = 7;
                        break;
                    }

                    _context.next = 4;
                    return i;

                case 4:
                    i++;
                    _context.next = 1;
                    break;

                case 7:
                case "end":
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var it = gen(2);

console.log(it.next());
console.log(it.next());
console.log(it.next());