let cardAce = {
    name: 'Ace of spades'
};

let cardKing = {
    name: 'King of clubs'
};

let deck = new Map();

// set keys
deck.set('as', cardAce);
deck.set('kc', cardKing);

console.log(deck.size); //2

deck.set('as', cardAce); // this overwrites existing key value pair
console.log(deck.size); //2

console.log(deck.get('as')); // obj

deck.delete('as'); // remove this key value pair.
deck.clear(); // delelte all key value pairs
