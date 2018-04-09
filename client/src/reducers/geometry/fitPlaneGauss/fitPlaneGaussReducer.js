import { combineReducers } from 'redux';
import fitPlaneGaussDataInputReducer from './fitPlaneGaussDataInputReducer/fitPlaneGaussDataInputReducer';
import fitPlaneGaussResultReducer from './fitPlaneGaussResultReducer/fitPlaneGaussResultReducer';

export default combineReducers({
  input: fitPlaneGaussDataInputReducer,
  result: fitPlaneGaussResultReducer,
});
