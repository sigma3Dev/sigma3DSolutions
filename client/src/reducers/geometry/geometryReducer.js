import { combineReducers } from 'redux';
import fitCircleChebyshevReducer from './fitCircleChebyshev/fitCircleChebyshevReducer';
import fitPlaneGaussReducer from './fitPlaneGauss/fitPlaneGaussReducer';
import fitPlaneRansacReducer from './fitPlaneRansac/fitPlaneRansacReducer';
import fitCylinderReducer from './fitCylinder/fitCylinderReducer';
import fitPointReducer from './fitPoint/fitPointReducer';
import fitLineL2Reducer from './fitLineL2/fitLineL2Reducer';
import fitLineRansacReducer from './fitLineRansac/fitLineRansacReducer';
import fitCircleL2Reducer from './fitCircleL2/fitCircleL2Reducer';
import fitSphereReducer from './fitSphere/fitSphereReducer';

// try to keep alphabetical order here
export default combineReducers({
  fitCircleChebyshev: fitCircleChebyshevReducer,
  fitCircleL2: fitCircleL2Reducer,
  fitCylinder: fitCylinderReducer,
  fitLineL2: fitLineL2Reducer,
  fitLineRansac: fitLineRansacReducer,
  fitPlaneGauss: fitPlaneGaussReducer,
  fitPlaneRansac: fitPlaneRansacReducer,
  fitPoint: fitPointReducer,
  fitSphere: fitSphereReducer,
});
