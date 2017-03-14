let cardValues = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

module.exports = function cardDeck() {
  let deck = [];

  for (let i=0; i<4; i++) {
    deck = deck.concat(cardValues);
  }

let temporarySpot;

  for (let i=0; i<100; i++) {
    let randomCard = Math.floor(Math.random() * 52);
    let randomCard2 = Math.floor(Math.random() * 52);
    temporarySpot = deck[randomCard];
    deck[randomCard] = deck[randomCard2];
    temporarySpot = deck[randomCard2];

  }
  return deck; //getting back the collection
};

module.exports();
