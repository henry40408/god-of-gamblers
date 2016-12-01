/* eslint-env jest */

import {
  ACE, JACK, KING, QUEEN,
  CLUB, DIAMOND, HEART, SPADE,
  Card,
} from '../lib/card';

describe('Card', () => {
  it('contains all suits', () => {
    expect(SPADE).toBeDefined();
    expect(HEART).toBeDefined();
    expect(DIAMOND).toBeDefined();
    expect(CLUB).toBeDefined();
  });

  it('contains all face ranks', () => {
    expect(ACE).toBe(1);
    expect(JACK).toBe(11);
    expect(QUEEN).toBe(12);
    expect(KING).toBe(13);
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
      'SHDC'.split('').forEach((suit) => {
        '1,2,3,4,5,6,7,8,9,10,11,12,13'.split(',').forEach((rawRank) => {
          const rank = parseInt(rawRank, 10);
          const card = new Card(`${suit}${rank}`);
          expect(card.rank).toBe(rank);
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
