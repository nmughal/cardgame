let deck = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
            2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// deck.length() ==== 52

module.exports = function buildDeck() {
  let shuffledDeck = [];
  let randomCard = Math.floor(Math.random() * deck.length() )// floor rounds it down to nearest integer,
  shuffledDeck.push(deck[randomCard]);

  return deck;
};
