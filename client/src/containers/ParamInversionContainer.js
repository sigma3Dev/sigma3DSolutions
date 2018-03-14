import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { getError }         from '../selectors/ErrorSelectors/getErrorSelector';
import ParamInversion       from '../components/ParamInversion/ParamInversion';

const mapDispatchToProps = dispatch => ({
});

const mapStateToProps = (state, props) => ({
  error: getError(state),
});

/**
 * Page where parameter inversion functionality is displayed
 * @class ParamInversionContainer
 * @extends {Component}
 */
class ParamInversionContainer extends Component {

  // /**
  //  * Creates an instance of ParamInversion.
  //  * @param {Object} props 
  //  * @memberof ParamInversionContainer
  //  */
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return(
      <div>
        <ParamInversion />
      </div>
    )
  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(ParamInversionContainer);