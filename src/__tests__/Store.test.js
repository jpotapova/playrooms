import React from 'react';
import { Store } from '../components/Store';
import storeData from '../data/stores';

describe('Store', () => {
  const s = new Store({ store: storeData.stores[0] });

  test('Static visible store information when there are no open stores', () => {
    let id = 1;
    let openStoreId = -1;
    expect(s.getClass(id, openStoreId)).toBe('list-group-item');
  });

  test('Hidden store info when other store is open ', () => {
    let id = 1;
    let openStoreId = 0;
    expect(s.getClass(id, openStoreId)).toBe('list-group-item hidden');
  });

  test('Full store info with fade in entrance when store is open', () => {
    let id = 1;
    let openStoreId = 1;
    expect(s.getClass(id, openStoreId)).toBe('list-group-item animated fadeIn');
  });
});
