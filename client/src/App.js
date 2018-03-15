import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import StartScreenContainer from './containers/StartScreenContainer';
import TransformationsScreenContainer from './containers/TransformationsScreenContainer';
import ThreeDTrafoInputContainer from './containers/ThreeDTrafoInputContainer';
import ThreeDTrafoResultContainer from './containers/ThreeDTrafoResultContainer';
import GeometryScreenContainer from './containers/GeometryScreenContainer';
import ChebyshevCFInputContainer from './containers/ChebyshevCFInputContainer';
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
          <Route path='/transformations' component={TransformationsScreenContainer} />
          <Route path='/transformations/three-d-transformation/data-input' component={ThreeDTrafoInputContainer} />
          <Route path='/transformations/three-d-transformation/result' component={ThreeDTrafoResultContainer} />
          <Route exact path='/geometry' component={GeometryScreenContainer} />
          <Route path='/geometry/chebyshev-circle-fit/data-input' component={ChebyshevCFInputContainer} />
          <Redirect from='*' to='/' />
        </Switch>
      </div>
    );
  }
}

export default App;