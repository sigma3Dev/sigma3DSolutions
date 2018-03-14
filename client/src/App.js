import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import StartScreenContainer from './containers/StartScreenContainer';
import ThreeDTrafoInputContainer from './containers/ThreeDTrafoInputContainer';
import ThreeDTrafoResultContainer from './containers/ThreeDTrafoResultContainer';
import GeometryScreenContainer from './containers/GeometryScreenContainer';
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
          <Route exact path='/transformations' component={StartScreenContainer} />
          <Route path='/transformations/three-d-transformation/data-input' component={ThreeDTrafoInputContainer} />
          <Route path='/transformations/three-d-transformation/result' component={ThreeDTrafoResultContainer} />
          <Route path='/geometry' component={GeometryScreenContainer} />
          {/* TODO: change homepage to '/' */}
          <Redirect from='*' to='/transformations' />
        </Switch>
      </div>
    );
  }
}

export default App;