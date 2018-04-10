import { combineReducers } from 'redux';
import chebyshevCircleFitReducer from './chebyshevCircleFit/chebyshevCircleFitReducer';
import fitPlaneGaussReducer from './fitPlaneGauss/fitPlaneGaussReducer';
import fitPlaneRansacReducer from './fitPlaneRansac/fitPlaneRansacReducer';
import fitCylinderReducer from './fitCylinder/fitCylinderReducer';

export default combineReducers({
  chebyshevCircleFit: chebyshevCircleFitReducer,
  fitPlaneGauss: fitPlaneGaussReducer,
  fitPlaneRansac: fitPlaneRansacReducer,
  fitCylinder: fitCylinderReducer,
});
