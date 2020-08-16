import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import LandingPageHero from './LandingPageHero'

describe('div renders w/o crashing', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<LandingPageHero />);
  });

  test('renders without crashing', () => {
    expect(wrapper.find('.hero'));
  });
});
