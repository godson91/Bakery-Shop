import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

import { ReactComponent as Close } from '../../assets/close.svg';

import { toggleNavHidden } from '../../redux/nav/nav.actions';

import './nav-dropdown.styles.scss';

export const NavDropdown = ({ toggleNavHidden }) => {
  return (
    <div className="nav-mobile">
      <div className="close">
        <Close className="closeSvg" onClick={() => toggleNavHidden()} />
      </div>
      <div className="links">
        <div>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="button">
          <CustomButton signInWithGoogle>Sign in with Google</CustomButton>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleNavHidden: () => dispatch(toggleNavHidden()),
});

export default connect(null, mapDispatchToProps)(NavDropdown);
