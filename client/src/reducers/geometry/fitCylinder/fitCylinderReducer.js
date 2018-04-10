import { combineReducers } from 'redux';
import fitCylinderDataInputReducer from './fitCylinderDataInputReducer/fitCylinderDataInputReducer';
import fitCylinderResultReducer from './fitCylinderResultReducer/fitCylinderResultReducer';

export default combineReducers({
  input: fitCylinderDataInputReducer,
  result: fitCylinderResultReducer,
});
