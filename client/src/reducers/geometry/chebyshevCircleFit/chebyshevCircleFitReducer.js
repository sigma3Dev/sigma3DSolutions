import { combineReducers } from 'redux';
import chebyshevCircleFitDataInputReducer from './chebyshevCircleFitDataInputReducer/chebyshevCircleFitDataInputReducer';
import chebyshevCircleFitResultReducer from './chebyshevCircleFitResultReducer/chebyshevCircleFitResultReducer';

export default combineReducers({
  input: chebyshevCircleFitDataInputReducer,
  result: chebyshevCircleFitResultReducer,
});
