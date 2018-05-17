import { combineReducers } from 'redux';
import translatePointAlongAxisReducer from './translatePointAlongAxisReducer/translatePointAlongAxisReducer';

export default combineReducers({
  translatePointAlongAxis: translatePointAlongAxisReducer,
});
