import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getError } from '../selectors/ErrorSelectors/getErrorSelector';
import {
  getIsCalculating,
  getFitLineRansacResult,
} from '../selectors/FitLineRansacSelectors/getFitLineRansacResultDataSelector/getFitLineRansacResultDataSelector';
import { removeError } from '../actions/errorHandling/errorHandlingActions';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import ErrorScreen from '../components/ErrorScreen/ErrorScreen';
import Sidebar from '../components/Sidebar/Sidebar';
import FitLineRansacResult from '../components/FitLineRansacResult/FitLineRansacResult';

const mapDispatchToProps = dispatch => ({
  onRemoveError: () => dispatch(removeError()),
});

const mapStateToProps = state => ({
  error: getError(state),
  isCalculating: getIsCalculating(state),
  result: getFitLineRansacResult(state),
});

/**
 * page to display results of fit plane
 * @class FitLineRansacResultContainer
 * @extends {Component}
 */
class FitLineRansacResultContainer extends Component {
  /**
   * Creates an instance of FitLineRansacResultContainer.
   * @param {Object} props
   * @memberof FitLineRansacResultContainer
   */
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  /**
   * Navigates back to input page of the current transformation
   * @memberof FitLineRansacResultContainer
   */
  goBack = () => {
    this.props.onRemoveError();
    this.props.history.push('/geometry/fit-line-ransac/data-input');
  };

  render() {
    if (this.props.isCalculating) {
      return <LoadingScreen />;
    } else if (this.props.error) {
      return <ErrorScreen error={this.props.error} handleClick={this.goBack} />;
    }
    return (
      <div>
        <Sidebar />
        <FitLineRansacResult params={this.props.result} handleReturnClick={this.goBack} />
      </div>
    );
  }
}

FitLineRansacResultContainer.propTypes = {
  onRemoveError: PropTypes.func.isRequired,
  error: PropTypes.string,
  isCalculating: PropTypes.bool.isRequired,
  result: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.arrayOf(PropTypes.number)])),
  history: PropTypes.any,
};

export default connect(mapStateToProps, mapDispatchToProps)(FitLineRansacResultContainer);
