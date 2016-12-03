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
});
