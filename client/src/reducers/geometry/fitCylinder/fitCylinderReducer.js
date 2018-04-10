import { combineReducers } from 'redux';
import fitCylinderDataInputReducer from './fitCylinderDataInputReducer/fitCylinderDataInputReducer';

export default combineReducers({
  input: fitCylinderDataInputReducer,
});
