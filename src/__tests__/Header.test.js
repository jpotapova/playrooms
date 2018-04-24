import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from '../components/Header';
import renderer from 'react-test-renderer';

it('Header renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Header renders the same', () => {
  const c = renderer.create(<Header />);
  let tree = c.toJSON();
  expect(tree).toMatchSnapshot();
});
