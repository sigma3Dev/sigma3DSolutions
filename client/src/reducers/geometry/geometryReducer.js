import { combineReducers } from 'redux';
import chebyshevCircleFitReducer from './chebyshevCircleFit/chebyshevCircleFitReducer';
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
  chebyshevCircleFit: chebyshevCircleFitReducer,
  fitCircleL2: fitCircleL2Reducer,
  fitCylinder: fitCylinderReducer,
  fitLineL2: fitLineL2Reducer,
  fitLineRansac: fitLineRansacReducer,
  fitPlaneGauss: fitPlaneGaussReducer,
  fitPlaneRansac: fitPlaneRansacReducer,
  fitPoint: fitPointReducer,
  fitSphere: fitSphereReducer,
});
