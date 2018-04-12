import { combineReducers } from 'redux';
import fitSphereDataInputReducer from './fitSphereDataInputReducer/fitSphereDataInputReducer';
import fitSphereResultReducer from './fitSphereResultReducer/fitSphereResultReducer';

export default combineReducers({
  input: fitSphereDataInputReducer,
  result: fitSphereResultReducer,
});
