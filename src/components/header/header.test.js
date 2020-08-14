import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import Header from './header.component';

describe('Header component', () => {
  let wrapper;

  it('should render Header component', () => {
    wrapper = renderer
      .create(
        // Added MemoryRouter Component to test Link Components from react-router-dom
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
