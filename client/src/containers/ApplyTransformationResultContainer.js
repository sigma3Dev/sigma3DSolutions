import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';
import { getError } from '../selectors/ErrorSelectors/getErrorSelector';
import {
  getIsCalculating,
  getApplyTrafoResult,
} from '../selectors/ApplyTrafoSelectors/getApplyTrafoResultDataSelector/getApplyTrafoResultDataSelector';
import { removeError } from '../actions/errorHandling/errorHandlingActions';
import LoadingScreen from '../components/LoadingScreen/LoadingScreen';
import ErrorScreen from '../components/ErrorScreen/ErrorScreen';
import Sidebar from '../components/Sidebar/Sidebar';
import ApplyTrafoResult from '../components/ApplyTrafoResult/ApplyTrafoResult';

const mapDispatchToProps = dispatch => ({
  onRemoveError: () => dispatch(removeError()),
});

const mapStateToProps = state => ({
  error: getError(state),
  isCalculating: getIsCalculating(state),
  result: getApplyTrafoResult(state),
});

/**
 * container to display applyTrafo result
 * @class ApplyTransformationResultContainer
 * @extends {Component}
 */
class ApplyTransformationResultContainer extends Component {
  /**
   * Creates an instance of ApplyTransformationResultContainer.
   * @param {Object} props
   * @memberof ApplyTransformationResultContainer
   */
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
  }

  /**
   * Navigates back to input page of the current transformation
   * @memberof ApplyTransformationResultContainer
   */
  goBack = () => {
    this.props.onRemoveError();
    this.props.history.push('/transformations/transform/data-input');
  };

  render() {
    if (this.props.isCalculating) {
      return <LoadingScreen />;
    } else if (this.props.error) {
      return <ErrorScreen error={this.props.error} handleClick={this.goBack} />;
    }
    return (
      <div>
        <Sidebar currentMenu='trafo' />
        <ApplyTrafoResult result={this.props.result} handleReturnClick={this.goBack} />
      </div>
    );
  }
}

ApplyTransformationResultContainer.propTypes = {
  onRemoveError: PropTypes.func.isRequired,
  isCalculating: PropTypes.bool.isRequired,
  result: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.number)),
  error: PropTypes.string,
  history: PropTypes.any,
};

export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(ApplyTransformationResultContainer));
