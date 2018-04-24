import React from 'react';
import { Store } from '../components/Store';
import storeData from '../data/stores';
import renderer from 'react-test-renderer';

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

test('Store renders correctly when it is closed', () => {
  let props = {
    id: 1,
    openStore: 2,
    showStore: () => {},
    store: storeData.stores[0]
  };
  Object.assign(props);

  const c = renderer.create(<Store {...props} />);
  let tree = c.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Store renders correctly when it is open', () => {
  let props = {
    id: 1,
    openStore: 1,
    showStore: () => {},
    store: storeData.stores[0]
  };
  Object.assign(props);

  const c = renderer.create(<Store {...props} />);
  let tree = c.toJSON();
  expect(tree).toMatchSnapshot();
});
