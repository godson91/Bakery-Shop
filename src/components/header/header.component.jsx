import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as User } from '../../assets/user-alt-solid.svg';
import { ReactComponent as Facebook } from '../../assets/facebook-square-brands.svg';
import { ReactComponent as Instagram } from '../../assets/instagram-brands.svg';
import { ReactComponent as ShoppingCart } from '../../assets/shopping-cart-solid.svg';
import { ReactComponent as Bars } from '../../assets/bars-solid.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import CustomButton from '../custom-button/custom-button.component';

import './header.styles.scss';

const Header = () => {
  return (
    <div className="Header">
      <div className="top-nav">
        {/* Social Icons container*/}
        <div className="social">
          <User />
          <Facebook />
          <Instagram />
        </div>
        {/* Logo Container */}
        <div className="logo">
          <div>
            <span>Swayzer's</span>
            <Link to="/">
              <Logo />
            </Link>
            <span>Sweets</span>
          </div>
          <span className="logo-text">Specialty Cakes and Cookies</span>
        </div>
        {/* Order/Cart container */}
        <div className="cart-order">
          <CustomButton>Order Online</CustomButton>
          <ShoppingCart />
        </div>
      </div>
      {/* Navigation  */}
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
