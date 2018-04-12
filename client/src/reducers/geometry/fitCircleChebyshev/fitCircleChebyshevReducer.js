import { combineReducers } from 'redux';
import fitCircleChebyshevDataInputReducer from './fitCircleChebyshevDataInputReducer/fitCircleChebyshevDataInputReducer';
import fitCircleChebyshevResultReducer from './fitCircleChebyshevResultReducer/fitCircleChebyshevResultReducer';

export default combineReducers({
  input: fitCircleChebyshevDataInputReducer,
  result: fitCircleChebyshevResultReducer,
});
