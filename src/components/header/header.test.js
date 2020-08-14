import React from 'react';
import { MemoryRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import Header from './header.component';
import { shallow } from 'enzyme';

const mockStore = configureStore();

describe('Connected Header component', () => {
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore({
      hidden: true,
    });

    wrapper = renderer.create(
      <MemoryRouter>
        <Header store={store} />
      </MemoryRouter>
    );
  });

  it('should render Header component', () => {
    expect(wrapper).toJSON().toMatchSnapshot();
  });

  it('should render connected component', () => {
    const wrapper = shallow(<Header store={store} />).dive();
    expect(wrapper.length).toEqual(1);
  });
});
