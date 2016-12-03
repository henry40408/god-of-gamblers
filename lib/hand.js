export default class Hand {
  constructor(cards) {
    if (cards.length !== 5) {
      throw new Error('needs exactly 5 cards');
    }
    this.cards = cards;
  }
}
