import React from 'react';
import { Link } from 'react-router-dom';
import AppSelectionBtn from '../AppSelectionBtn/AppSelectionBtn';
import Sidebar from '../Sidebar/Sidebar';
import './StartScreen.css';

// this page shows the overview of all available Sigma3D apps to solve mathematical problems
const StartScreen = (props) => {
  return (
    <div className="start-screen">
      <Sidebar />
      <Link to="/three-d-transformation/data-input">
        <AppSelectionBtn 
          caption={ "3D-Transformation" }
          description={ "6 Parameters, weighted" }
        />
      </Link>
    </div>
  );
}

export default StartScreen;