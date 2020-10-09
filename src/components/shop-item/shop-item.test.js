import React from 'react';
import renderer from 'react-test-renderer';
import ShopItem from './shop-item.component';

it('should render DirectoryItem component', () => {
  const component = renderer.create(<ShopItem />).toJSON();
  expect(component).toMatchSnapshot();
});
