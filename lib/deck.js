import lodash from 'lodash';

import {
  SUITS,
  RANKS,
} from './constants';

import Card from './card';

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
   */
  distribute() {
    if (!this.isShuffled) this.shuffle();
    return this.cards.pop();
  }
}
