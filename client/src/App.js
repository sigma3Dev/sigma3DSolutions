import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import StartScreenContainer from './containers/StartScreenContainer';
import ThreeDTrafoInputContainer from './containers/ThreeDTrafoInputContainer';
import ThreeDTrafoResultContainer from './containers/ThreeDTrafoResultContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' component={StartScreenContainer} />
          <Route path='/three-d-transformation/data-input' component={ThreeDTrafoInputContainer} />
          <Route path='/three-d-transformation/result' component={ThreeDTrafoResultContainer} />
          <Redirect from='*' to='/' />
        </Switch>
      </div>
    );
  }
}

export default App;