import React from 'react';
import ReactDOM from 'react-dom';
import { MoreDetails } from '../components/MoreDetails';
import renderer from 'react-test-renderer';

test('More Details renders the same when all stores are closed', () => {
  let props = {
    openStore: -1,
    id: 1,
    hours: [['I-V', '12:00 — 21:00'], ['VI-VII', '10:00 — 21:00']]
  };
  const c = renderer.create(<MoreDetails {...props} />);
  let tree = c.toJSON();
  expect(tree).toMatchSnapshot();
});

test('More Details renders the same when current store is open', () => {
  let props = {
    openStore: 1,
    id: 1,
    hours: [['I-V', '12:00 — 21:00'], ['VI-VII', '10:00 — 21:00']]
  };
  const c = renderer.create(<MoreDetails {...props} />);
  let tree = c.toJSON();
  expect(tree).toMatchSnapshot();
});

test('More Details renders the same when different is open', () => {
  let props = {
    openStore: 2,
    id: 1,
    hours: [['I-V', '12:00 — 21:00'], ['VI-VII', '10:00 — 21:00']]
  };
  const c = renderer.create(<MoreDetails {...props} />);
  let tree = c.toJSON();
  expect(tree).toMatchSnapshot();
});
