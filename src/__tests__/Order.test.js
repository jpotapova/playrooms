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
