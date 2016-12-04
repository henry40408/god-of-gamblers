/* eslint-env jest */

import Hand from '../hand';
import Round from '../round';

import {
  FIRST_HAND_WINS,
  SECOND_HAND_WINS,
  EVEN,
} from '../constants';

const straight = new Hand('DA,D2,DK,D8,D10');
const straightFlush = new Hand('SA,S2,S3,S4,S5');

describe('Round', () => {
  describe('constructor', () => {
    it('takes two hands', () => {
      expect(() => new Round()).toThrow();
      expect(() => new Round(straight)).toThrow();
      expect(() => new Round(straight, straightFlush)).not.toThrow();
    });
  });

  describe('sort', () => {
    it('return first hand wins when it does', () => {
      const round = new Round(straightFlush, straight);
      expect(round.sort()).toBe(FIRST_HAND_WINS);
    });

    it('return second hand wins when it does', () => {
      const round = new Round(straight, straightFlush);
      expect(round.sort()).toBe(SECOND_HAND_WINS);
    });

    it('return even when no one wins', () => {
      const round = new Round(straight, straight);
      expect(round.sort()).toBe(EVEN);
    });
  });
});
