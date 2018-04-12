import { combineReducers } from 'redux';
import fitLineRansacDataInputReducer from './fitLineRansacDataInputReducer/fitLineRansacDataInputReducer';
import fitLineRansacResultReducer from './fitLineRansacResultReducer/fitLineRansacResultReducer';

export default combineReducers({
  input: fitLineRansacDataInputReducer,
  result: fitLineRansacResultReducer,
});
