let createDeck = require('./deck.js');
let cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];


function warGame() {
  let deck = createDeck();

  let numberOfWinsForPlayerOne = 0;
  let numberOfWinsForPlayerTwo = 0;
  let numberOfTies = 0;


  for (let i=0; i<52; i+=2){ //says add 2 to whatever i was and reassign to i
    console.log(deck[i], deck[i+1] );
    if (cardValues.indexOf(deck[i]) > cardValues.indexOf(deck [i+1])) {}
    if (deck[i] > deck[i+1] ){
      console.log('player 1 wins the hand');
      numberOfWinsForPlayerOne++;
    else if (cardValues.indexOf(deck[i]) < cardValues.indexOf(deck [i+1])) {}
    } else if (deck[i] < deck [i+1] ) {
      console.log('player 2 wins the hand');
      numberOfWinsForPlayerTwo++;
    } else {
      console.log ('they tied!');
      numberOfTies++;
    }
  }

  console.log('player 1 wins, numberOfWinsForPlayerOne');
  console.log('player 2 wins, numberOfWinsForPlayerOne');
  console.log('ties', numberOfTies);

} //code block, if we see an equal sign it's an object

//need to call the function

warGame(); //will excute, create the deck, and print two by two

// let gameDeck = required ('./deck.js');
//
// let results = {
//   date: 'MM-DD-YYYY at HH:mm',   // (with the actual date/time of this game)
//   players: [
//     { name: '[first players name]', numberofWins: 0, winRatio: 0 },
//     { name: '[second players name]', numberofWins: 0, winRatio: 0 }
//   ],
//   numberOfTies: 0
// };
//
// let deck = buildDeck();
//
//
// for (let i = 0; i <=51; i += 2) { // deck to start at index 0 and go to index 51 (full deck)
//   if ( deck(i) > deck[i+1] ){
//     results.players[0].numberofWins;
//   }
// };
//26 rounds of the game (half of 52)
