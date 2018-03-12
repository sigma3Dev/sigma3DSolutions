import { combineReducers } from 'redux';
import trafoDataInputReducer from './trafoDataInputReducer/trafoDataInputReducer';
import trafoResultReducer from './trafoResultReducer/trafoResultReducer';
import calculationStatusReducer from './calculationStatusReducer/calculationStatusReducer';
import errorReducer from './errorReducer/errorReducer';

/* root reducer */
export default combineReducers({
  trafoDataInput: trafoDataInputReducer,
  calculationStatus: calculationStatusReducer,
  trafoResult: trafoResultReducer,
  error: errorReducer,
});