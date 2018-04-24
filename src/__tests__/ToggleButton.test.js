import React from 'react';
import ReactDOM from 'react-dom';
import { ToggleButton } from '../components/ToggleButton';
import renderer from 'react-test-renderer';

it('ToggleButton renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ToggleButton />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Toggle button does not render on desktop', () => {
  let props = {
    desktop: true
  };
  const c = renderer.create(<ToggleButton {...props} />);
  let tree = c.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Toggle button on non-desktop invites user to show map when list is visible ', () => {
  let props = {
    desktop: false,
    toggleStores: () => {},
    showStores: true
  };
  const c = renderer.create(<ToggleButton {...props} />);
  let tree = c.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Toggle button on non-desktop invites user to show store list when map is visible ', () => {
  let props = {
    desktop: false,
    toggleStores: () => {},
    showStores: false
  };
  const c = renderer.create(<ToggleButton {...props} />);
  let tree = c.toJSON();
  expect(tree).toMatchSnapshot();
});
