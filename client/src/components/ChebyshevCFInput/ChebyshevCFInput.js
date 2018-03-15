import React from 'react';
import {FormattedMessage} from 'react-intl';
import PointsInput from '../PointsInput/PointsInput';
// hier die richtige component noch einsetzen und unten einfügen??
import PointsInputTable3D6W from '../PointsInputTable3D6W/PointsInputTable3D6W';
import SubmitBtn from '../SubmitBtn/SubmitBtn';
import Sidebar from '../Sidebar/Sidebar';
import InfoBtn from '../InfoBtn/InfoBtn';
import InputInfoPanel from '../InputInfoPanel/InputInfoPanel';
import './ChebyshevCFInput.css';

/**
 * page for chebyshev-circle-fit data inputs
 * @param {function} onStartFileDrop - handles functionality of file drop for start system input
 * @param {function} handleInfoClick - handles info button clicks
 * @param {function} handleSubmitClick - handles submit button clicks
 * @param {function} handleStartDeleteClick - handles start system delete button clicks
 * @param {Array} startSystemPoints - array of points from the start system
 * @param {Array} isInfoOpen - is info panel open?
 * @returns {*} chebyshev-circle-fit - .jsx Element
 */
const ChebyshevCFInput = ({
  onStartFileDrop,
  startSystemPoints,
  handleInfoClick,
  handleSubmitClick,
  handleStartDeleteClick,
  isInfoOpen,
  infoPanelText
}) => {
  
  return (
    <div>
      <Sidebar />
      <div className="chebyshev-circle-fit-input">
        <div className="start-input">
          <h1>
            <FormattedMessage
              id="ThreeDTrafoInput.label.startSystemPointsCaption"
              defaultMessage="Start System Points:"
            />
          </h1>
          <PointsInput onDrop={onStartFileDrop} />
          <PointsInputTable3D6W 
            systemPoints={startSystemPoints} 
            handleDeleteDataInput={handleStartDeleteClick}
          />
        </div>
        <SubmitBtn handleClick={handleSubmitClick} />
      </div>
    </div>
  );
}

export default ChebyshevCFInput;