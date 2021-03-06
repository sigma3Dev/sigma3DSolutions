import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ApplyTransformationInputContainer from './containers/ApplyTransformationInputContainer';
import ApplyTransformationResultContainer from './containers/ApplyTransformationResultContainer';
import BundleAdjustmentInputContainer from './containers/BundleAdjustmentInputContainer';
import BundleAdjustmentResultContainer from './containers/BundleAdjustmentResultContainer';
import FitCircleChebyshevInputContainer from './containers/FitCircleChebyshevInputContainer';
import FitCircleChebyshevResultContainer from './containers/FitCircleChebyshevResultContainer';
import GeometryScreenContainer from './containers/GeometryScreenContainer';
import FitCircleL2InputContainer from './containers/FitCircleL2InputContainer';
import FitCircleL2ResultContainer from './containers/FitCircleL2ResultContainer';
import FitCylinderInputContainer from './containers/FitCylinderInputContainer';
import FitCylinderResultContainer from './containers/FitCylinderResultContainer';
import FitPlaneGaussInputContainer from './containers/FitPlaneGaussInputContainer';
import FitPlaneGaussResultContainer from './containers/FitPlaneGaussResultContainer';
import FitPlaneRansacInputContainer from './containers/FitPlaneRansacInputContainer';
import FitPlaneRansacResultContainer from './containers/FitPlaneRansacResultContainer';
import FitPointInputContainer from './containers/FitPointInputContainer';
import FitPointResultContainer from './containers/FitPointResultContainer';
import FitLineL2InputContainer from './containers/FitLineL2InputContainer';
import FitLineL2ResultContainer from './containers/FitLineL2ResultContainer';
import FitLineRansacInputContainer from './containers/FitLineRansacInputContainer';
import FitLineRansacResultContainer from './containers/FitLineRansacResultContainer';
import FitSphereInputContainer from './containers/FitSphereInputContainer';
import FitSphereResultContainer from './containers/FitSphereResultContainer';
import ParamInversionContainer from './containers/ParamInversionContainer';
import QuatCardanContainer from './containers/QuatCardanContainer';
import StartScreenContainer from './containers/StartScreenContainer';
import ThreeDTrafoInputContainer from './containers/ThreeDTrafoInputContainer';
import ThreeDTrafoResultContainer from './containers/ThreeDTrafoResultContainer';
import TransformationsScreenContainer from './containers/TransformationsScreenContainer';
import TranslatePointAlongAxisContainer from './containers/TranslatePointAlongAxisContainer';
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
      <Route path='/transformations/quat-cardan' component={QuatCardanContainer} />
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
      <Route
        path='/transformations/translate-point-along-axis'
        component={TranslatePointAlongAxisContainer}
      />
      <Route exact path='/geometry' component={GeometryScreenContainer} />
      <Route
        path='/geometry/fit-circle-chebyshev/data-input'
        component={FitCircleChebyshevInputContainer}
      />
      <Route
        path='/geometry/fit-circle-chebyshev/result'
        component={FitCircleChebyshevResultContainer}
      />
      <Route path='/geometry/fit-plane-gauss/data-input' component={FitPlaneGaussInputContainer} />
      <Route path='/geometry/fit-plane-gauss/result' component={FitPlaneGaussResultContainer} />
      <Route
        path='/geometry/fit-plane-ransac/data-input'
        component={FitPlaneRansacInputContainer}
      />
      <Route path='/geometry/fit-plane-ransac/result' component={FitPlaneRansacResultContainer} />
      <Route path='/geometry/fit-cylinder/data-input' component={FitCylinderInputContainer} />
      <Route path='/geometry/fit-cylinder/result' component={FitCylinderResultContainer} />
      <Route path='/geometry/fit-point/data-input' component={FitPointInputContainer} />
      <Route path='/geometry/fit-point/result' component={FitPointResultContainer} />
      <Route path='/geometry/fit-line-l-two/data-input' component={FitLineL2InputContainer} />
      <Route path='/geometry/fit-line-l-two/result' component={FitLineL2ResultContainer} />
      <Route path='/geometry/fit-line-ransac/data-input' component={FitLineRansacInputContainer} />
      <Route path='/geometry/fit-line-ransac/result' component={FitLineRansacResultContainer} />
      <Route path='/geometry/fit-circle-l-two/data-input' component={FitCircleL2InputContainer} />
      <Route path='/geometry/fit-circle-l-two/result' component={FitCircleL2ResultContainer} />
      <Route path='/geometry/fit-sphere/data-input' component={FitSphereInputContainer} />
      <Route path='/geometry/fit-sphere/result' component={FitSphereResultContainer} />
      <Route
        path='/transformations/bundle-adjustment/data-input'
        component={BundleAdjustmentInputContainer}
      />
      <Route
        path='/transformations/bundle-adjustment/result'
        component={BundleAdjustmentResultContainer}
      />
      <Redirect from='*' to='/' />
    </Switch>
  </div>
);

export default App;
