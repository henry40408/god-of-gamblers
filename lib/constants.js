import lodash from 'lodash';

export const SPADE = 'SPADE';
export const HEART = 'HEART';
export const DIAMOND = 'DIAMOND';
export const CLUB = 'CLUB';

export const JACK = 11;
export const QUEEN = 12;
export const KING = 13;
export const ACE = 14;

export const STRAIGHT_FLUSH = 'STRAIGHT_FLUSH';
export const FOUR_OF_A_KIND = 'FOUR_OF_A_KIND';
export const FULL_HOUSE = 'FULL_HOUSE';
export const FLUSH = 'FLUSH';
export const STRAIGHT = 'STRAIGHT';
export const NONE = 'NONE';

export const FIRST_HAND_WINS = -1;
export const EVEN = 0;
export const SECOND_HAND_WINS = 1;

export const SUITS = {
  S: SPADE,
  H: HEART,
  D: DIAMOND,
  C: CLUB,
};

export const RANKS = [
  ...lodash.range(2, 11),
  JACK,
  QUEEN,
  KING,
  ACE,
];
