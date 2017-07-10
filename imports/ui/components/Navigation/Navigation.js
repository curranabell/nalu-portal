import React from 'react';
import PropTypes from 'prop-types';
import { Navbar, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PublicNavigation from '../PublicNavigation/PublicNavigation';
import AuthenticatedNavigation from '../AuthenticatedNavigation/AuthenticatedNavigation';

import './Navigation.scss';

const Navigation = props => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/"><Image src="https://d1vdvwrgp1mxw9.cloudfront.net/media/nalu-web-design-logo-small.png" responsive /></Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      {!props.authenticated ? <PublicNavigation /> : <AuthenticatedNavigation {...props} />}
    </Navbar.Collapse>
  </Navbar>
);

Navigation.defaultProps = {
  name: '',
};

Navigation.propTypes = {
  authenticated: PropTypes.bool.isRequired,
};

export default Navigation;
