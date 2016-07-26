'use strict';

var _marked = [select].map(regeneratorRuntime.mark);

// Generate an iterator

function select() {
    return regeneratorRuntime.wrap(function select$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    _context.next = 2;
                    return 'House';

                case 2:
                    _context.next = 4;
                    return 'Garage';

                case 4:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked[0], this);
}

var it = select();
console.log(it.next());
console.log(it.next());
console.log(it.next());