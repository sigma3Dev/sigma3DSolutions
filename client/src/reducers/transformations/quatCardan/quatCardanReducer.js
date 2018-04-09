import { combineReducers } from 'redux';
import quatCardanReducer from './quatCardanReducer/quatCardanReducer';

export default combineReducers({
  quatCardan: quatCardanReducer,
});
