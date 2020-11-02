import CustomButton from '../custom-button/custom-button.component';

import './shop-item.styles.scss';

const ShopItem = ({ title, description, image, full, slice }) => {
  return (
    <div className="shopItem">
      <div className="image">
        <img src={`${image}`} alt={`${description}`} />
      </div>
      <h2>{title}</h2>
      <div className="price">
        <span>{`$${full} full`}</span>
        <span>{`$${slice} slice`}</span>
      </div>
      <CustomButton>Add to Cart</CustomButton>
    </div>
  );
};

export default ShopItem;
