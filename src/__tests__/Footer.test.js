import React from 'react';
import ReactDOM from 'react-dom';
import { Footer } from '../components/Footer';
import renderer from 'react-test-renderer';

it('Footer renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Footer renders the same', () => {
  const c = renderer.create(<Footer />);
  let tree = c.toJSON();
  expect(tree).toMatchSnapshot();
});
