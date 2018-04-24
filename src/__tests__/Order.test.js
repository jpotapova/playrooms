import React from 'react';
import { Order } from '../components/Order';

describe('Order', () => {
  const o = new Order();

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
    let orderedStores = o.saveDistances(initialStores, position);
    expect(orderedStores).toEqual([
      {
        title: 'Ledinukas',
        lat: 54.72347,
        lng: 25.280647,
        distance: 1.6
      },
      {
        title: 'Juokų maišėlis',
        lat: 54.677093,
        lng: 25.254868,
        distance: 4.5
      },
      {
        title: 'Rainbow parkas',
        lat: 54.71011,
        lng: 25.18736,
        distance: 4.6
      }
    ]);
  });
});
