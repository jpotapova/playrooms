import React from 'react';
import { Distance } from '../components/Distance';
import renderer from 'react-test-renderer';

test('Distance is not rendered when no number is supplied', () => {
  const emptyDistance = renderer.create(<Distance />);
  let tree = emptyDistance.toJSON();
  expect(tree).toBeNull();
});

test('Distance is rendered when number is supplied', () => {
  const d = renderer.create(<Distance distance={1} />);
  let tree = d.toJSON();
  expect(tree).toMatchSnapshot();
});
