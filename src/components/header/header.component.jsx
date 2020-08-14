import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import NavDropdown from '../nav-dropdown/nav-dropdown.component';

import { ReactComponent as User } from '../../assets/user-alt-solid.svg';
import { ReactComponent as Facebook } from '../../assets/facebook-square-brands.svg';
import { ReactComponent as Instagram } from '../../assets/instagram-brands.svg';
import { ReactComponent as ShoppingCart } from '../../assets/shopping-cart-solid.svg';
import { ReactComponent as Bars } from '../../assets/bars-solid.svg';
import { ReactComponent as Logo } from '../../assets/logo.svg';

import CustomButton from '../custom-button/custom-button.component';

import { toggleNavHidden } from '../../redux/nav/nav.actions';

import './header.styles.scss';

const Header = ({ hidden, toggleNavHidden }) => {
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
      <nav>
        {/* Container for Mobile to Display Logo and Humberger Icon */}
        <div className="mobile-logo">
          <Logo />
          <div className="logo-details">
            <span>Swayzer's Sweets</span>
            <span className="logo-text">Specialty Cakes and Cookies</span>
          </div>
          <Bars onClick={() => toggleNavHidden()} />
        </div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </nav>
      {!hidden ? <NavDropdown /> : null}
    </div>
  );
};

const mapStateToProps = state => ({
  hidden: state.nav.hidden,
});

const mapDispatchToProps = dispatch => ({
  toggleNavHidden: () => dispatch(toggleNavHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
