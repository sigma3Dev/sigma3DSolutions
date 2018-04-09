import { combineReducers } from 'redux';
import calculationStatusReducer from './calculationStatusReducer/calculationStatusReducer';
import errorReducer from './errorReducer/errorReducer';
import transformationsReducer from './transformations/transformationsReducer';
import geometryReducer from './geometry/geometryReducer';

/* root reducer */
export default combineReducers({
  calculationStatus: calculationStatusReducer,
  error: errorReducer,
  geometry: geometryReducer,
  transformations: transformationsReducer,
});
