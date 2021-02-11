import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth0 } from '@hosamshahin/auth0-react';


import {
  NavItem,
  NavLink
} from './../../components';

const NavbarUser = (props) => {
  const { logout } = useAuth0();

  return (
    <NavItem {...props}>
      <NavLink onClick={() =>
        logout({
          returnTo: window.location.origin,
        })}
      >
        <i className="fa fa-power-off"></i>
      </NavLink>
    </NavItem>
  )
};
NavbarUser.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object
};

export { NavbarUser };
