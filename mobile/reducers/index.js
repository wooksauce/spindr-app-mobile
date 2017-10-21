import { combineReducers } from 'redux';
import * as dummyReducer from './dummy';
// import * as navigationReducer from './navigation'

export default combineReducers(Object.assign(
  dummyReducer
));
