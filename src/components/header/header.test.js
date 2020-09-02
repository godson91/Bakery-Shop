import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './header.component';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import NavDropdown from '../nav-dropdown/nav-dropdown.component';

describe('Header component', () => {
  let mockStore;
  let wrapper;

  const mockStoreConfig = configureStore([]);

  mockStore = mockStoreConfig({
    hidden: true,
  });
  //Mock toggleNavHidden function to replace one provided with mapDispatchToProps
  const mockToggleFn = jest.fn();

  const mockProps = {
    hidden: true,
    toggleNavHidden: mockToggleFn,
  };

  beforeEach(() => {
    // Pass the mock function as the header prop
    wrapper = shallow(<Header {...mockProps} />);
  });

  it('should render Header component', () => {
    wrapper = renderer
      .create(
        // Added MemoryRouter Component to test Link Components from react-router-dom
        <Provider store={mockStore}>
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        </Provider>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  describe('if hidden is true', () => {
    it('should not render NavDropdown', () => {
      expect(wrapper.exists(NavDropdown)).toBe(false);
    });
  });

  describe('if hamburgerBtn is clicked', () => {
    const mockProps = {
      hidden: false,
      toggleNavHidden: mockToggleFn,
    };

    const newWrapper = shallow(<Header {...mockProps} />);

    it('should call the toggleNavHidden function when in mobile view', () => {
      wrapper.find('.bars').simulate('click');
      expect(mockToggleFn.mock.calls.length).toBe(1);
    });

    it('should render NavDropdown', () => {
      expect(newWrapper.exists(NavDropdown)).toBe(true);
    });
  });
});
