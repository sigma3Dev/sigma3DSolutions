import React from 'react';
import { PropTypes } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import './Navbar.css';

/**
 * sidebar for selecting app category
 * @returns {*} Navbar - .jsx Element
 */
const Navbar = ({ currentMenu }) => (
  <div className='Navbar'>
    <Link to='/' title='Homepage'>
      <div className='logo' />
    </Link>
    <div className='sidebar-link-container'>
      <Link to='/transformations' className={currentMenu === 'trafo' ? 'link-active' : 'link'}>
        <FormattedMessage id='Navbar.label.transformation' defaultMessage='Transformations' />
      </Link>
    </div>
    <div className='sidebar-link-container'>
      <Link to='/geometry' className={currentMenu === 'geometry' ? 'link-active' : 'link'}>
        <FormattedMessage id='Navbar.label.geometry' defaultMessage='Geometry' />
      </Link>
    </div>
  </div>
);

Navbar.propTypes = {
  currentMenu: PropTypes.string,
};

export default Navbar;
