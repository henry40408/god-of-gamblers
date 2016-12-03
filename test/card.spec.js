/* eslint-env jest */

import {
  SUITS, RANKS,
  SPADE,
  ACE,
} from '../lib/constants';

import Card from '../lib/card';

describe('Card', () => {
  it('exists', () => {
    expect(Card).toBeDefined();
  });

  describe('constructor', () => {
    it('accepts Hash', () => {
      const card = new Card({
        suit: SPADE,
        rank: ACE,
      });
      expect(card.suit).toBe(SPADE);
      expect(card.rank).toBe(ACE);
    });

    it('accepts String', () => {
      Object.keys(SUITS).forEach((suit) => {
        RANKS.forEach((rawRank) => {
          const rank = parseInt(rawRank, 10);
          const card = new Card(`${suit}${rank}`);
          expect(card.rank).toBe(rank);
          expect(card.suit).toBe(SUITS[suit]);
        });
      });
    });

    it('does not accept invalid suit', () => {
      expect(() => new Card({ suit: 'JOKER', rank: ACE })).toThrow();
    });

    it('does not accept invalid rank', () => {
      expect(() => new Card({ suit: SPADE, rank: 0 })).toThrow();
      expect(() => new Card({ suit: SPADE, rank: 14 })).toThrow();
    });
  });
});
