import React from 'react';
import {FormattedMessage} from 'react-intl';
import { Link } from 'react-router-dom';
import AppSelectionBtn from '../AppSelectionBtn/AppSelectionBtn';
import Sidebar from '../Sidebar/Sidebar';
import './StartScreen.css';

/* this page shows the overview of all available Sigma3D apps to solve mathematical problems */
const StartScreen = (props) => {
  return (
    <div className="start-screen">
      <Sidebar />
      <Link to="/three-d-transformation/data-input">
        <AppSelectionBtn 
          caption={
            <FormattedMessage
              id="AppSelectionBtn.caption.3Dtransformation"
              defaultMessage="3D-Transformation"
            />
          }
          description={
            <FormattedMessage
              id="AppSelectionBtn.description.3Dtransformation"
              defaultMessage="6 Parameters, weighted"
            />
          }
        />
      </Link>
    </div>
  );
}

export default StartScreen;