import React from 'react';
import { PropTypes } from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import './Sidebar.css';

/**
 * sidebar for selecting app category
 * @returns {*} Sidebar - .jsx Element
 */
const Sidebar = ({ currentMenu }) => (
  <div className='Sidebar'>
    <Link to='/' title='Homepage'>
      <div className='logo' />
    </Link>
    <div className='sidebar-link-container'>
      <Link to='/transformations' className={currentMenu === 'trafo' ? 'link-active' : 'link'}>
        <FormattedMessage id='Sidebar.label.transformation' defaultMessage='Transformations' />
      </Link>
    </div>
    <div className='sidebar-link-container'>
      <Link to='/geometry' className={currentMenu === 'geometry' ? 'link-active' : 'link'}>
        <FormattedMessage id='Sidebar.label.geometry' defaultMessage='Geometry' />
      </Link>
    </div>
    <div className='info-section'>
      sigma3D<br />Max-Hufschmidt-Str. 4a<br />55130 Mainz<br />+49 (0) 2542 - 91898 0<br />
      <a href='mailto:info@sigma3d.de'>info@sigma3d.de</a>
    </div>
  </div>
);

Sidebar.propTypes = {
  currentMenu: PropTypes.string,
};

export default Sidebar;
