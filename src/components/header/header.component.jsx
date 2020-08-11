import React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as User } from '../../assets/user-alt-solid.svg';
import { ReactComponent as Facebook } from '../../assets/facebook-square-brands.svg';
import { ReactComponent as Instagram } from '../../assets/instagram-brands.svg';

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
        <Link to="/">Logo</Link>
      </div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact Us</Link>
      </nav>
    </div>
  );
};

export default Header;
