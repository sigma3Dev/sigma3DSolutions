import { combineReducers } from 'redux';
import applyTrafoDataInputReducer from './applyTrafoDataInputReducer/applyTrafoDataInputReducer';
import applyTrafoDataResultReducer from './applyTrafoDataResultReducer/applyTrafoDataResultReducer';
import calculationStatusReducer from './calculationStatusReducer/calculationStatusReducer';
import chebyshevCircleFitDataInputReducer from './chebyshevCircleFitDataInputReducer/chebyshevCircleFitDataInputReducer';
import chebyshevCircleFitResultReducer from './chebyshevCircleFitResultReducer/chebyshevCircleFitResultReducer';
import errorReducer from './errorReducer/errorReducer';
import fitPlaneDataInputReducer from './fitPlaneDataInputReducer/fitPlaneDataInputReducer';
import fitPlaneResultReducer from './fitPlaneResultReducer/fitPlaneResultReducer';
import paramInversionReducer from './paramInversionReducer/paramInversionReducer';
import threeDTrafoDataInputReducer from './threeDTrafoDataInputReducer/threeDTrafoDataInputReducer';
import threeDTrafoResultReducer from './threeDTrafoResultReducer/threeDTrafoResultReducer';
import threeDTrafoResultDifferenceReducer from './threeDTrafoResultDifferenceReducer/threeDTrafoResultDifferenceReducer';

/* root reducer */
export default combineReducers({
  applyTrafoDataInput: applyTrafoDataInputReducer,
  applyTrafoDataResult: applyTrafoDataResultReducer,
  calculationStatus: calculationStatusReducer,
  chebyshevCircleFitDataInput: chebyshevCircleFitDataInputReducer,
  chebyshevCircleFitResult: chebyshevCircleFitResultReducer,
  error: errorReducer,
  fitPlaneDataInput: fitPlaneDataInputReducer,
  fitPlaneResult: fitPlaneResultReducer,
  paramInversion: paramInversionReducer,
  threeDTrafoDataInput: threeDTrafoDataInputReducer,
  threeDTrafoResult: threeDTrafoResultReducer,
  threeDTrafoResultDifference: threeDTrafoResultDifferenceReducer,
});
