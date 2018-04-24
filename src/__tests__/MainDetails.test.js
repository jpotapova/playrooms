import React from 'react';
import ReactDOM from 'react-dom';
import { MainDetails } from '../components/MainDetails';
import renderer from 'react-test-renderer';

test('Main Details renders the same', () => {
  let props = {
    showStore: () => {},
    title: 'Rainbow parkas',
    area: 'Pilaitė',
    address: 'Priegliaus g. 1, 2 aukštas',
    phone: '+370 615 88 063',
    weblink: 'https://rainbowparkas.lt/',
    web: 'rainbowparkas.lt'
  };
  const c = renderer.create(<MainDetails {...props} />);
  let tree = c.toJSON();
  expect(tree).toMatchSnapshot();
});
