import React from 'react';
import { StoreList } from '../components/StoreList';
import storeData from '../data/stores';

describe('Store List', () => {
  const sl = new StoreList();

  test('No store list animation on desktop', () => {
    let desktop = true;
    expect(sl.getClass(desktop)).toBe('list-group');
  });

  test('On small screens slide in store list from the left', () => {
    let desktop = false;
    let showStores = true;
    expect(sl.getClass(desktop, showStores)).toBe('list-group animated slideInLeft');
  });

  test('On small screens slide out store list to the left', () => {
    let desktop = false;
    let showStores = false;
    expect(sl.getClass(desktop, showStores)).toBe('list-group animated slideOutLeft');
  });
});
