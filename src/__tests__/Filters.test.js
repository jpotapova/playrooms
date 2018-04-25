import React from 'react';
import { Filters } from '../components/Filters';
import renderer from 'react-test-renderer';
import storeData from '../data/stores';

test('Filters component renders', () => {
  let props = {
    cities: storeData.cities
  };
  const c = renderer.create(<Filters {...props} />);
  let tree = c.toJSON();
  expect(tree).toMatchSnapshot();
});
