import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { NavDropdown } from './nav-dropdown.component';

describe('NavDropdown component', () => {
  // let wrapper;
  // //Mock toggleNavHidden function to replace one provided with mapDispatchToProps
  // const mockToggleFn = jest.fn();
  // beforeEach(() => {
  //   // Pass the mock function as the header prop
  //   wrapper = shallow(<NavDropdown toggleNavHidden={mockToggleFn} />);
  // });
  // it('should call the toggleNavHidden function when in mobile view', () => {
  //   wrapper.find('.closeSvg').simulate('click');
  //   expect(mockToggleFn.mock.calls.length).toBe(1);
  // });
  // it('should render NavDropdown component correctly', () => {
  //   wrapper = renderer
  //     .create(
  //       // Added MemoryRouter Component to test Link Components from react-router-dom
  //       <MemoryRouter>
  //         <NavDropdown />
  //       </MemoryRouter>
  //     )
  //     .toJSON();
  //   expect(wrapper).toMatchSnapshot();
  // });
});
