import { combineReducers } from 'redux';
import calculationStatusReducer from './calculationStatusReducer/calculationStatusReducer';
import chebyshevCircleFitDataInputReducer from './chebyshevCircleFitDataInputReducer/chebyshevCircleFitDataInputReducer';
import chebyshevCircleFitResultReducer from './chebyshevCircleFitResultReducer/chebyshevCircleFitResultReducer';
import errorReducer from './errorReducer/errorReducer';
<<<<<<< HEAD
=======
import paramInversionReducer from './paramInversionReducer/paramInversionReducer';
>>>>>>> master
import trafoDataInputReducer from './trafoDataInputReducer/trafoDataInputReducer';
import trafoResultReducer from './trafoResultReducer/trafoResultReducer';

/* root reducer */
export default combineReducers({
  calculationStatus: calculationStatusReducer,
  chebyshevCircleFitDataInput: chebyshevCircleFitDataInputReducer,
  chebyshevCircleFitResult: chebyshevCircleFitResultReducer,
  error: errorReducer,
<<<<<<< HEAD
=======
  paramInversion: paramInversionReducer,
>>>>>>> master
  trafoDataInput: trafoDataInputReducer,
  trafoResult: trafoResultReducer,
});