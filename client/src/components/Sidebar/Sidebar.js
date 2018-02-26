import React from 'react';
import './Sidebar.css';

// sidebar for selecting app category
const Sidebar = (props) => {
  return (
    <div className="Sidebar">
      <div className="logo" />
      <a href='/three-d-transformation/data-input' className="active">Transformations</a>
    </div>
  );
}

export default Sidebar;