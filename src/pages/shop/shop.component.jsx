import React from 'react';
import SHOP_DATA from './products';

import ShopItem from '../../components/shop-item/shop-item.component';

import './shop.styles.scss';

const ShopPage = () => {
  return (
    <div className='shop'>
      {SHOP_DATA.map(({id, ...otherProps}) => <ShopItem key={id} {...otherProps}/>)}
    </div>
  );
};

export default ShopPage;
