import React from 'react';
import {FormattedMessage} from 'react-intl';
import { Link } from 'react-router-dom';
import './Sidebar.css';

/**
 * sidebar for selecting app category
 * @param {Object} props - Properties passed down from parent element
 * @returns {*} Sidebar - .jsx Element
 */
const Sidebar = (props) => {
  return (
    <div className="Sidebar">
      <Link to='/'>
        <div className="logo" />
      </Link>
      <Link to='/transformations' className="link-active">
      <FormattedMessage
          id="Sidebar.label.transformation"
          defaultMessage="Transformations"
      />
      </Link>
      <Link to='/geometry' className="link-active">
      <FormattedMessage
          id="Sidebar.label.geometry"
          defaultMessage="Geometry"
      />
      </Link>
    </div>
  );
}

export default Sidebar;