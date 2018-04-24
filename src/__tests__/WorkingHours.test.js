import React from 'react';
import ReactDOM from 'react-dom';
import { WorkingHours } from '../components/WorkingHours';
import renderer from 'react-test-renderer';

test('WorkingHours renders the same', () => {
  let props = {
    hours: [['I-V', '12:00 — 21:00'], ['VI-VII', '10:00 — 21:00']]
  };
  const c = renderer.create(<WorkingHours {...props} />);
  let tree = c.toJSON();
  expect(tree).toMatchSnapshot();
});
