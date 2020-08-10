import React from 'react';
import App from './App';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<App/>', () => {
  test('render app', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('a').text()).toBe('Learn React');
  });
});
