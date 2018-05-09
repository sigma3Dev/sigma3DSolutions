import React from 'react';
import PropTypes from 'prop-types';
import AppSelectionBtn from '../AppSelectionBtn/AppSelectionBtn';
import Footer from '../Footer/Footer';
import './SelectAppsScreen.css';

/**
 * Shows the overview of all available Sigma3D apps to solve mathematical problems
 * @param {Object} props - properties passed down from parent element
 * @returns {*} SelectAppsScreen - .jsx Element
 */
const SelectAppsScreen = ({ buttons, handleReturn }) => (
  <div className='select-apps-screen'>
    {buttons.map(b => <AppSelectionBtn label={b.type} key={b.type} link={b.link} />)}
    <Footer
      handleReturnClick={handleReturn}
      isSubmitBtnDisplayed={false}
      isReturnBtnDisplayed
      isInfoBtnDisplayed={false}
    />
  </div>
);

SelectAppsScreen.propTypes = {
  buttons: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)).isRequired,
  handleReturn: PropTypes.func.isRequired,
};

export default SelectAppsScreen;
