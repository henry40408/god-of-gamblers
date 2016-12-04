import Hand from './hand';

import {
  STRAIGHT_FLUSH,
  FOUR_OF_A_KIND,
  FULL_HOUSE,
  FLUSH,
  STRAIGHT,
  NONE,
  FIRST_HAND_WINS,
  SECOND_HAND_WINS,
  EVEN,
} from './constants';

const TYPE_RANKS = [
  STRAIGHT_FLUSH,
  FOUR_OF_A_KIND,
  FULL_HOUSE,
  FLUSH,
  STRAIGHT,
  NONE,
];

export default class Round {
  constructor(firstHand, secondHand) {
    if (!(firstHand instanceof Hand)) {
      throw new Error('first hand is not a hand of cards');
    }
    this.firstHand = firstHand;

    if (!(secondHand instanceof Hand)) {
      throw new Error('second hand is not a hand of cards');
    }
    this.secondHand = secondHand;
  }

  sort() {
    const firstHandRank = TYPE_RANKS.indexOf(this.firstHand.getType());
    const secondHandRank = TYPE_RANKS.indexOf(this.secondHand.getType());

    if (firstHandRank < secondHandRank) {
      return FIRST_HAND_WINS;
    } else if (firstHandRank > secondHandRank) {
      return SECOND_HAND_WINS;
    } else {
      return EVEN;
    }
  }
}
