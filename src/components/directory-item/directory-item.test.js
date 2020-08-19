import React from 'react';
import renderer from 'react-test-renderer';
import DirectoryItem from './directory-item.component';

it('should render DirectoryItem component', () => {
  const component = renderer.create(<DirectoryItem />).toJSON();
  expect(component).toMatchSnapshot();
});
