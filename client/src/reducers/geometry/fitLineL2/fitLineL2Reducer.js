import { combineReducers } from 'redux';
import fitLineL2DataInputReducer from './fitLineL2DataInputReducer/fitLineL2DataInputReducer';
import fitLineL2ResultReducer from './fitLineL2ResultReducer/fitLineL2ResultReducer';

export default combineReducers({
  input: fitLineL2DataInputReducer,
  result: fitLineL2ResultReducer,
});
