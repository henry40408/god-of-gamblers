import lodash from 'lodash';

export const SPADE = 'SPADE';
export const HEART = 'HEART';
export const DIAMOND = 'DIAMOND';
export const CLUB = 'CLUB';

export const ACE = 1;
export const JACK = 11;
export const QUEEN = 12;
export const KING = 13;

export const SUITS = {
  S: SPADE,
  H: HEART,
  D: DIAMOND,
  C: CLUB,
};

export const RANKS = [
  ACE,
  ...lodash.range(2, 11),
  JACK,
  QUEEN,
  KING,
];
