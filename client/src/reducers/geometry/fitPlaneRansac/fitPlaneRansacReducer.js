import { combineReducers } from 'redux';
import fitPlaneRansacDataInputReducer from './fitPlaneRansacDataInputReducer/fitPlaneRansacDataInputReducer';
import fitPlaneRansacResultReducer from './fitPlaneRansacResultReducer/fitPlaneRansacResultReducer';

export default combineReducers({
  input: fitPlaneRansacDataInputReducer,
  result: fitPlaneRansacResultReducer,
});
