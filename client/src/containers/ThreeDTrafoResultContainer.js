import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTrafoParams, getError, getIsCalculating } from '../selectors/TrafoSelectors/getTrafoResultDataSelector';
import ThreeDTrafoResult from '../components/ThreeDTrafoResult/ThreeDTrafoResult';

const mapStateToProps = (state, props) => ({
  response: getTrafoParams(state),
  error: getError(state),
  isCalculating: getIsCalculating(state),
});

class ThreeDTrafoResultContainer extends Component {
  constructor(props) {
    super(props);
    this.goHome = this.goHome.bind(this);
  }

  goHome = () => {
    this.props.history.push('/');
  }

  render() {
    return(
      <ThreeDTrafoResult
        response={ this.props.response }
        error={ this.props.error }
        isCalculating = { this.props.isCalculating }
        handleClick = { this.goHome }
      />
    )
  }
  
}

export default connect(mapStateToProps)(ThreeDTrafoResultContainer);