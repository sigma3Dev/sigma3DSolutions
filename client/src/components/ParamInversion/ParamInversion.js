import React from 'react';
import {FormattedMessage} from 'react-intl';
import Sidebar from '../Sidebar/Sidebar';
import './ParamInversion.css';

/**
 * Shows input as well as results of parameter inversions
 * @param {*} - create on of these for each input, specify type in the braces
 * @returns {*} ParamInversion - .jsx Element
 */
const ParamInversion = () => (
  <div className="param-inversion">
    <Sidebar />
    <h1>
      <FormattedMessage
        id="ParamInversion.caption.paramInversionHeader"
        defaultMessage="Parameter Inversion"
      />
    </h1>
  </div>
)

export default ParamInversion;