/* eslint-env jest */

import Card from '../lib/card';
import Deck from '../lib/deck';

describe('Deck', () => {
  it('exists', () => {
    expect(Deck).toBeDefined();
  });

  it('holds 52 cards', () => {
    const deck = new Deck();
    expect(deck.cards).toHaveLength(52);
  });

  it('distribute a card', () => {
    const deck = new Deck();

    const card = deck.distribute();
    expect(card).toBeInstanceOf(Card);
    expect(deck.isShuffled).toBe(true);
    expect(deck.cards).toHaveLength(51);
  });
});
