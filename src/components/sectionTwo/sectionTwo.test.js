import React from 'react';
import { shallow } from 'enzyme';
import SectionTwo from './SectionTwo';
import ShopPage from '../../pages/shop/shop.component'

describe('<SectionTwo />', () => {
  it('renders <SectionTwo /> without crashing', () => {
    const wrapper = shallow(<SectionTwo />);
    expect(wrapper.find(".sectionTwo"));
  });

    it('simulates click events', () => {
        const wrapper = shallow(<SectionTwo />);
        const shopPage = shallow(<ShopPage/>)
    wrapper.find('.shopBtn').simulate('click');
    expect(shopPage.find("h1").text()).toBe("SHOP PAGE");
  });
});