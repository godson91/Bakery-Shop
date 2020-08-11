import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as User } from '../../assets/user-alt-solid.svg';
import { ReactComponent as Facebook } from '../../assets/facebook-square-brands.svg';
import { ReactComponent as Instagram } from '../../assets/instagram-brands.svg';
import { ReactComponent as ShoppingCart } from '../../assets/shopping-cart-solid.svg';
import { ReactComponent as Bars } from '../../assets/bars-solid.svg';

import CustomButton from '../custom-button/custom-button.component';

import './header.styles.scss';

const Header = () => {
  return (
    <div className="Header">
      <div className="top-nav">
        {/* social icons */}
        <div className="social">
          <User />
          <Facebook />
          <Instagram />
        </div>
        <Link to="/" className="logo">
          Swayzer's Sweets
        </Link>
        <div className="cart-order">
          <CustomButton>Order Online</CustomButton>
          <ShoppingCart />
        </div>
      </div>
      <nav>
        <div>
          <span>Swayzer's Sweets</span>
          <Bars />
        </div>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </div>
  );
};

export default Header;
