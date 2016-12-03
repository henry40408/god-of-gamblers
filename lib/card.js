import {
  SUITS,
  ACE, JACK, QUEEN, KING,
} from './constants';

const RANK_ALIASES = { A: ACE, J: JACK, Q: QUEEN, K: KING };
function translateRank(rawRank) {
  return RANK_ALIASES[rawRank] || rawRank;
}

export default class Card {
  constructor(param) {
    if (typeof param === 'string') {
      this.stringConstructor(param);
    } else {
      this.hashConstructor(param);
    }
  }

  hashConstructor(param) {
    const suits = Object.values(SUITS);
    const {
      suit,
      rank,
    } = param;

    if (suits.indexOf(suit.toUpperCase()) === -1) {
      throw new Error(`${suit} is not a suit`);
    }
    this.suit = suit;

    if (rank >= 2 && rank <= ACE) {
      this.rank = rank;
    } else {
      throw new Error(`${rank} should be between ACE (1) and KING (13)`);
    }
  }

  stringConstructor(param) {
    const suits = Object.keys(SUITS);
    const suit = param.slice(0, 1);

    if (suits.indexOf(suit) === -1) {
      throw new Error(`${suit} is not a suit`);
    }

    const rank = parseInt(translateRank(param.slice(1)), 10);
    this.hashConstructor({
      suit: SUITS[suit],
      rank,
    });
  }
}
