import { combineReducers } from 'redux';
import paramInversionReducer from './paramInversionReducer/paramInversionReducer';

export default combineReducers({
  paramInversion: paramInversionReducer,
});
