import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

// sidebar for selecting app category
const Sidebar = (props) => {
  return (
    <div className="Sidebar">
      <Link to='/'>
        <div className="logo" />
      </Link>
      <Link to='/' className="link-active">Transformations</Link>
    </div>
  );
}

export default Sidebar;