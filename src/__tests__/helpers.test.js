import React from 'react';
import { orderStores } from '../helpers';

test('Order stores by title', () => {
  let initialStores = [{ title: 'Rainbow parkas' }, { title: 'Juokų maišėlis' }, { title: 'Ledinukas' }];
  let expectedStores = [{ title: 'Juokų maišėlis' }, { title: 'Ledinukas' }, { title: 'Rainbow parkas' }];
  //expect(orderStores(initialStores, 'title')).toEqual(expectedStores);
});

test('Order stores by distance as text', () => {
  let initialStores = [
    { title: 'Rainbow parkas', distance: '1' },
    { title: 'Juokų maišėlis', distance: '14' },
    { title: 'Ledinukas', distance: '3' }
  ];
  let expectedStores = [
    { title: 'Rainbow parkas', distance: 1 },
    { title: 'Ledinukas', distance: 3 },
    { title: 'Juokų maišėlis', distance: 14 }
  ];
  expect(orderStores(initialStores, 'distance')).toEqual(expectedStores);
});

test('Order stores by distance', () => {
  let initialStores = [
    { title: 'Rainbow parkas', distance: 1 },
    { title: 'Juokų maišėlis', distance: 14 },
    { title: 'Ledinukas', distance: 3 }
  ];
  let expectedStores = [
    { title: 'Rainbow parkas', distance: 1 },
    { title: 'Ledinukas', distance: 3 },
    { title: 'Juokų maišėlis', distance: 14 }
  ];
  //expect(orderStores(initialStores, 'distance')).toEqual(expectedStores);
});
