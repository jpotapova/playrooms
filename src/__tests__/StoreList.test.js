import React from 'react';
import { StoreList } from '../components/StoreList';
import storeData from '../data/stores';
import renderer from 'react-test-renderer';

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

test('Store list always statically renders on desktop with all stores', () => {
  let props = {
    desktop: true,
    stores: storeData.stores,
    showStores: () => {},
    showStore: () => {},
    openStore: -1,
    orderBy: 'title'
  };
  const c = renderer.create(<StoreList {...props} />);
  let tree = c.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Store list always statically renders on desktop with one store open', () => {
  let props = {
    desktop: true,
    stores: storeData.stores,
    showStores: () => {},
    showStore: () => {},
    openStore: 1,
    orderBy: 'title'
  };
  const c = renderer.create(<StoreList {...props} />);
  let tree = c.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Store list is animated on non-desktop when no stores are open', () => {
  let props = {
    desktop: false,
    stores: storeData.stores,
    showStores: () => {},
    showStore: () => {},
    openStore: -1,
    orderBy: 'title'
  };
  const c = renderer.create(<StoreList {...props} />);
  let tree = c.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Store list is animated on non-desktop when one store is open', () => {
  let props = {
    desktop: false,
    stores: storeData.stores,
    showStores: () => {},
    showStore: () => {},
    openStore: 1,
    orderBy: 'title'
  };
  const c = renderer.create(<StoreList {...props} />);
  let tree = c.toJSON();
  expect(tree).toMatchSnapshot();
});
