import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Header } from './header.component';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

describe('Header component', () => {
  let wrapper;
  //Mock toggleNavHidden function to replace one provided with mapDispatchToProps
  const mockToggleFn = jest.fn();

  beforeEach(() => {
    // Pass the mock function as the header prop
    wrapper = shallow(<Header toggleNavHidden={mockToggleFn} />);
  });

  it('should call the toggleNavHidden function when in mobile view', () => {
    wrapper.find('.bars').simulate('click');
    expect(mockToggleFn.mock.calls.length).toBe(1);
  });

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
