export const SPADE = 'SPADE';
export const HEART = 'HEART';
export const DIAMOND = 'DIAMOND';
export const CLUB = 'CLUB';

export const ACE = 1;
export const JACK = 11;
export const QUEEN = 12;
export const KING = 13;

const SUITS = {
  S: SPADE,
  H: HEART,
  D: DIAMOND,
  C: CLUB,
};

export class Card {
  constructor(param) {
    if (typeof param === 'string') {
      this.stringConstructor(param);
    } else {
      this.hashConstructor(param);
    }
  }

  hashConstructor(param) {
    const suits = Object.values(SUITS);
    const { suit, rank } = param;

    if (suits.indexOf(suit) === -1) {
      throw new Error(`${suit} is not a suit`);
    }
    this.suit = suit;

    if (rank >= ACE && rank <= KING) {
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

    const rank = parseInt(param.slice(1), 10);
    this.hashConstructor({ suit: SUITS[suit], rank });
  }
}