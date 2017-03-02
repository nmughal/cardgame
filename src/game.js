let gameDeck = required (./deck.js);

let results = {
  date: 'MM-DD-YYYY at HH:mm',   // (with the actual date/time of this game)
  players: [
    { name: '[first players name]', numberofWins: 0, winRatio: 0 },
    { name: '[second players name]', numberofWins: 0, winRatio: 0 }
  ],
  numberOfTies: 0
};

let deck = buildDeck();


for (let i = 0; i <=51; i += 2) { // deck to start at index 0 and go to index 51 (full deck)
  if ( deck(i) > deck[i+1] ){
    results.players[0].numberofWins;
  }
};
