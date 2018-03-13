import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link to="/three-d-transformation/data-input" className="buttons-display">
        {
            buttons.map(b => (
                <AppSelectionBtn
                    label={ b }
                    key={ b }
                />
            ))
        }
      </Link>   
    </div>
  );
}

export default SelectAppsScreen;