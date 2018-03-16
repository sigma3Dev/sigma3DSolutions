import { combineReducers } from 'redux';
import calculationStatusReducer from './calculationStatusReducer/calculationStatusReducer';
import chebyshevCircleFitDataInputReducer from './chebyshevCircleFitDataInputReducer/chebyshevCircleFitDataInputReducer';
import chebyshevCircleFitResultReducer from './chebyshevCircleFitResultReducer/chebyshevCircleFitResultReducer';
import errorReducer from './errorReducer/errorReducer';
import trafoDataInputReducer from './trafoDataInputReducer/trafoDataInputReducer';
import trafoResultReducer from './trafoResultReducer/trafoResultReducer';

/* root reducer */
export default combineReducers({
  calculationStatus: calculationStatusReducer,
  chebyshevCircleFitDataInput: chebyshevCircleFitDataInputReducer,
  chebyshevCircleFitResult: chebyshevCircleFitResultReducer,
  error: errorReducer,
  trafoDataInput: trafoDataInputReducer,
  trafoResult: trafoResultReducer,
});