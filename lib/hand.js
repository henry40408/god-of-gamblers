import {
  ACE,
  CLUB,
  DIAMOND,
  FLUSH,
  FOUR_OF_A_KIND,
  FULL_HOUSE,
  HEART,
  JACK,
  KING,
  NONE,
  QUEEN,
  SPADE,
  STRAIGHT,
  STRAIGHT_FLUSH,
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

  getType() {
    if (this.type !== false) {
      return this.type;
    }

    if (this.isStraightFlush()) {
      this.type = STRAIGHT_FLUSH;
    } else if (this.isFourOfAKind()) {
      this.type = FOUR_OF_A_KIND;
    } else if (this.isFullHouse()) {
      this.type = FULL_HOUSE;
    } else if (this.isFlush()) {
      this.type = FLUSH;
    } else if (this.isStraight()) {
      this.type = STRAIGHT;
    } else {
      this.type = NONE;
    }

    return this.type;
  }

  isStraightFlush() {
    return this.isStraight() && this.isFlush();
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

  isFourOfAKind() {
    const cards = sortByRank(this.cards);

    const lastDifferent = cards[0].rank === cards[1].rank &&
      cards[1].rank === cards[2].rank &&
      cards[2].rank === cards[3].rank;
    const firstDifferent = cards[1].rank === cards[2].rank &&
      cards[2].rank === cards[3].rank &&
      cards[3].rank === cards[4].rank;

    return firstDifferent || lastDifferent;
  }

  isFullHouse() {
    const cards = sortByRank(this.cards);

    const lowerMajor = cards[0].rank === cards[1].rank &&
      cards[1].rank === cards[2].rank &&
      cards[3].rank === cards[4].rank;
    const higherMajor = cards[0].rank === cards[1].rank &&
      cards[2].rank === cards[3].rank &&
      cards[3].rank === cards[4].rank;

    return lowerMajor || higherMajor;
  }
}
