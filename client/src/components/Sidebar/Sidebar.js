import React from 'react';
import {FormattedMessage} from 'react-intl';
import { Link } from 'react-router-dom';
import './Sidebar.css';

// sidebar for selecting app category
const Sidebar = (props) => {
  return (
    <div className="Sidebar">
      <Link to='/'>
        <div className="logo" />
      </Link>
      <Link to='/' className="link-active">
      <FormattedMessage
          id="Sidebar.label.transformation"
          defaultMessage="Transformations"
      />
      </Link>
    </div>
  );
}

export default Sidebar;