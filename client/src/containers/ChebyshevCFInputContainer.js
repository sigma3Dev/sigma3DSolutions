import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getError } from '../selectors/ErrorSelectors/getErrorSelector';
import { FormattedMessage } from 'react-intl';
import ChebyshevCFInput from '../components/ChebyshevCFInput/ChebyshevCFInput';
import { pushChebyshevCircleFitCoords } from '../actions/pushChebyshevCircleFitCoords/pushChebyshevCircleFitCoordsActions';
import { getCirclePoints} from '../selectors/ChebyshevCircleFitSelector/getChebyshevCircleFitInputDataSelector/getChebyshevCircleFitInputDataSelector';
import { submitChebyshevCircleFitCoords} from '../actions/submitChebyshevCircleFitCoords/submitChebyshevCircleFitCoordsActions';
import { clearInput} from '../actions/clearInput/clearInputActions';
import InfoModal from '../components/InfoModal/InfoModal';

var cdi = require('coordinatedataimporter');

const mapDispatchToProps = dispatch => ({
  OnPushChebyshevCircleFitCoords: (file) => dispatch(pushChebyshevCircleFitCoords(file)),
  onSubmitChebyshevCircleFitCoords: () => dispatch(submitChebyshevCircleFitCoords()),
  onClearInput: () => dispatch(clearInput()),
});

const mapStateToProps = (state, props) => ({
  //selectors, only here
  error: getError(state),
  circlePoints: getCirclePoints(state),
});

/**
 * What does this container do?
 * @class ChebyshevCFInputContainer
 * @extends {Component}
 */
class ChebyshevCFInputContainer extends Component {

  /**
   * Creates an instance of ChebyshevCFInputContainer.
   * @param {Object} props 
   * @memberof ChebyshevCFInputContainer
   */
  constructor() {
    super();
    this.state = {
      notification: null,
      isInfoOpen: false,
    }
    this.parseCoords = this.parseCoords.bind(this);
    this.submitChebyshevCircleFitCoords = this.submitChebyshevCircleFitCoords.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  parseCoords = (file) => {
    cdi.startCoordinateDataImport(file, coords => {
      this.props.OnPushChebyshevCircleFitCoords(coords);
    }); 
  }

  /**
  * Closes the Modal-window
  * @memberof ChebyshevCFInputContainer
  */
   */
  closeModal = () => {
    this.setState({...this.state, notification: null});
  }

  /**
   * Decides wheter InfoPanel is displayed or not
   * @memberof ChebyshevCFInputContainer
   */
  displayInfoPanel = () => {
    this.setState({...this.state, isInfoOpen: !this.state.isInfoOpen});
  }

   * Handles coords submit, navigates to "result" page
   * @memberof ChebyshevCFInputContainer
   */
  submitChebyshevCircleFitCoords = () => {
    if (!this.props.circlePoints || this.props.circlePoints.length === 0 ) {
      this.setState({
        notification: (<InfoModal 
          header={(     
            <FormattedMessage
              id="InfoModal.caption.wrongInput"
              defaultMessage="Wrong Input"
            /> )}
          body={(<FormattedMessage
            id="InfoModal.label.noCirclePoints"
            defaultMessage="Please import circle points!"
          /> )}
          handleClick={this.closeModal}
        />)
      })
    } else {
      this.props.onSubmitChebyshevCircleFitCoords();
      this.props.history.push('/geometry/chebyshev-circle-fit/result');
    }
  }

     /**
   * deletes all points, updates input display
   * @memberof ChebyshevCFInputContainer
   */
  clearInput = () => {
    this.props.onClearInput();
  }
  render() {
    const infoPanelText=(
      <FormattedMessage
        id="ChebyshevCFInputContainer.panel.infoPanelText"
        defaultMessage={`
          The input should be a simple .txt file.\n
        
          The file should consist of one or more points, each on its own line. 
          Each point should be made up of three coordinates: x, y and z. These should be simple numbers.\n
        
          Example:\n
          41.3 11.2 17.1\n
          24.2 33.1 19.8\n
          9.1 5.4 12.9
        `}
      />
    )
    return (
      <div>
        {this.state.notification}
        <ChebyshevCFInput 
          onFileDrop={ this.parseCoords } 
          circlePoints={ this.props.circlePoints }
          handleInfoClick={ this.displayInfoPanel }
          handleSubmitClick={ this.submitChebyshevCircleFitCoords }
          handleDeleteClick= { this.clearInput }
          isInfoOpen={ this.state.isInfoOpen }
          infoPanelText={ infoPanelText }
        />
      </div>
    )
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ChebyshevCFInputContainer);

    /**
  /**
  */
  * @memberof ChebyshevCFInputContainer
  * @param {*} file - .txt file with point coordinates
  * Uses cdi module to transform .txt file into an array of start points
<<<<<<< HEAD
=======
   * Uses cdi module to transform .txt file into an array of start points
   * @param {*} file - .txt file with point coordinates
   * @memberof ChebyshevCFInputContainer
   */
>>>>>>> master
  /**
  * Handles coords submit, navigates to "result" page
  * @memberof ChebyshevCFInputContainer
  */
>>>>>>> master
=======