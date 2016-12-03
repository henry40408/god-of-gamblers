import lodash from 'lodash';

import {
  SUITS,
  RANKS,
} from './constants';

import Card from './card';
import Hand from './hand';

export default class Deck {
  constructor() {
    this.isShuffled = false;
    this.cards = [];

    Object.keys(SUITS).forEach((suit) => {
      RANKS.forEach((rank) => {
        this.cards.push(new Card(`${suit}${rank}`));
      });
    });
  }

  shuffle() {
    this.cards = lodash.shuffle(this.cards);
    this.isShuffled = true;
  }

  /**
   * Distribute a card from deck and make sure deck has been shuffled
   * before distribution
   * @returns {Card} a card
   * @throw {Error} when deck is empty
   */
  distribute() {
    if (this.isEmpty()) return false;
    if (!this.isShuffled) this.shuffle();
    return this.cards.pop();
  }

  distributeHand() {
    if (!this.isShuffled) this.shuffle();
    const cards = lodash.times(5, () => this.distribute());
    return new Hand(cards);
  }

  isEmpty() {
    if (this.cards.length === 0) {
      throw new Error('deck is empty');
    }
    return false;
  }
}
