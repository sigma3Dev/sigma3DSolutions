import { combineReducers } from 'redux';
import fitCircleL2DataInputReducer from './fitCircleL2DataInputReducer/fitCircleL2DataInputReducer';
import fitCircleL2ResultReducer from './fitCircleL2ResultReducer/fitCircleL2ResultReducer';

export default combineReducers({
  input: fitCircleL2DataInputReducer,
  result: fitCircleL2ResultReducer,
});
