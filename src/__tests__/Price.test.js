import React from 'react';
import ReactDOM from 'react-dom';
import { Price } from '../components/Price';
import renderer from 'react-test-renderer';

test('Price renders with ? when not known', () => {
  let props = {
    price: {
      h: 0
    }
  };
  const c = renderer.create(<Price {...props} />);
  let tree = c.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Price renders the same when it is supplied', () => {
  let props = {
    price: {
      h: 3
    }
  };
  const c = renderer.create(<Price {...props} />);
  let tree = c.toJSON();
  expect(tree).toMatchSnapshot();
});
