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

test('Displays toMap button on small screens', () => {
  let props = {
    openStore: 1,
    id: 1,
    hours: [['I-V', '12:00 — 21:00'], ['VI-VII', '10:00 — 21:00']]
  };
  let c = new MoreDetails(props);
  expect(c.getClass(true)).toBe('btn btn-info');
});

test('Hides toMap button on big screens', () => {
  let props = {
    openStore: 1,
    id: 1,
    hours: [['I-V', '12:00 — 21:00'], ['VI-VII', '10:00 — 21:00']]
  };
  let c = new MoreDetails(props);
  expect(c.getClass(false)).toBe('btn btn-info hide');
});
