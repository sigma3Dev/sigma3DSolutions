import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getError } from '../selectors/ErrorSelectors/getErrorSelector';
import { FormattedMessage } from 'react-intl';
//componente importieren
import ChebyshevCFInput from '../components/ChebyshevCFInput/ChebyshevCFInput';
import { pushStartSystemCoordinates} from '../actions/pushTrafoCoords/pushTrafoCoordsActions';
import { getStartSystemPoints} from '../selectors/TrafoSelectors/getTrafoInputDataSelector/getTrafoInputDataSelector';
import { submitCoords} from '../actions/submitCoords/submitCoordsActions';
import { clearStartInput} from '../actions/clearInput/clearInputActions';

var cdi = require('coordinatedataimporter');

const mapDispatchToProps = dispatch => ({
  // you can add methods here later
  onPushStartSystemCoordinates: (file) => dispatch(pushStartSystemCoordinates(file)),
  onSubmitCoords: () => dispatch(submitCoords()),
  onClearStartInput: () => dispatch(clearStartInput()),
});

const mapStateToProps = (state, props) => ({
  //selectors, only here
  error: getError(state),
  // you can add more state elements here later
  startSystemPoints: getStartSystemPoints(state),
});

/**
 * What does this container do?
 * @class ChebyshevCFInputContainer
 * @extends {Component}
 */
class ChebyshevCFInputContainer extends Component {

  /**
   * Creates an instance of $YOUR_CONTAINER.
   * @param {Object} props 
   * @memberof ChebyshevCFInputContainer
   */
  constructor(props) {
    //**********************************************************************************************
    // was soll ich hier tun???
    super();
    this.state = {
      notification: null,
    }
    this.parseStartCoords = this.parseStartCoords.bind(this);
    //this.submitCoords = this.submitCoords.bind(this);
    this.clearStartInput = this.clearStartInput.bind(this);

  }

  /**
   * Uses cdi module to transform .txt file into an array of start points
   * @param {*} file - .txt file with point coordinates
   * @memberof ChebyshevCFInputContainer
   */
  parseStartCoords = (file) => {
    cdi.startCoordinateDataImport(file, coords => {
      this.props.onPushStartSystemCoordinates(coords);
    }); 
  }

    /**
   * Handles coords submit, navigates to "result" page
   * @memberof ChebyshevCFInputContainer
   */

   // hier den submit kram einfügen

     /**
   * deletes all start system points, updates input display
   * @memberof ChebyshevCFInputContainer
   */
  clearStartInput = () => {
    this.props.onClearStartInput();
  }

  render() {
      return (
        <div>
          {this.state.notification}
          <ChebyshevCFInput 
            onStartFileDrop={ this.parseStartCoords } 
            startSystemPoints={ this.props.startSystemPoints }
            //handleInfoClick={ this.displayInfoPanel }
            handleSubmitClick={ this.submitCoords }
            handleStartDeleteClick= { this.clearStartInput }
            //isInfoOpen={ this.state.isInfoOpen }
            //infoPanelText={ infoPanelText }
          />
        </div>
      )
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ChebyshevCFInputContainer);
