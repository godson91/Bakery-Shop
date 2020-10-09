import React from 'react';
import SHOP_DATA from './products';

import ShopItem from '../../components/shop-item/shop-item.component';

import './shop.styles.scss';

const ShopPage = () => {
  return (
    <div>
      <h1>SHOP PAGE</h1>
      <ShopItem />
    </div>
  );
};

export default ShopPage;
