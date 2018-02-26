import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StartScreen from '../components/StartScreen/StartScreen';
import {THREE_D_TRANSFORMATION_SEVEN_PARAM} from '../config/AppTypes';

class StartScreenContainer extends Component {

  route(app) {
    switch (app) {
      case THREE_D_TRANSFORMATION_SEVEN_PARAM: 
        this.props.history.push('/three-d-transformation/data-input');
    }
  }

  render() { 
    return (
      <StartScreen 
        route={this.props.route}
      />
    )
  }
}

StartScreenContainer.propTypes = {
  history: PropTypes.object.isRequired,
}

export default StartScreenContainer;