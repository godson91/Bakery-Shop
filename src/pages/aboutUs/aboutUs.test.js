import React from 'react';
import { shallow } from 'enzyme';

import AboutUs from '../aboutUs/AboutUs';

describe(`<AboutUs/>`, () => {
  it(`should shallow without crashing`, () => {
    const wrapper = shallow(<AboutUs />);
    expect(wrapper);
  });
});
