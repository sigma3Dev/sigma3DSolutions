import { combineReducers } from 'redux';
import threeDTrafoDataInputReducer from './threeDTrafoDataInputReducer/threeDTrafoDataInputReducer';
import threeDTrafoResultReducer from './threeDTrafoResultReducer/threeDTrafoResultReducer';
import threeDTrafoResultDifferenceReducer from './threeDTrafoResultDifferenceReducer/threeDTrafoResultDifferenceReducer';

export default combineReducers({
  input: threeDTrafoDataInputReducer,
  result: threeDTrafoResultReducer,
  difference: threeDTrafoResultDifferenceReducer,
});
