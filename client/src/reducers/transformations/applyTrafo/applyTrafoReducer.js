import { combineReducers } from 'redux';
import applyTrafoDataInputReducer from './applyTrafoDataInputReducer/applyTrafoDataInputReducer';
import applyTrafoDataResultReducer from './applyTrafoDataResultReducer/applyTrafoDataResultReducer';

export default combineReducers({
  input: applyTrafoDataInputReducer,
  result: applyTrafoDataResultReducer,
});
