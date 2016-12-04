/* eslint-env jest */

import lodash from 'lodash';

import Card from '../card';
import Hand from '../hand';
import Deck from '../deck';

describe('Deck', () => {
  it('exists', () => {
    expect(Deck).toBeDefined();
  });

  it('holds 52 cards', () => {
    const deck = new Deck();
    expect(deck.cards).toHaveLength(52);
  });

  it('distributes a card', () => {
    const deck = new Deck();

    const card = deck.distribute();
    expect(card).toBeInstanceOf(Card);
    expect(deck.isShuffled).toBe(true);
    expect(deck.cards).toHaveLength(51);
  });

  it('distributes a hand', () => {
    const deck = new Deck();

    const hand = deck.distributeHand();
    expect(hand).toBeInstanceOf(Hand);
    expect(deck.isShuffled).toBe(true);
    expect(deck.cards).toHaveLength(47);
  });

  it('does not distribute when empty', () => {
    const deck = new Deck();
    lodash.times(52, () => deck.distribute());
    expect(() => deck.distribute()).toThrow();
  });
});
