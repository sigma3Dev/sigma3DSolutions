import { combineReducers } from 'redux';
import bundleAdjustmentDataInputReducer from './bundleAdjustmentDataInputReducer/bundleAdjustmentDataInputReducer';
import bundleAdjustmentResultReducer from './bundleAdjustmentResultReducer/bundleAdjustmentResultReducer';

export default combineReducers({
  input: bundleAdjustmentDataInputReducer,
  result: bundleAdjustmentResultReducer,
});
