import React from 'react';
import { orderStores, saveDistances, samePosition, filterStores } from '../helpers';

test('Order stores by title', () => {
  let initialStores = [{ title: 'Rainbow parkas' }, { title: 'Juokų maišėlis' }, { title: 'Ledinukas' }];
  let expectedStores = [{ title: 'Juokų maišėlis' }, { title: 'Ledinukas' }, { title: 'Rainbow parkas' }];
  expect(orderStores(initialStores, 'title')).toEqual(expectedStores);
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
  expect(orderStores(initialStores, 'distance')).toEqual(expectedStores);
});

test('Order stores by price', () => {
  let initialStores = [
    {
      title: 'Rainbow parkas',
      price: {
        h: 1
      }
    },
    {
      title: 'Juokų maišėlis',
      price: {
        h: 5
      }
    },
    {
      title: 'Ledinukas',
      price: {
        h: 4
      }
    }
  ];
  let expectedStores = [
    {
      title: 'Rainbow parkas',
      price: {
        h: 1
      }
    },
    {
      title: 'Ledinukas',
      price: {
        h: 4
      }
    },
    {
      title: 'Juokų maišėlis',
      price: {
        h: 5
      }
    }
  ];
  expect(orderStores(initialStores, 'price')).toEqual(expectedStores);
});

test('Unknown price goes to the end of the list', () => {
  let initialStores = [
    {
      title: 'Rainbow parkas',
      price: {
        h: 0
      }
    },
    {
      title: 'Juokų maišėlis',
      price: {
        h: 5
      }
    },
    {
      title: 'Ledinukas',
      price: {
        h: 4
      }
    }
  ];
  let expectedStores = [
    {
      title: 'Ledinukas',
      price: {
        h: 4
      }
    },
    {
      title: 'Juokų maišėlis',
      price: {
        h: 5
      }
    },
    {
      title: 'Rainbow parkas',
      price: {
        h: 0
      }
    }
  ];
  expect(orderStores(initialStores, 'price')).toEqual(expectedStores);
});

describe('Order', () => {
  test('order by distance', () => {
    let position = {
      latitude: 54.717689,
      longitude: 25.257163
    };
    let initialStores = [
      {
        title: 'Rainbow parkas',
        lat: 54.71011,
        lng: 25.18736
      },
      {
        title: 'Juokų maišėlis',
        lat: 54.677093,
        lng: 25.254868
      },
      {
        title: 'Ledinukas',
        lat: 54.72347,
        lng: 25.280647
      }
    ];
    let resultStores = saveDistances(initialStores, position);
    expect(resultStores).toEqual([
      {
        title: 'Rainbow parkas',
        lat: 54.71011,
        lng: 25.18736,
        distance: 4.6
      },
      {
        title: 'Juokų maišėlis',
        lat: 54.677093,
        lng: 25.254868,
        distance: 4.5
      },
      {
        title: 'Ledinukas',
        lat: 54.72347,
        lng: 25.280647,
        distance: 1.6
      }
    ]);
  });
});

test('samePosition recognises new position ', () => {
  let initialPosition = {
    latitude: undefined,
    longitude: undefined
  };
  let newPosition = {
    latitude: 54.7262,
    longitude: 25.27158
  };
  expect(samePosition(initialPosition, newPosition)).toBe(false);
});

test('samePosition recognises same position ', () => {
  let initialPosition = {
    latitude: 54.7262,
    longitude: 25.27158
  };
  let newPosition = {
    latitude: 54.7262,
    longitude: 25.27158
  };
  expect(samePosition(initialPosition, newPosition)).toBe(true);
});

test('samePosition recognises position change ', () => {
  let initialPosition = {
    latitude: 54.7262,
    longitude: 25.2715
  };
  let newPosition = {
    latitude: 54.7262,
    longitude: 25.27158
  };
  expect(samePosition(initialPosition, newPosition)).toBe(false);
});

test('filterStores returns only relevant store entries', () => {
  let initialStores = [
    {
      id: 17,
      title: 'Smuflandas',
      city: 'Kaunas'
    },
    {
      id: 18,
      title: 'Karkarlandas',
      city: 'Kaunas'
    },
    {
      id: 15,
      title: 'Nuotykių miestas, Akropolis',
      city: 'Vilnius'
    }
  ];
  let vilniusStores = [
    {
      id: 15,
      title: 'Nuotykių miestas, Akropolis',
      city: 'Vilnius'
    }
  ];
  let kaunasStores = [
    {
      id: 17,
      title: 'Smuflandas',
      city: 'Kaunas'
    },
    {
      id: 18,
      title: 'Karkarlandas',
      city: 'Kaunas'
    }
  ];
  expect(filterStores(initialStores, { city: 'Vilnius' })).toEqual(vilniusStores);
  expect(filterStores(initialStores, { city: 'Kaunas' })).toEqual(kaunasStores);
});
