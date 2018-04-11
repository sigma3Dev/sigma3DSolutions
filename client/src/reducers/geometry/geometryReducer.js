import { combineReducers } from 'redux';
import chebyshevCircleFitReducer from './chebyshevCircleFit/chebyshevCircleFitReducer';
import fitPlaneGaussReducer from './fitPlaneGauss/fitPlaneGaussReducer';
import fitPlaneRansacReducer from './fitPlaneRansac/fitPlaneRansacReducer';
import fitCylinderReducer from './fitCylinder/fitCylinderReducer';
import fitPointReducer from './fitPoint/fitPointReducer';
import fitLineL2Reducer from './fitLineL2/fitLineL2Reducer';

// try to keep alphabetical order here
export default combineReducers({
  chebyshevCircleFit: chebyshevCircleFitReducer,
  fitCylinder: fitCylinderReducer,
  fitPlaneGauss: fitPlaneGaussReducer,
  fitPlaneRansac: fitPlaneRansacReducer,
  fitPoint: fitPointReducer,
  fitLineL2: fitLineL2Reducer,
});
