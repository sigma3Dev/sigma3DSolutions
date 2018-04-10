import { combineReducers } from 'redux';
import fitPointDataInputReducer from './fitPointDataInputReducer/fitPointDataInputReducer';
import fitPointResultReducer from './fitPointResultReducer/fitPointResultReducer';

export default combineReducers({
  input: fitPointDataInputReducer,
  result: fitPointResultReducer,
});
