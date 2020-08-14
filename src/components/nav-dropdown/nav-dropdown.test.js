import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';

import NavDropdown from './nav-dropdown.component';

describe('NavDropdown component', () => {
  let wrapper;

  it('should render NavDropdown component', () => {
    wrapper = renderer
      .create(
        // Added MemoryRouter Component to test Link Components from react-router-dom
        <MemoryRouter>
          <NavDropdown />
        </MemoryRouter>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
