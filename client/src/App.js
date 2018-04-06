import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ApplyTransformationInputContainer from './containers/ApplyTransformationInputContainer';
import ApplyTransformationResultContainer from './containers/ApplyTransformationResultContainer';
import ChebyshevCFInputContainer from './containers/ChebyshevCFInputContainer';
import ChebyshevCFResultContainer from './containers/ChebyshevCFResultContainer';
import GeometryScreenContainer from './containers/GeometryScreenContainer';
import FitPlaneGaussInputContainer from './containers/FitPlaneGaussInputContainer';
import FitPlaneGaussResultContainer from './containers/FitPlaneGaussResultContainer';
import ParamInversionContainer from './containers/ParamInversionContainer';
import StartScreenContainer from './containers/StartScreenContainer';
import ThreeDTrafoInputContainer from './containers/ThreeDTrafoInputContainer';
import ThreeDTrafoResultContainer from './containers/ThreeDTrafoResultContainer';
import TransformationsScreenContainer from './containers/TransformationsScreenContainer';
import './App.css';

/**
 * main App, contains different Routes
 * @class App
 * @extends {Component}
 */
const App = () => (
  <div className='App'>
    <Switch>
      <Route exact path='/' component={StartScreenContainer} />
      <Route exact path='/transformations' component={TransformationsScreenContainer} />
      <Route path='/transformations/parameter-inversion' component={ParamInversionContainer} />
      <Route
        path='/transformations/three-d-transformation/data-input'
        component={ThreeDTrafoInputContainer}
      />
      <Route
        path='/transformations/three-d-transformation/result'
        component={ThreeDTrafoResultContainer}
      />
      <Route
        path='/transformations/transform/data-input'
        component={ApplyTransformationInputContainer}
      />
      <Route
        path='/transformations/transform/result'
        component={ApplyTransformationResultContainer}
      />
      <Route exact path='/geometry' component={GeometryScreenContainer} />
      <Route
        path='/geometry/chebyshev-circle-fit/data-input'
        component={ChebyshevCFInputContainer}
      />
      <Route path='/geometry/chebyshev-circle-fit/result' component={ChebyshevCFResultContainer} />
      <Route path='/geometry/fit-plane-gauss/data-input' component={FitPlaneGaussInputContainer} />
      <Route path='/geometry/fit-plane-gauss/result' component={FitPlaneGaussResultContainer} />
      <Redirect from='*' to='/' />
    </Switch>
  </div>
);

export default App;
