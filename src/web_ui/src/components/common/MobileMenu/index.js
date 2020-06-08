import React from 'react';
import MMenu from './Mmenu';
import { loginClick, logoutUser } from '../../../store/actions/AuthActions';
import { useAuth0 } from "../../../utils/Auth0";
import PropTypes from 'prop-types';

export default function MobileMenu(props) {
  const { dispatch, isAuthenticated, isMobileMenuOpen, mobileMoreAnchorEl, setMobileMoreAnchorEl } = props;
  const { loginWithPopup } = useAuth0();

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const loginClickHandler = () => dispatch(loginClick(loginWithPopup, {}));
  const logoutClickHandler = () => dispatch(logoutUser());

  return (
    <MMenu 
      loginclick={loginClickHandler}
      logoutclick={logoutClickHandler}
      mobileAnchor={mobileMoreAnchorEl}
      isMenuOpen={isMobileMenuOpen}
      menuClose={handleMobileMenuClose}
      isAuthenticated={isAuthenticated}
    />
  );
}

MobileMenu.propTypes = {
  dispatch: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  mobileMoreAnchorEl: PropTypes.element,
  setMobileMoreAnchorEl: PropTypes.func.isRequired
}