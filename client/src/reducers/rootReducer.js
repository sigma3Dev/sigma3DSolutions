import { combineReducers } from 'redux';
import trafoDataInputReducer from './trafoDataInputReducer/trafoDataInputReducer';

export default combineReducers({
  trafoDataInput: trafoDataInputReducer,
});