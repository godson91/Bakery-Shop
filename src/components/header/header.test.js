import React from 'react';
import renderer from 'react-test-renderer';

import Header from './header.component';

describe('Header component', () => {
  it('should render Header component', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
