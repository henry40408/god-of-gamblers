/* eslint-env jest */

import lodash from 'lodash';

import Deck from '../lib/deck';
import Hand from '../lib/hand';

function giveMeCards(times) {
  const deck = new Deck();
  return lodash.times(times, () => deck.distribute());
}

describe('Hand', () => {
  it('exists', () => {
    expect(Hand).toBeDefined();
  });

  describe('constructor', () => {
    describe('accepts array', () => {
      it('does not takes four cards', () => {
        const cards = giveMeCards(4);
        expect(() => new Hand(cards)).toThrow();
      });

      it('takes five cards', () => {
        const cards = giveMeCards(5);
        expect(() => new Hand(cards)).not.toThrow();

        const hand = new Hand(cards);
        expect(hand.cards).toHaveLength(5);
      });

      it('does not takes six cards', () => {
        const cards = giveMeCards(6);
        expect(() => new Hand(cards)).toThrow();
      });
    });

    describe('accepts string', () => {
      it('does not takes four cards', () => {
        expect(() => new Hand('DA,D2,DK,D8')).toThrow();
      });

      it('takes five cards', () => {
        const cards = 'DA,D2,DK,D8,D10';
        expect(() => new Hand(cards)).not.toThrow();

        const hand = new Hand(cards);
        expect(hand.cards).toHaveLength(5);
      });

      it('does not takes six cards', () => {
        const cards = 'DA,D2,DK,D8,D10,DJ';
        expect(() => new Hand(cards)).toThrow();
      });
    });
  });

  describe('isFlush', () => {
    it('returns true when the hand is a flush', () => {
      const flush = new Hand('DA,D2,DK,D8,D10');
      expect(flush.isFlush()).toBe(true);
    });

    it('returns false when the hand is not a flush', () => {
      const fullHouse = new Hand('SA,CA,HA,SJ,HJ');
      expect(fullHouse.isFlush()).toBe(false);

      const twoPair = new Hand('DK,SK,DQ,CQ,D2');
      expect(twoPair.isFlush()).toBe(false);
    });
  });

  describe('isStraight', () => {
    it('returns true when the hand is a straight', () => {
      const straight = new Hand('H5,D6,C7,S8,D9');
      expect(straight.isStraight()).toBe(true);
    });

    it('returns true when the hand is not a straight', () => {
      const fullHouse = new Hand('SA,CA,HA,SJ,HJ');
      expect(fullHouse.isStraight()).toBe(false);

      const twoPair = new Hand('DK,SK,DQ,CQ,D2');
      expect(twoPair.isStraight()).toBe(false);
    });
  });

  describe('isStraightFlush', () => {
    it('returns true when the hand is a straight flush', () => {
      const straightFlush = new Hand('C3,C4,C5,C6,C7');
      expect(straightFlush.isStraightFlush()).toBe(true);
    });
  });

  describe('isFourOfAKind', () => {
    it('returns true when the hand is a four of a kind', () => {
      const fourOfAKind = new Hand('SK,SA,HA,DA,CA');
      expect(fourOfAKind.isFourOfAKind()).toBe(true);
    });
  });

  describe('isFullHouse', () => {
    it('returns true when the hand is a full house', () => {
      const fullHouse = new Hand('SA,CA,HA,SJ,HJ');
      expect(fullHouse.isFullHouse()).toBe(true);
    });
  });
});
