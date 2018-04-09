import { combineReducers } from 'redux';
import chebyshevCircleFitReducer from './chebyshevCircleFit/chebyshevCircleFitReducer';
import fitPlaneGaussReducer from './fitPlaneGauss/fitPlaneGaussReducer';

export default combineReducers({
  chebyshevCircleFit: chebyshevCircleFitReducer,
  fitPlaneGauss: fitPlaneGaussReducer,
});
