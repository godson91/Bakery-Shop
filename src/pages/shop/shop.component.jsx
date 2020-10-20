import React from 'react';
import { connect } from 'react-redux';

import ShopItem from '../../components/shop-item/shop-item.component';

import './shop.styles.scss';

const ShopPage = ({ collections }) => {
  return (
    <div className="shop">
      {collections.map(({ id, ...otherProps }) => (
        <ShopItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ shop: { collections } }) => ({
  collections,
});

export default connect(mapStateToProps)(ShopPage);
