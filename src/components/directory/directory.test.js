import React from 'react';
import renderer from 'react-test-renderer';
import Directory from './directory.component';

it('should render Directory component', () => {
  const component = renderer.create(<Directory />).toJSON();
  expect(component).toMatchSnapshot();
});
