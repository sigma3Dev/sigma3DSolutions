import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getError } from '../selectors/ErrorSelectors/getErrorSelector';
import {
  getIsCalculating,
  getFitCylinderResult,
} from '../selectors/FitCylinderSelectors/getFitCylinderResultDataSelector/getFitCylinderResultDataSelector';
import { removeError } from '../actions/errorHandling/errorHandlingActions';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import ErrorScreen from '../components/ErrorScreen/ErrorScreen';
import Navbar from '../components/Navbar/Navbar';
import FitCylinderResult from '../components/FitCylinderResult/FitCylinderResult';

const mapDispatchToProps = dispatch => ({
  onRemoveError: () => dispatch(removeError()),
});

const mapStateToProps = state => ({
  error: getError(state),
  isCalculating: getIsCalculating(state),
  result: getFitCylinderResult(state),
});

/**
 * page to display results of fit plane
 * @class FitCylinderResultContainer
 * @extends {Component}
 */
class FitCylinderResultContainer extends Component {
  /**
   * Creates an instance of FitCylinderResultContainer.
   * @param {Object} props
   * @memberof FitCylinderResultContainer
   */
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  /**
   * Navigates back to input page of the current transformation
   * @memberof FitCylinderResultContainer
   */
  goBack = () => {
    this.props.onRemoveError();
    this.props.history.push('/geometry/fit-cylinder/data-input');
  };

  render() {
    if (this.props.isCalculating) {
      return <LoadingScreen />;
    } else if (this.props.error) {
      return <ErrorScreen error={this.props.error} handleClick={this.goBack} />;
    }
    return (
      <div>
        <Navbar currentMenu='geometry' />
        <FitCylinderResult params={this.props.result} handleReturnClick={this.goBack} />
      </div>
    );
  }
}

FitCylinderResultContainer.propTypes = {
  onRemoveError: PropTypes.func.isRequired,
  error: PropTypes.string,
  isCalculating: PropTypes.bool.isRequired,
  result: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])),
  history: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(FitCylinderResultContainer);
