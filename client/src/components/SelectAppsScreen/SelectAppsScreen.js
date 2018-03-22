import React from 'react';
import PropTypes from 'prop-types';
import AppSelectionBtn from '../AppSelectionBtn/AppSelectionBtn';
import Sidebar from '../Sidebar/Sidebar';
import './SelectAppsScreen.css';

/**
 * Shows the overview of all available Sigma3D apps to solve mathematical problems
 * @param {Object} props - properties passed down from parent element
 * @returns {*} SelectAppsScreen - .jsx Element
 */
const SelectAppsScreen = ({
    buttons,
}) => {
  return (
    <div className="select-apps-screen">
      <Sidebar />    
        {
          buttons.map(b => (
              <AppSelectionBtn
                  label={ b.type }
                  key={ b.type }
                  link = { b.link }
              />
          ))
        } 
    </div>
  );
}

SelectAppsScreen.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
}

export default SelectAppsScreen;