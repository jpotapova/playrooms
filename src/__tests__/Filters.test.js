import React from 'react';
import { Filters } from '../components/Filters';
import storeData from '../data/stores';

describe('Filters', () => {
  const sl = new Filters();

  test('No store list animation on desktop', () => {
    // let desktop = true;
    // expect(sl.getClass(desktop)).toBe('list-group');
  });
});
