import React from 'react';
//must be included in all test files or imported
import { shallow, mount } from 'enzyme';
import App from './App';

describe('Counter Testing', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('renders without crashing', () => {
    expect(wrapper.find('div'));
  });
});
