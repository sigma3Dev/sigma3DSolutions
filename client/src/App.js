import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import GeometryScreenContainer from './containers/GeometryScreenContainer';
import ParamInversionContainer from './containers/ParamInversionContainer';
import StartScreenContainer from './containers/StartScreenContainer';
import ThreeDTrafoInputContainer from './containers/ThreeDTrafoInputContainer';
import ThreeDTrafoResultContainer from './containers/ThreeDTrafoResultContainer';
import ChebyshevCFInputContainer from './containers/ChebyshevCFInputContainer';
import TransformationsScreenContainer from './containers/TransformationsScreenContainer';
import './App.css';

/**
 * main App, contains different Routes
 * @class App
 * @extends {Component}
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={StartScreenContainer} />
          <Route exact path='/transformations' component={TransformationsScreenContainer} />
          <Route path='/transformations/three-d-transformation/data-input' component={ThreeDTrafoInputContainer} />
          <Route path='/transformations/three-d-transformation/result' component={ThreeDTrafoResultContainer} />
          <Route exact path='/geometry' component={GeometryScreenContainer} />
          <Redirect from='*' to='/' />
        </Switch>
      </div>
    );
  }
}

export default App;