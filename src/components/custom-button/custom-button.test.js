import React from 'react';
import renderer from 'react-test-renderer';
import CustomButton from './custom-button.component';

it('should render CustomButton component', () => {
  const tree = renderer.create(<CustomButton />).toJSON();
  expect(tree).toMatchSnapshot();
});
