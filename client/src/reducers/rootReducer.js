import { combineReducers } from 'redux';
import applyTrafoDataInputReducer from './applyTrafoDataInputReducer/applyTrafoDataInputReducer';
import calculationStatusReducer from './calculationStatusReducer/calculationStatusReducer';
import chebyshevCircleFitDataInputReducer from './chebyshevCircleFitDataInputReducer/chebyshevCircleFitDataInputReducer';
import chebyshevCircleFitResultReducer from './chebyshevCircleFitResultReducer/chebyshevCircleFitResultReducer';
import errorReducer from './errorReducer/errorReducer';
import paramInversionReducer from './paramInversionReducer/paramInversionReducer';
import threeDTrafoDataInputReducer from './threeDTrafoDataInputReducer/threeDTrafoDataInputReducer';
import threeDTrafoResultReducer from './threeDTrafoResultReducer/threeDTrafoResultReducer';
import threeDTrafoResultDifferenceReducer from './threeDTrafoResultDifferenceReducer/threeDTrafoResultDifferenceReducer';

//TODO: create more specialized reducers
/* root reducer */
export default combineReducers({
  applyTrafoDataInput: applyTrafoDataInputReducer,
  calculationStatus: calculationStatusReducer,
  chebyshevCircleFitDataInput: chebyshevCircleFitDataInputReducer,
  chebyshevCircleFitResult: chebyshevCircleFitResultReducer,
  error: errorReducer,
  paramInversion: paramInversionReducer,
  threeDTrafoDataInput: threeDTrafoDataInputReducer,
  threeDTrafoResult: threeDTrafoResultReducer,
  threeDTrafoResultDifference: threeDTrafoResultDifferenceReducer,
});