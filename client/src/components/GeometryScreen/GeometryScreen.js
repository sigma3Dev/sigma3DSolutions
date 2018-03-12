import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';
import AppSelectionBtn from '../AppSelectionBtn/AppSelectionBtn';
import Sidebar from '../Sidebar/Sidebar';
import './GeometryScreen.css';

/**
 * Shows the overview of all available Sigma3D apps to solve mathematical problems
 * @param {Object} props - properties passed down from parent element
 * @returns {*} GeometryScreen - .jsx Element
 */
const GeometryScreen = () => {
  return (
    <div className="geometry-screen">
      <Sidebar />
      <Link to="/geometry/chebyshev-circle/data-input">
        <AppSelectionBtn 
          caption={
            <FormattedMessage
              id="AppSelectionBtn.caption.chebyshev"
              defaultMessage="Chebyshev-Circle"
            />
          }
          description={
            <FormattedMessage
              id="AppSelectionBtn.description.chebyshev"
              defaultMessage="Central Point, Radius and Chebyshev-Distance"
            />
          }
        />
      </Link>
    </div>
  );
}

export default GeometryScreen;