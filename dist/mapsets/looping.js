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

console.log(deck.keys()); // iterator

for (key of deck.keys()) {
    console.log(key);
}

for (value of deck.values()) {
    console.log(value);
}

for (entry of deck.entries()) {
    console.log(entry);
}

for (entry of deck) { // same result as above
    console.log(entry);
}



