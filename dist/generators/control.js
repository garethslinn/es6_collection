'use strict';

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
                        _context.next = 13;
                        break;
                    }

                    _context.prev = 2;
                    _context.next = 5;
                    return i;

                case 5:
                    _context.next = 10;
                    break;

                case 7:
                    _context.prev = 7;
                    _context.t0 = _context['catch'](2);

                    console.log(_context.t0);

                case 10:
                    i++;
                    _context.next = 1;
                    break;

                case 13:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this, [[2, 7]]);
}

var it = gen(5);

console.log(it.next());
console.log(it.next());
console.log(it.next());

console.log(it.throw('An error has occured')); // force error
console.log(it.return('An error has occured')); // overwrite value