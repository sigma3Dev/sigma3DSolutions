import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import './Sidebar.css';

/**
 * sidebar for selecting app category
 * @returns {*} Sidebar - .jsx Element
 */
const Sidebar = () => (
  <div className='Sidebar'>
    <Link to='/'>
      <div className='logo' />
    </Link>
    <div className='sidebar-link-container'>
      <Link to='/transformations' className='link-active'>
        <FormattedMessage id='Sidebar.label.transformation' defaultMessage='Transformations' />
      </Link>
    </div>
    <div className='sidebar-link-container'>
      <Link to='/geometry' className='link-active'>
        <FormattedMessage id='Sidebar.label.geometry' defaultMessage='Geometry' />
      </Link>
    </div>
  </div>
);

export default Sidebar;
