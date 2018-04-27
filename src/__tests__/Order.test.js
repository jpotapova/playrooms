import React from 'react';
import { Order } from '../components/Order';
import renderer from 'react-test-renderer';

test('Order by renders without loader icon ', () => {
  let props = {
    orderBy: 'title',
    loadingLocation: false
  };
  const c = renderer.create(<Order {...props} />);
  let tree = c.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Order by renders with loader icon ', () => {
  let props = {
    orderBy: 'title',
    loadingLocation: true
  };
  const c = renderer.create(<Order {...props} />);
  let tree = c.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Order component disables only selected order item', () => {
  const c = new Order({ orderBy: 'title' });
  expect(c.getLiClass('title')).toBe('disabled');
  expect(c.getLiClass('distance')).toBeNull();
});

test('Order components is only displayed together with the list of stores', () => {
  const c = new Order({ orderBy: 'title' });
  expect(c.getContainerClass(-1)).toBe('order-container');
  expect(c.getContainerClass(1)).toBe('order-container hide');
});
