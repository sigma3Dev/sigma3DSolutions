import { combineReducers } from 'redux';
import applyTrafoReducer from './applyTrafo/applyTrafoReducer';
import paramInversionReducer from './paramInversion/paramInversionReducer';
import quatCardanReducer from './quatCardan/quatCardanReducer';
import threeDTrafoReducer from './threeDTrafo/threeDTrafoReducer';

export default combineReducers({
  applyTrafo: applyTrafoReducer,
  paramInversion: paramInversionReducer,
  quatCardan: quatCardanReducer,
  threeDTrafo: threeDTrafoReducer,
});
