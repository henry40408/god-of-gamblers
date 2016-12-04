/* eslint-env jest */

import {
  SPADE, HEART, DIAMOND, CLUB,
  ACE, JACK, QUEEN, KING,
} from '../constants';

describe('Constants', () => {
  it('contains all suits', () => {
    expect(SPADE).toBeDefined();
    expect(HEART).toBeDefined();
    expect(DIAMOND).toBeDefined();
    expect(CLUB).toBeDefined();
  });

  it('contains all face ranks', () => {
    expect(JACK).toBe(11);
    expect(QUEEN).toBe(12);
    expect(KING).toBe(13);
    expect(ACE).toBe(14);
  });
});
