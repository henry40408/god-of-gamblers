import {
  ACE, JACK, QUEEN, KING,
  SPADE, HEART, DIAMOND, CLUB,
  // STRAIGHT_FLUSH, FOUR_OF_A_KIND, FULL_HOUSE, FLUSH, STRAIGHT, NONE,
} from './constants';

import Card from './card';

const SUIT_ORDER = [SPADE, HEART, DIAMOND, CLUB];

function sortBySuit(cards) {
  return cards.sort((a, b) => (
    SUIT_ORDER.indexOf(a.suit) - SUIT_ORDER.indexOf(b.suit)
  ));
}

function sortByRank(cards) {
  return cards.sort((a, b) => a.rank - b.rank);
}

export default class Hand {
  constructor(cards) {
    this.type = false;

    if (typeof cards === 'string') {
      this.strConstructor(cards);
    } else {
      this.arrConstructor(cards);
    }
  }

  arrConstructor(cards) {
    if (cards.length !== 5) {
      throw new Error('needs exactly 5 cards');
    }
    this.cards = cards;
  }

  strConstructor(rawCards) {
    const cards = rawCards.split(',').map(c => new Card(c));
    this.arrConstructor(cards);
  }

  isFlush() {
    const cards = sortBySuit(this.cards);
    return cards[0].suit === cards[4].suit;
  }

  isStraight() {
    const cards = sortByRank(this.cards);

    if (cards[4].rank === ACE) {
      const bottomUp = cards[0].rank === 2 &&
            cards[1].rank === 3 &&
            cards[2].rank === 4 &&
            cards[3].rank === 5;
      const topDown = cards[0] === 10 &&
            cards[1].rank === JACK &&
            cards[2].rank === QUEEN &&
            cards[3].rank === KING;
      return bottomUp || topDown;
    }

    let testRank = cards[0].rank + 1;
    for (let i = 1; i < cards.length; i += 1) {
      if (cards[i].rank !== testRank) {
        return false;
      }
      testRank += 1;
    }
    return true;
  }

  isStraightFlush() {
    return this.isStraight() && this.isFlush();
  }
}
