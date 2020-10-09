import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './shop-item.styles.scss';

const ShopItem = () => {
  return (
    <div className="shopItem">
      <div className="image">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/bakery-dev-server-d76b2.appspot.com/o/cupcake1.jpg?alt=media&token=4cf67ef9-9fde-448b-b177-fa977834ac88"
          alt=""
        />
      </div>
      <h2>Caramel Cheesecake</h2>
      <div className="price">
        <span>$20 Full</span>
        <span>$5 Slice</span>
      </div>
      <CustomButton>Add to Cart</CustomButton>
    </div>
  );
};

export default ShopItem;
